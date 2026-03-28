import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export function EmptyCartState() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-center px-4 py-12">
      <div className="p-4 bg-muted rounded-full mb-4 text-muted-foreground">
        <ShoppingBag className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground">
        Your cart is empty
      </h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        Looks like you haven&apos;t added anything to your cart yet.
      </p>
      <Link
        href="/products"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Start Shopping
      </Link>
    </div>
  )
}
