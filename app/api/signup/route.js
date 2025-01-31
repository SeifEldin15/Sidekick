import { hash } from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    // Connect to database
    const client = await clientPromise
    const db = client.db('sidekick')
    
    // Check if user exists
    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return Response.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)
    
    // Create user
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    return Response.json(
      { message: 'User created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

const validateInput = (email, password) => {
  if (!email || !password) {
    return 'Email and password are required'
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Invalid email format'
  }
  
  if (password.length < 8) {
    return 'Password must be at least 8 characters'
  }
  
  return null
}