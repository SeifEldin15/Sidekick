import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-JzgN5gc1sBxNpEBVWhFr04EPSaAkBm.png"
            alt="Sidekick Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-orange-500 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-600">
              services
            </Link>
            <Link href="/blog" className="text-gray-600">
              blog
            </Link>
            <Link href="/store" className="text-gray-600">
              store
            </Link>
            <Link href="/faqs" className="text-gray-600">
              FAQs
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600">
            Login
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600">Sign up free</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-500 font-medium mb-4">Best Creative Company</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B3B5A] mb-6">
            We Take Care Of <span className="text-orange-500 italic">Your Brand</span>
          </h1>
          <p className="text-gray-600 mb-8">
            We deliver solutions that build trust, get leads, and keep your business front and center.
          </p>
          <Button className="bg-[#1B3B5A] hover:bg-[#2C4B6A] flex items-center gap-2">
            Book Your Meeting
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-JzgN5gc1sBxNpEBVWhFr04EPSaAkBm.png"
            alt="Hero Illustration"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-JzgN5gc1sBxNpEBVWhFr04EPSaAkBm.png"
            alt="Analytics Dashboard"
            width={500}
            height={400}
            className="object-contain"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevating Brands,
              <br />
              Driving Growth
            </h2>
            <p className="text-gray-400 mb-8">
              At Sidekick Creative Company, We Specialize In Delivering Innovative Content, Stunning Designs, And
              Strategic Marketing Solutions To Help Your Business Thrive In A Competitive Market.
            </p>
            <Button variant="outline" className="text-white border-white flex items-center gap-2">
              Get 3 Months of Content in 1 day
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="text-4xl font-bold text-[#1B3B5A]">
              Services
              <br />
              We Provide
            </h2>
            <p className="text-gray-600">
              Sidekick Creative Company empowers businesses with affordable, innovative marketing solutions. We
              prioritize creativity, client focus, and growth in a dynamic digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Marketing Tools", icon: "📈" },
              { title: "Website Development", icon: "💻" },
              { title: "Content Creation and Strategy", icon: "🎥" },
              { title: "Graphic Design", icon: "🎨" },
              { title: "Advertising (Media Buying)", icon: "📱" },
              { title: "Fractional (CMO)", icon: "📊" },
            ].map((service) => (
              <div key={service.title} className="bg-[#1B3B5A] text-white p-6 rounded-lg">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#1B3B5A] text-white px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our <span className="text-orange-500">Newsletter</span>
          </h2>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-white text-white placeholder:text-gray-400"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">* Well send you weekly updates for your better tool marketing</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent border-white text-white placeholder:text-gray-400"
            />
            <h2 className="text-5xl font-bold mt-4">Lets Talk</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link href="/home" className="block text-gray-400">
                  Home
                </Link>
                <Link href="/agency" className="block text-gray-400">
                  Agency
                </Link>
                <Link href="/case-study" className="block text-gray-400">
                  Case Study
                </Link>
                <Link href="/resource" className="block text-gray-400">
                  Resource
                </Link>
                <Link href="/contact" className="block text-gray-400">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Licence</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-gray-400">
                  Privacy Policy
                </Link>
                <Link href="/copyright" className="block text-gray-400">
                  Copyright
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">(406) 555-0120</p>
                <p className="text-gray-400">support@sidekick.com</p>
                <p className="text-gray-400">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

