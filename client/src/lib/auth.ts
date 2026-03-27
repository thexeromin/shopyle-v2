import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { loginSchema } from '@/lib/validations/auth'

export const authOptions: NextAuthOptions = {
  // Credentials provider requires JWT strategy
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Redirects here when authentication is required
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Validate inputs using your existing Zod schema
        const parsedCredentials = loginSchema.safeParse(credentials)

        if (!parsedCredentials.success) {
          throw new Error('Invalid input data')
        }

        const { email, password } = parsedCredentials.data

        // TODO: Replace this with your actual database call
        // const user = await db.user.findUnique({ where: { email } })

        // Mock user for demonstration
        const user = {
          id: '1',
          name: 'Abhijit',
          email: 'test@example.com',
          // This is "password123" hashed
          password: await bcrypt.hash('password123', 10),
        }

        if (!user) {
          throw new Error('No user found with this email')
        }

        const passwordsMatch = await bcrypt.compare(password, user.password)

        if (!passwordsMatch) {
          throw new Error('Incorrect password')
        }

        // Any object returned here is saved in the JWT token
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  callbacks: {
    // Attach the user ID to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    // Pass the user ID from the token to the client session
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}
