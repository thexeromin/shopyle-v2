'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'

export function LoginForm() {
  const router = useRouter()
  // const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [authError, setAuthError] = React.useState<string>('')

  // const registered = searchParams.get('registered')

  const form = useForm<LoginInput>({
    resolver: standardSchemaResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginInput) {
    setIsLoading(true)
    setAuthError('')

    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    setIsLoading(false)

    if (result?.error) {
      setAuthError(result.error)
      return
    }

    // Success! Redirect to products
    router.push('/products')
    router.refresh()
  }

  const { errors } = form.formState

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account.
        </p>
      </div>

      {/* Display auth errors (e.g., "Incorrect password") */}
      {authError && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive border border-destructive/20">
          {authError}
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FieldGroup className="space-y-5">
          <Field className="space-y-2">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="h-11 bg-background"
              {...form.register('email')}
            />
            {errors.email && (
              <FieldError className="text-sm text-destructive">
                {errors.email.message}
              </FieldError>
            )}
          </Field>

          <Field className="space-y-2">
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link
                href="#"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              className="h-11 bg-background"
              {...form.register('password')}
            />
            {errors.password && (
              <FieldError className="text-sm text-destructive">
                {errors.password.message}
              </FieldError>
            )}
          </Field>
        </FieldGroup>

        <Button
          className="w-full h-11 text-base font-medium mt-2"
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Log in
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup"
          className="font-semibold text-primary hover:underline transition-all"
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}
