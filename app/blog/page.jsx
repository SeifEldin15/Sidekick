"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Nav from "@/components/Nav"
import Contact from "@/components/Contact"

export default function BlogHome() {
  const [posts, setPosts] = useState([])
  const [featuredPost, setFeaturedPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        
        // Set the first post as featured
        setFeaturedPost(data[0])
        // Rest of the posts for the grid
        setPosts(data.slice(1))
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div className="pt-[72px]">
        <Nav />
    </div>
    <main className="container mx-auto px-4 py-8 max-w-[92%]">
      {/* Hero Section */}
      <article className="mb-16 overflow-hidden rounded-lg bg-white shadow-lg md:flex">
        <div className="flex-1 p-6 md:p-12">
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-gray-900">
            {featuredPost?.title}
          </h1>
          <p className="mb-6 md:mb-10 text-sm md:text-md text-gray-600">
            {featuredPost?.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <time className="text-sm md:text-base text-gray-500">
              {new Date(featuredPost?.createdAt).toLocaleDateString()}
            </time>
            <Link 
              href={`/blog/post/${featuredPost?._id}`} 
              className="text-md font-bold text-primary hover:text-primary/90"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="relative h-[20rem] flex-1 md:h-auto z-[1]">
          <Image
            src={featuredPost?.image || "/blog/topblog.png"}
            alt={featuredPost?.title}
            fill
            className="object-cover"
          />
        </div>
      </article>

      {/* Blog Grid */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post._id} className="overflow-hidden rounded-lg bg-white shadow-lg">
            <Link href={`/blog/post/${post._id}`} className="block">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-xl font-bold text-gray-900">{post.title}</h2>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                  <span className="text-sm font-medium text-primary hover:text-primary/90">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
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
            <Link href="/blog/post" className="text-base md:text-lg font-bold text-gray-900 hover:text-gray-700">
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
    <Contact />
    </>
  )
}

