import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise
        const users = client.db().collection('users')
        
        const user = await users.findOne({ email: credentials?.email })
        if (!user) throw new Error('No user found')
        
        const passwordMatch = await bcrypt.compare(credentials?.password || '', user.password)
        if (!passwordMatch) throw new Error('Invalid password')
        
        return { 
          id: user._id.toString(), 
          email: user.email,
          name: user.name 
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  }
})

export { handler as GET, handler as POST }
