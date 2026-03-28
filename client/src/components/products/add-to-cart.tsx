'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context'

import type { Product } from '@/types/product'
import { Button } from '../ui/button'

interface Props {
  className: string
  product: Product
}

export default function AddToCart({ className, product }: Props) {
  const { addToCart } = useCart()

  return (
    <Button
      className={className}
      variant="secondary"
      onClick={() => addToCart(product)}
    >
      <ShoppingBag className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  )
}
