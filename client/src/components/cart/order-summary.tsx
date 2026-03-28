'use client'

import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { useCart } from '@/context'
import { orderService } from '@/lib/api/orderService'

export function OrderSummary({
  totalItems,
  cartTotal,
}: {
  totalItems: number
  cartTotal: number
}) {
  const { cart, clearCart } = useCart()
  const { data: session, status } = useSession()

  const {
    mutate: handleCheckout,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async () => {
      const userId = session?.user.id
      const accessToken = session?.accessToken

      if (!userId || !accessToken) {
        throw new Error('You must be logged in to checkout.')
      }

      const orderPayload = {
        products: cart,
      }

      return await orderService.createOrder(userId, orderPayload, accessToken)
    },
    onSuccess: () => {
      toast.success('Order placed successfully!', {
        description: 'Your order is being processed.',
      })
      clearCart()
    },
  })

  // Block the button if the API is calling OR if NextAuth is still loading the session
  const isButtonDisabled = isPending || status === 'loading' || cartTotal === 0

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

      {isError && (
        <div className="mb-4 flex items-start gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span className="wrap-break-words">
            {error instanceof Error
              ? error.message
              : 'Failed to process checkout'}
          </span>
        </div>
      )}

      <button
        onClick={() => handleCheckout()}
        disabled={isButtonDisabled}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Proceed to Checkout
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  )
}
