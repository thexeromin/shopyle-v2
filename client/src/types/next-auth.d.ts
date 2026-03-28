import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      role: number
    } & DefaultSession['user']
    accessToken: string // keep the token at the top level of the session
  }

  // Extends the built-in user types returned by the authorize function
  interface User extends DefaultUser {
    id: string
    role: number
    accessToken: string
  }
}

// Extends the built-in JWT types
declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    role: number
    accessToken: string
  }
}
