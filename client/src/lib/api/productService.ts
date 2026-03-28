import { apiClient } from './apiClient'
import type { Product } from '@/types/product'

export const productService = {
  getAllProducts: async () => {
    return apiClient<Product[]>('/api/products')
  },
}
