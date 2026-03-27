import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">Shopyle</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              The best place to find your next favorite thing.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Shop</h3>
            <Link
              href="/products"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Deals
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Support</h3>
            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="/shipping"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Shipping
            </Link>
            <Link
              href="/returns"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Returns
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Legal</h3>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shopyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
