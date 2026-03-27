import type { Metadata } from 'next'
import { SignupForm } from './signup-form'

export const metadata: Metadata = {
  title: 'Create Account - Shopyle',
  description: 'Join Shopyle to discover premium fashion.',
}

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <div className="w-full max-w-lg p-8 sm:p-10 overflow-hidden rounded-2xl border bg-card shadow-xl">
        <SignupForm />
      </div>
    </div>
  )
}
