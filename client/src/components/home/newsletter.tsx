import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto border rounded-3xl p-8 md:p-12 bg-card shadow-sm">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">
              Join the Shopyle Club
            </h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to get early access to new arrivals,
              exclusive discounts, and style tips.
            </p>
          </div>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
              required
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
