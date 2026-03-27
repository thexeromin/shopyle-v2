import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { ProductCard } from '@/components/products/product-card'
import { Badge } from '@/components/ui/badge'

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wool Coat',
    price: 299,
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800',
  },
  {
    id: '2',
    name: 'Classic Cotton Tee',
    price: 45,
    category: 'Tops',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800',
  },
  {
    id: '3',
    name: 'Relaxed Fit Denim',
    price: 120,
    category: 'Bottoms',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800',
  },
  {
    id: '4',
    name: 'Knit Cashmere Sweater',
    price: 180,
    category: 'Tops',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800',
  },
  {
    id: '5',
    name: 'Minimalist Leather Belt',
    price: 65,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
  },
  {
    id: '6',
    name: 'Structured Blazer',
    price: 210,
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
  },
]

const CATEGORIES = ['All']

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-muted/50 px-6 py-16 text-center sm:py-24 border border-border/50">
        <Badge
          variant="outline"
          className="mb-6 border-primary/20 bg-primary/5 text-primary gap-1.5 py-1"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Season 2026 Collection
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-4">
          Discover Your Style
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Explore our latest arrivals designed for everyday elegance. Crafted
          with premium materials for the modern wardrobe.
        </p>
      </div>

      {/* TODO: Interactive Category Pills */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Our Products</h2>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Showing {MOCK_PRODUCTS.length} items
          </p>
        </div>

        {/* TODO: Scrollable container for mobile friendly pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((category, index) => (
            <Link
              key={category}
              href="#"
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary text-primary-foreground shadow-sm' // Active state
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground' // Inactive state
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
