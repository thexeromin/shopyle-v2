'use client'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context'

export default function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart" className="relative flex items-center">
      <ShoppingCart className="w-6 h-6" />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
