import { useEffect, useState } from 'react'
import { BloomLogo } from './components/Logo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technology from './components/Technology'
import Product from './components/Product'
import News from './components/News'
import Industries from './components/Industries'
import Implementation from './components/Implementation'
import SeeDaisyHero from './components/SeeDaisyHero'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => window.clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-green-deep antialiased">
        <div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-3xl border border-green-deep/10 bg-cream-muted/70 px-6 py-8 shadow-[0_20px_60px_rgba(32,80,56,0.08)] backdrop-blur-sm sm:max-w-sm sm:gap-5 sm:rounded-4xl sm:px-8 sm:py-10">
          <div className="relative flex size-16 items-center justify-center rounded-full border border-green-deep/15 bg-cream sm:size-20">
            <div className="absolute inset-0 rounded-full border-2 border-green-deep/15 border-t-green-deep animate-spin" />
            <BloomLogo markClassName="h-8 w-8 sm:h-10 sm:w-10" className="sr-only" />
          </div>
          <p className="font-display text-xl font-light tracking-wide sm:text-2xl">Bloom</p>
          <p className="text-xs tracking-[0.2em] text-green-deep/70 uppercase sm:text-sm">Loading</p>
        </div>
      </div>
    )
  }

  return (
    <main className="w-full overflow-x-clip bg-cream font-body text-green-deep antialiased">
      <Navbar />
      <Hero />
      <Technology />
      <Product />
      <News />
      <Industries />
      <Implementation />
      <SeeDaisyHero />
      <Footer />
    </main>
  )
}
