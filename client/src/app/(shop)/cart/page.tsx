import CartContent from './cart-content'

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
        Your Cart
      </h1>

      <CartContent />
    </div>
  )
}
