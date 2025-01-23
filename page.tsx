import Nav from "@/components/Nav"
import Hero from "@/components/Hero/Hero"
import Analytics from "@/components/HomePage/Analytics"
import Services from "@/components/HomePage/Services"
import Newsletter from "@/components/HomePage/Newsletter"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Analytics />
      <Services />
      <Newsletter />
      <Contact />
    </div>
  )
}

