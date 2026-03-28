import { apiClient } from './apiClient'
import type { CartItem } from '@/types/cart'
import type { Order } from '@/types/order'

export interface OrderPayload {
  products: Array<CartItem>
}

export const orderService = {
  createOrder: async (
    userId: string,
    orderData: OrderPayload,
    accessToken: string
  ) => {
    const endpoint = `/api/order/create/${userId}`

    return apiClient<Order>(endpoint, {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  },
}
