import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
})

export type SignupInput = z.infer<typeof signupSchema>

export const loginSchema = z.object({
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
})

export type LoginInput = z.infer<typeof loginSchema>
