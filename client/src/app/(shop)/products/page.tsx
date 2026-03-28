import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { ProductCard } from '@/components/products/product-card'
import { Badge } from '@/components/ui/badge'
import { productService } from '@/lib/api/productService'
import { categoryService } from '@/lib/api/categoryService'

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    productService.getAllProducts(),
    categoryService.getAllCategories(),
  ])

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
            Showing {products.length} items
          </p>
        </div>

        {/* TODO: Scrollable container for mobile friendly pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <Link
              key={category._id}
              href="#"
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary text-primary-foreground shadow-sm' // Active state
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground' // Inactive state
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/30 text-center px-4">
          <h3 className="text-xl font-bold tracking-tight mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground max-w-sm">
            Check back later for new arrivals.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
