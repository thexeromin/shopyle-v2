import { apiClient } from './apiClient'
import type { SignupInput } from '@/lib/validations/auth'

export const authService = {
  signup: async (data: SignupInput) => {
    return apiClient('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}
