"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Nav from "@/components/Nav"
import Contact from "@/components/Contact"
export default function Page() {
  return (
    <>
    <Nav />
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-slate-900 mb-8 max-w-2xl">
        We Drive Strategy, Design Brands, Tell Stories And More
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <div className="relative w-full h-[300px] md:h-[250px]">
          <Image
            src="/services/service1.png"
            alt="Green billboard design"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[250px]">
          <Image
            src="/services/service2.png"
            alt="Product packaging"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[250px]">
          <Image
            src="/services/service3.png"
            alt="Store signage"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="relative w-full h-[300px] md:h-[250px]">
          <Image
            src="/services/service4.png"
            alt="Product photography"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>

<div className="mb-8">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            We Believe In Well-Crafted Digital Experiences Through 
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">
          Strategic Foundations, Collaborative Design,
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">    And
          Creative Development.</h2>
    </div>      
    <div className="grid md:grid-cols-2 gap-8 mb-16 ">
        <div>
          <p className="text-2xl text-slate-600 mb-8 max-w-xl">
            Branding Is Creating A Unique And Memorable Identity For A Product, Service, Our Company That Resonates With
            The Target Audience
          </p>
          <button className="inline-flex items-center gap-2 px-24 py-3 bg-[#3B5E7F] text-white rounded-full hover:bg-[#2D4B66] transition-colors mt-8 text-lg">
            Details
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <Image
            src="/services/servicedetails.png"
            alt="Product design showcase"
            height={500}
            width={600}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Services List */}
      <div className="">
        {["Creative Design", "Digital Experience", "Digital Experience", "Digital Experience"].map((service, index) => (
          <div key={index} className="flex items-center justify-between py-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-slate-600">{service}</h3>
            <button className="px-6 py-2 text-[#FF6B00] border border-[#FF6B00] rounded-full hover:bg-[#FF6B00] hover:text-white transition-colors">
              Details
            </button>
          </div>
        ))}
      </div>
    </main>
    <Contact />
    </>
  )
}

