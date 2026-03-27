import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { MobileMenu } from './'
import ThemeToggle from '../theme-toggle'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-0">
          <MobileMenu />
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 hidden md:block" />
            <span className="text-xl font-bold tracking-tight">Shopyle</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Deals
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
