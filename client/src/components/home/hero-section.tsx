import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Spring Collection 2026 is live</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Redefine Your Wardrobe with Shopyle
              </h1>
              <p className="max-w-150 text-muted-foreground md:text-xl">
                Discover our curated collection of premium apparel. From
                everyday essentials to statement pieces, find the perfect fit
                for your unique style.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" asChild className="h-12 px-8">
                <Link href="/products">
                  Shop New Arrivals <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8">
                <Link href="/categories">Explore Collections</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto flex w-full h-100 md:h-125 items-center justify-center rounded-2xl bg-muted/50 border overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-tr from-muted/80 to-muted/20" />
            <div className="text-center space-y-2 z-10 p-6">
              <p className="text-muted-foreground font-medium">
                Hero Image Area
              </p>
              <p className="text-sm text-muted-foreground/80">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
                  alt="Fashion model wearing the latest spring collection"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
