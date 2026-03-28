'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field'
import { signupSchema, type SignupInput } from '@/lib/validations/auth'
import { authService } from '@/lib/api/authService'

export function SignupForm() {
  const router = useRouter()

  const form = useForm<SignupInput>({
    resolver: standardSchemaResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  const { mutate: signup, isPending } = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => {
      toast.success('Account created successfully!', {
        description: 'Welcome to Shopyle. Please log in to continue.',
      })
      router.push('/login')
    },
    onError: (error: Error) => {
      toast.error('Signup Failed', {
        description: error.message,
      })
    },
  })

  async function onSubmit(data: SignupInput) {
    signup(data)
  }

  const { errors } = form.formState

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-muted-foreground">
          Join us today to get the latest trends and exclusive offers.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FieldGroup className="space-y-5">
          <Field className="space-y-2">
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              placeholder="John Doe"
              className="h-11 bg-background"
              {...form.register('name')}
            />
            {errors.name && (
              <FieldError className="text-sm text-destructive">
                {errors.name.message}
              </FieldError>
            )}
          </Field>

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
            <FieldLabel htmlFor="password">Password</FieldLabel>
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
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-semibold text-primary hover:underline transition-all"
        >
          Log in
        </Link>
      </p>
    </div>
  )
}
