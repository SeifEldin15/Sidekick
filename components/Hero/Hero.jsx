import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 items-center place-items-center">
        <div>
          <p className="text-orange-500 text-sm font-medium mb-4">Best Creative Company</p>
          <h1 className="text-[5.2rem] leading-[1.2] font-bold text-[#002B3D] mb-6">
            We Take Care Of<br />
            <span className="font-bold bg-gradient-to-r from-[#FF6B00] to-[#FFA149] inline-block text-transparent bg-clip-text overflow-visible pb-2 pr-4">Your <span className="italic">Brand</span> </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            We deliver solutions that build trust, get leads, and keep your business front and center.
          </p>
          <Button className="bg-[#2B5174] hover:bg-[#1B3B5A] rounded-full  py-3 h-auto text-base flex items-center gap-2">
            Book Your Meeting
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
          <Image
            src="/image 2.png"
            alt="Hero Illustration"
            width={600}
            height={500}
            className="object-contain"
          />
      </section>
    </>
  )
}