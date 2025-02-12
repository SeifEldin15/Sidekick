import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-[#1B3B5A] text-white py-12 sm:py-16 lg:py-20 rounded-3xl  mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] w-full">
        <div className="max-w-[90rem] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
            Join Our <span className="text-orange-500">Newsletter</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 lg:gap-4 max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-[#2A4A69] border-none text-white placeholder:text-gray-400 rounded-full text-base sm:text-lg lg:text-xl lg:py-6"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 lg:px-12 text-base sm:text-lg lg:text-xl lg:py-6 whitespace-nowrap">Subscribe</Button>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-4 lg:mt-6 px-4 sm:px-0">* Will send you weekly updates for your better tool marketing</p>
        </div>
      </section>
    </>
  )
}
