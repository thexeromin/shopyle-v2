import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      {/* aspect-[4/3] creates a perfect standard rectangle */}
      <CardContent className="relative aspect-[4/3] p-0 overflow-hidden bg-muted">
        <Image
          src={product.image}
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
              {product.category}
            </p>

            <h3 className="font-semibold leading-tight tracking-tight hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="shrink-0 font-bold leading-none">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <Button
          className="mt-auto w-full transition-transform active:scale-95"
          variant="secondary"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
