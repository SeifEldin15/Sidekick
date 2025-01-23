import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Nav() {
  return (
    <nav className="flex items-center justify-between  py-4 max-w-[1400px] mx-auto">
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Sidekick Logo"
          width={190}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="hidden md:flex items-center justify-center mx-auto max-w-xl bg-gray-100 rounded-full px-4 py-2">
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="px-4 py-1 rounded-full text-orange-500 border border-orange-500 font-medium "
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="px-4 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500 hover:"
          >
            Services
          </Link>
          <Link 
            href="/blog" 
            className="px-4 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500 hover:"
          >
            Blog
          </Link>
          <Link 
            href="/store" 
            className="px-4 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500 hover:"
          >
            Store
          </Link>
          <Link 
            href="/faqs" 
            className="px-4 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border hover:border-orange-500 hover:"
          >
            FAQs
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <Link href="/login" className="text-gray-600">
          Login
        </Link>
        <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2">Sign up free</Button>
      </div>
    </nav> 
  )
}