"use client"

import Image from "next/image";
import Nav from "@/components/Nav"
import Contact from "@/components/Contact"

export default function CaseStudies() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-4 py-12 max-w-7xl mt-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Our Success Stories
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore how Sidekick Creative Company has helped businesses achieve their goals
          through innovative strategies and impactful designs. Each case study showcases our
          dedication to delivering results and transforming visions into reality
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16">
        <Image
          src="/casestudies/image.png"
          alt="Hero image"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Content Creation */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/man-talking-camera-recording-himself-vlog-working-from-home-young-content-creator 1.png"
              alt="Content Creation"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Content Creation</h2>
          <p className="text-gray-600">
            Crafting engaging content that resonates with your target audience and drives results.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/Pattern-fill-a5f7b9f695af0c074872e10a39492de1.png"
              alt="Digital Marketing"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Digital Marketing</h2>
          <p className="text-gray-600">
            Comprehensive digital marketing strategies to grow your online presence.
          </p>
        </div>

        {/* Photography */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/pexels-bertellifotografia-7172661 1.png"
              alt="Professional Photography"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Professional Photography</h2>
          <p className="text-gray-600">
            High-quality visual content that captures your brand's essence.
          </p>
        </div>

        {/* Brand Development */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/pexels-dylannhendricks-14765792 1.png"
              alt="Brand Development"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Brand Development</h2>
          <p className="text-gray-600">
            Building strong, memorable brands that stand out in the market.
          </p>
        </div>

        {/* Brand Development */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/casestudies.png"
              alt="Brand Development"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Brand Development</h2>
          <p className="text-gray-600">
            Building strong, memorable brands that stand out in the market.
          </p>
        </div>


        {/* Social Media Management */}
        <div className="space-y-4 text-center">
          <div className="h-48 overflow-hidden rounded-lg">
            <Image
              src="/casestudies/pexels-kevin-ku-92347-577585 1.png"
              alt="Social Media Management"
              width={800}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">Social Media Management</h2>
          <p className="text-gray-600">
            Strategic social media solutions to enhance your digital presence and engagement.
          </p>
        </div>
      </div>
    </div>
    <Contact />
    </div>
  );
}
