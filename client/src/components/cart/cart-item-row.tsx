import Image from 'next/image'
import { Trash2, ShoppingBag } from 'lucide-react'
import type { CartItem } from '@/types/cart'

export function CartItemRow({
  item,
  onRemove,
}: {
  item: CartItem
  onRemove: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-md bg-muted shrink-0 border border-border flex items-center justify-center overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <ShoppingBag className="h-6 w-6 text-muted-foreground/50" />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{item.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Qty: {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="font-semibold text-foreground">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(item._id)}
          className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
