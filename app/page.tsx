'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/app/components/header'
import { AnimatedHero } from '@/app/components/animated-hero'
import { LoadingAnimation } from '@/app/components/loading-animation'
import Image from 'next/image'
import { TextRevealByWord } from '@/app/components/text-reveal'
import DoorShowcase from './components/door-showcase'
import DoorProducts from './components/door-products'
import DoorFeatures from './components/door-features'
import ChangingBackgroundContainer from './components/changing-background'
import PrivilegesSection from './components/privileges-section'
import Footer from './components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <>
      {isLoading && <LoadingAnimation />}
      {!isLoading && (
        <main className="min-h-screen bg-white p-3">
          <div className="w-full h-[75vh] md:h-[calc(100vh-1.5rem)] relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <Image
              src="/hero-bg.jpg"
              alt="Modern flush door"
              fill
              className="object-cover"
              priority
            />

            {/* Dark overlay for mobile */}
            <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col">
              <Header />

              <div className="flex-grow flex items-center">
                <AnimatedHero />
              </div>
            </div>
          </div>

          {/* Text Reveal Section */}
          <div className="relative min-h-screen bg-white">
      <TextRevealByWord text="Experience the inimitable quality and design of the LaLourde flush doors. Engineered with precision andcrafted from the finest materials, La Lourde sets anew standard in both aesthetics and functionality for professional projects." />
    </div>
    <DoorShowcase/>
    <DoorProducts/>
    <DoorFeatures/>
    <ChangingBackgroundContainer/>
    <PrivilegesSection/>
    <Footer/>
        </main>
      )}
    </>
  )
}

