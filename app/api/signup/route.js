import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(req) {
  try {
    const { email, password, name } = await req.json()
    
    const client = await clientPromise
    const users = client.db().collection('users')
    
    // Check if user already exists
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)
    
    // Create user
    await users.insertOne({
      email,
      name,
      password: hashedPassword,
      createdAt: new Date(),
    })
    
    return NextResponse.json({ message: 'User created successfully' })
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: error.status || 500 }
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