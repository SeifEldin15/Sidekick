import Image from "next/image"
import Link from "next/link"

export default function BlogHome() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-[92%]">
      {/* Hero Section */}
      <article className="mb-16 overflow-hidden rounded-lg bg-white shadow-lg md:flex">
        <div className="flex-1 p-6 md:p-12">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-gray-900">Marketing Insights That Drive Success</h1>
          <p className="mb-6 md:mb-10 text-sm md:text-md text-gray-600">
            Welcome to the Sidekick Creative Company blog! Here, we share actionable strategies, expert tips, and the
            latest trends to help your business excel in key areas
          </p>
          <div className="flex items-center justify-between">
            <time className="text-sm md:text-base text-gray-500">May 20th 2020</time>
            <Link href="#" className="text-md font-bold text-primary hover:text-primary/90">
              Read more
            </Link>
          </div>
        </div>
        <div className="relative h-[20rem] flex-1 md:h-auto">
          <Image
            src="/blog/topblog.png"
            alt="Person working on laptop"
            fill
            className="object-cover"
          />
        </div>
      </article>

      {/* Blog Grid */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, image: "/blog/blog1.png" },
          { id: 2, image: "/blog/blog2.png" },
          { id: 3, image: "/blog/blog3.png" }
        ].map(({ id, image }) => (
          <article key={id} className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative h-48">
              <Image
                src={image}
                alt="Laptop workspace"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-xl font-bold text-gray-900">long established</h2>
              <p className="mb-4 text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that....
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">May 20th 2020</time>
                <Link href="#" className="text-sm font-medium text-primary hover:text-primary/90">
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Feature */}
      <article className="grid gap-8 md:grid-cols-2 bg-[#F0F2F6] rounded-lg overflow-hidden">
        <div className="order-2 p-8 md:p-24 flex flex-col justify-center md:order-1">
          <h2 className="mb-4 md:mb-8 text-4xl md:text-6xl font-bold text-gray-900">What is Lorem Ipsum?</h2>
          <p className="mb-6 md:mb-12 text-lg md:text-xl text-gray-600 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
          </p>
          <div className="flex items-center justify-between">
            <time className="text-base md:text-lg text-gray-500">May 20</time>
            <Link href="#" className="text-base md:text-lg font-bold text-gray-900 hover:text-gray-700">
              Read more
            </Link>
          </div>
        </div>
        <div className="relative h-[24rem] order-1 md:order-2 md:h-auto">
          <Image
            src="/blog/imagebloglarge.png"
            alt="Laptop with code editor"
            fill
            className="object-cover"
          />
        </div>
      </article>
    </main>
  )
}

