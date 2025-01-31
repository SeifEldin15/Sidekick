"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      
      // Ensure data is an array, otherwise use empty array
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      fetchPosts();
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts Management</h1>
        <button
          onClick={() => router.push('/admin/blog/new')}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Create New Post
        </button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600">
                By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => router.push(`/admin/blog/edit/${post._id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}