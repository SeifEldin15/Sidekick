import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from 'next/navigation'
import { useSession, signOut } from "next-auth/react"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  const isActive = (path) => pathname === path

  const handleFAQClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      setTimeout(() => {
        const faqSection = document.getElementById('faq')
        if (faqSection) {
          const navHeight = 80 // Approximate navbar height
          const faqPosition = faqSection.getBoundingClientRect().top + window.pageYOffset - navHeight
          window.scrollTo({
            top: faqPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  return (
    <nav className="flex items-center justify-between py-4 max-w-[100%] mx-auto  z-[9999] fixed top-0 left-0 right-0 bg-white px-[5%]">
      <div className="flex-shrink-0 w-[200px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sidekick Logo"
            width={140}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>

      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white flex-col items-center py-4 shadow-lg`}>
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <Link href="/" className={`w-full text-center px-4 py-2 rounded-full ${isActive('/') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}>
            Home
          </Link>
          <Link href="/services" className={`w-full text-center px-4 py-2 rounded-full ${isActive('/services') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}>
            Services
          </Link>
          <Link href="/blog" className={`w-full text-center px-4 py-2 rounded-full ${isActive('/blog') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}>
            Blog
          </Link>
          <Link href="https://www.skool.com/startuplabs" className={`w-full text-center px-4 py-2 rounded-full ${isActive('/community') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}>
            Community
          </Link>
          <Link 
            href="/#faq" 
            onClick={handleFAQClick}
            className={`w-full text-center px-4 py-2 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500`}
          >
            FAQs
          </Link>
          <div className="w-full flex flex-col gap-4">
            {session ? (
              <>
                <span className="w-full text-center text-gray-600">
                  Welcome, {session.user.name}
                </span>
                <Button 
                  onClick={() => signOut()} 
                  className="w-full bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2"
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" className="w-full text-center px-4 py-2 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2">
                    Sign up free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1 mx-auto">
        <div className="bg-gray-100 rounded-full px-4 py-2">
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className={`px-4 py-1 rounded-full ${isActive('/') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`px-4 py-1 rounded-full ${isActive('/services') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-1 rounded-full ${isActive('/blog') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}
            >
              Blog
            </Link>
            <Link 
              href="/case-study" 
              className={`px-4 py-1 rounded-full ${isActive('/case-study') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}
            >
              Case Study
            </Link>
            <Link 
              href="https://www.skool.com/startuplabs" 
              className={`px-4 py-1 rounded-full ${isActive('/community') ? 'text-orange-500 border border-orange-500' : 'text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500'}`}
            >
              Community
            </Link>
            {/* <Link 
              href="/#faq"
              onClick={handleFAQClick}
              className={`px-4 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500`}
            >
              FAQs
            </Link> */}
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-shrink-0 w-[200px] justify-end">
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {session.user.name}</span>
            <Button 
              onClick={() => signOut()} 
              className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2"
            >
              Sign out
            </Button>
          </div>
        ) : (
          <>
            <Link href="/login" className="text-gray-600">
              Login
            </Link>
            <Link href="/signup">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2">
                Sign up free
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav> 
  )
}