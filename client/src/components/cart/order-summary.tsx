import { ArrowRight } from 'lucide-react'

export function OrderSummary({
  totalItems,
  cartTotal,
}: {
  totalItems: number
  cartTotal: number
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 p-6 sticky top-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Order Summary
      </h2>
      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal ({totalItems} items)</span>
          <span className="text-foreground">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Shipping</span>
          <span className="text-foreground">Calculated at checkout</span>
        </div>
        <div className="border-t border-border pt-3 mt-3 flex justify-between font-semibold text-base text-foreground">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Proceed to Checkout
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
