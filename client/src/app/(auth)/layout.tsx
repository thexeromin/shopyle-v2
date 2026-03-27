import { Navbar, Footer } from '@/components/layout'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />

      {/* flex-1 ensures the main content takes up the remaining space.
        We keep the items-center and justify-center to keep the form centered 
        between the navbar and footer.
      */}
      <main className="flex-1 flex flex-col">{children}</main>

      <Footer />
    </div>
  )
}
