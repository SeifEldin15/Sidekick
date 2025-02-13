import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <section className="py-16 max-w-[92%] mx-auto" ref={ref}>
      {/* Move text section outside the flex container and show it first on mobile */}
      <div
        className="text-gray-600 mb-8 flex flex-col items-center max-w-lg mx-auto md:hidden"
      >
        <motion.h3 
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="font-semibold mb-2 text-7xl text-black"
        >
          Services We <span className="text-orange-500">Provide</span>
        </motion.h3>
        <p>
          Sidekick Creative Company empowers businesses with affordable,
          innovative marketing solutions. We prioritize creativity, client
          focus, and growth in a dynamic digital world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - 4 boxes */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Marketing Tools */}
          <motion.div
            key={0}
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px]"
          >
            <div className="text-[#5CE1E6] mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 10h2v7H7v-7zm4-3h2v10h-2V7zm4 6h2v4h-2v-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Marketing Tools</h3>
          </motion.div>

          {/* Website Development */}
          <motion.div
            key={1}
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px]"
          >
            <div className="text-[#5CE1E6] mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
          </motion.div>

          {/* Content Creation */}
          <motion.div
            key={2}
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px] mt-8"
          >
            <div className="text-[#5CE1E6] mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Content Creation and Strategy</h3>
          </motion.div>

          {/* Graphic Design */}
          <motion.div
            key={3}
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px] mt-8"
          >
            <div className="text-[#5CE1E6] mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
          </motion.div>
        </div>

        {/* Right Column - text and 2 boxes */}
        <div className="md:w-1/2">
          {/* Text section visible only on medium screens and up */}
          <div className="text-gray-600 mb-8 flex-col items-center max-w-lg ml-10 hidden md:flex">
            <motion.h3 
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="font-semibold mb-2 text-7xl text-black"
            >
              Services We <span className="text-orange-500">Provide</span>
            </motion.h3>
            <p>
              Sidekick Creative Company empowers businesses with affordable,
              innovative marketing solutions. We prioritize creativity, client
              focus, and growth in a dynamic digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Advertising */}
            <motion.div
              key={4}
              custom={4}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px]"
            >
              <div className="text-[#5CE1E6] mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advertising (Media Buying)</h3>
            </motion.div>

            {/* Fractional CMO */}
            <motion.div
              key={5}
              custom={5}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-[#2D4356] p-6 rounded-lg text-white hover:scale-105 transition-transform duration-300 h-[200px]"
            >
              <div className="text-[#5CE1E6] mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fractional (CMO)</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
