import Image from 'next/image'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import AddToCart from './add-to-cart'
import type { Product } from '@/types/product'

export function ProductCard({ product }: { product: Product }) {
  const categoryName =
    typeof product.category === 'object' ? product.category.name : 'General'

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      {/* aspect-4/3 creates a perfect standard rectangle */}
      <CardContent className="relative aspect-4/3 p-0 overflow-hidden bg-muted">
        <Image
          src={product.photo}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardContent>

      <CardFooter className="flex flex-1 flex-col items-start gap-4 p-5">
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {categoryName}
            </p>

            <h3 className="font-semibold leading-tight tracking-tight hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="shrink-0 font-bold leading-none">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <AddToCart
          className="mt-auto w-full transition-transform active:scale-95"
          product={product}
        />
      </CardFooter>
    </Card>
  )
}
