import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})

// Specify exactly which routes require the user to be logged in
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/products/:path*',
    '/cart/:path*',
    '/checkout/:path*',
    '/profile/:path*',
  ],
}
