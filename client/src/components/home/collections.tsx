import Link from 'next/link'
import Image from 'next/image'

const COLLECTIONS = [
  {
    title: "Women's",
    href: '/categories/womens',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: "Men's",
    href: '/categories/mens',
    image:
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Collections() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Shop by Category
          </h2>
          <p className="max-w-150 text-muted-foreground">
            Explore our latest collections designed for every occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative h-100 overflow-hidden rounded-2xl flex items-center justify-center"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="relative z-10 bg-background/95 backdrop-blur-sm px-8 py-3 rounded-full">
                <h3 className="text-lg font-semibold tracking-tight">
                  {collection.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
