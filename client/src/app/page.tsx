import { Navbar, Footer } from '@/components/layout'
import { HeroSection, Collections, Newsletter, Perks } from '@/components/home'

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main className="flex flex-col w-full">
        <HeroSection />
        <Perks />
        <Collections />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}
