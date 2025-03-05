"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Nav from "@/components/Nav"

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch post')
        }
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!post) return <div>Post not found</div>

  return (
    <>
      <div className="pt-[72px]">
        <Nav />
      </div>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative w-[115%] h-[350px] mb-8 mt-12 left-[50%] -translate-x-1/2 z-[1]">
          <Image
            src={post.image || "/blog/topblog.png"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <span className="font-bold">Written by {post.author || 'Anonymous'}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  )
}
