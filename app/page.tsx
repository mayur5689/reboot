import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <OurServices />
    </main>
  )
}

