import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { LoginForm } from './login-form'

export const metadata: Metadata = {
  title: 'Log In - Shopyle',
  description: 'Log in to your Shopyle account.',
}

export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <div className="w-full max-w-md p-8 sm:p-10 overflow-hidden rounded-2xl border bg-card shadow-xl">
        <LoginForm />
      </div>
    </div>
  )
}
