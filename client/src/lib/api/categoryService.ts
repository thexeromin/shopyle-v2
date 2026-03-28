import { apiClient } from './apiClient'
import type { Category } from '@/types/product'

export const categoryService = {
  getAllCategories: async () => {
    return apiClient<Category[]>('/api/categories')
  },
}
