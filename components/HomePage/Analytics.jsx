import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Analytics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <>
      {/* Analytics Section */}
      <section className="bg-black text-white px-6 py-16 rounded-3xl relative overflow-hidden max-w-[92%] mx-auto">
        <Image 
          src="/sqaures.png"
          alt="Background Pattern"
          fill
          className="object-cover absolute top-0 left-0"
        />
        <div className="absolute inset-0 " />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center relative md:ml-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/analytics.png"
              alt="Analytics Dashboard"
              width={450}
              height={350}
              className="object-contain w-[300px] md:w-[450px] mx-auto"
            />
          </motion.div>
          <motion.div 
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-7xl mb-6">
              Elevating Brands,
              <br />
              Driving Growth
            </h2>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              At Sidekick Creative Company, We Specialize In Delivering Innovative Content, Stunning Designs, And
              Strategic Marketing Solutions To Help Your Business Thrive In A Competitive Market.
            </p>
            <Button 
              variant="default" 
              className="bg-black text-white border-2 border-white rounded-full px-4 sm:px-6 py-2 hover:bg-white hover:text-black transition-colors flex items-center gap-2 text-sm sm:text-base mx-auto md:mx-0"
            >
              Get 3 Months of Content in 1 day
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}