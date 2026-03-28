import { apiClient } from './apiClient'
import type { SignupInput, LoginInput } from '@/lib/validations/auth'

export const authService = {
  signup: async (data: SignupInput) => {
    return apiClient('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  login: async (data: LoginInput) => {
    return apiClient('/api/signin', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}
