import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed')
      }

      setStatus({
        type: "success",
        message: "Thank you for subscribing!"
      })
      setEmail("")
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-[#1B3B5A] text-white py-12 sm:py-16 lg:py-20 rounded-3xl  mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%] w-full">
        <div className="max-w-[90rem] mx-auto text-center">
          <motion.h2
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8"
          >
            Join Our <span className="text-orange-500">Newsletter</span>
          </motion.h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-2 lg:gap-4 max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-[#2A4A69] border-none text-white placeholder:text-gray-400 rounded-full text-base sm:text-lg lg:text-xl lg:py-6 w-full"
                disabled={loading}
              />
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 lg:px-12 text-base sm:text-lg lg:text-xl lg:py-6 whitespace-nowrap w-full sm:w-auto"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </motion.div>
          </form>
          {status.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 ${status.type === "error" ? "text-red-400" : "text-green-400"}`}
            >
              {status.message}
            </motion.p>
          )}
          <motion.p 
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 mt-4 lg:mt-6 px-4 sm:px-0"
          >
            * Will send you weekly updates for your better tool marketing
          </motion.p>
        </div>
      </section>
    </>
  )
}
