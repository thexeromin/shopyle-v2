'use client'

import Link from 'next/link'
import { Menu, ShoppingBag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-75 sm:w-100 p-6">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Browse products, categories, deals, or sign in to your account.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-6">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">Shopyle</span>
          </Link>
          <div className="flex flex-col gap-4">
            <Link
              href="/products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Deals
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
