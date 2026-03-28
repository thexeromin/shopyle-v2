import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginSchema } from '@/lib/validations/auth'

export const authOptions: NextAuthOptions = {
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

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}/api/signin`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(parsedCredentials.data),
            }
          )

          const data = await response.json()

          if (!response.ok) {
            throw new Error(data.error || data.message || 'Invalid credentials')
          }

          return {
            id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            accessToken: data.token,
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message)
          }
          throw new Error('Internal server error during login')
        }
      },
    }),
  ],
  callbacks: {
    // This runs first. Takes the user object returned from `authorize`
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.accessToken = user.accessToken
      }
      return token
    },
    // This session callback runs whenever we call useSession() or getServerSession()
    // It takes the data out of the JWT and passes it to the frontend
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
      }
      session.accessToken = token.accessToken

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Redirects here when authentication is required
  },
}
