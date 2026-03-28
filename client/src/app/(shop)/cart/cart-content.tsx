'use client'

import { useCart } from '@/context'
import { CartItemRow, EmptyCartState, OrderSummary } from '@/components/cart'

export default function CartContent() {
  const { cart, removeFromCart, totalItems } = useCart()

  if (cart.length === 0) return <EmptyCartState />

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-4">
        {cart.map((item) => (
          <CartItemRow key={item._id} item={item} onRemove={removeFromCart} />
        ))}
      </div>
      <div className="lg:col-span-4">
        <OrderSummary totalItems={totalItems} cartTotal={cartTotal} />
      </div>
    </div>
  )
}
