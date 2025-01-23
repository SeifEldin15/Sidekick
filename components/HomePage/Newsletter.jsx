import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-[#1B3B5A] text-white py-16 rounded-3xl max-w-[1400px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Join Our <span className="text-orange-500">Newsletter</span>
          </h2>
          <div className="flex gap-2 mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-[#2A4A69] border-none text-white placeholder:text-gray-400 rounded-full text-lg"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 text-lg">Subscribe</Button>
          </div>
          <p className="text-base text-gray-400 mt-4">* Will send you weekly updates for your better tool marketing</p>
        </div>
      </section>
    </>
  )
}
