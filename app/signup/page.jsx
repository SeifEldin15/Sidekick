'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      // Redirect to login page after successful signup
      router.push('/login')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Create account</h1>
          <p className="mt-3 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
              Login
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 text-sm text-center p-3 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-colors duration-200"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-colors duration-200"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-colors duration-200"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-2 block w-full rounded-xl px-4 py-3 border border-gray-300 focus:border-orange-500 focus:ring-orange-500 focus:outline-none transition-colors duration-200"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl px-6 py-3 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-orange-500 hover:text-orange-600 font-medium">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-orange-500 hover:text-orange-600 font-medium">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
