import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react'

const PERKS = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $50.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: '100% secure checkout.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help you.',
  },
]

export default function Perks() {
  return (
    <section className="w-full py-12 bg-muted/50 border-y">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="p-3 bg-background rounded-full shadow-sm border">
                <perk.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
