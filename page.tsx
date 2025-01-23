import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Nav from "@/components/Nav/Nav"
import Hero from "@/components/Hero/Hero"
import Analytics from "@/components/HomePage/Analytics"
import Services from "@/components/HomePage/Services"
import Newsletter from "@/components/HomePage/Newsletter"
import Contact from "@/components/HomePage/Contact"
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

