import Nav from "@/components/Nav"
import Hero from "@/components/Hero/Hero"
import Analytics from "@/components/HomePage/Analytics"
import Services from "@/components/HomePage/Services"
import Newsletter from "@/components/HomePage/Newsletter"
import Contact from "@/components/Contact"
import FAQ from "@/components/FAQ/FAQ"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Analytics />
      <Services />
      <Newsletter />
      <section id="faq">
        <FAQ />
      </section>
      <Contact />
    </div>
  )
}

