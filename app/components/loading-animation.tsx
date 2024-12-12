'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 4000) // Adjust this value to control how long the animation shows

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      {...{
        className: "fixed inset-0 z-50 flex items-center justify-center bg-white",
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        transition: { duration: 0.5, delay: 1.5 },
        onAnimationComplete: () => setIsVisible(false)
      } as HTMLMotionProps<"div">}
    >
      <Image
        src="/animation.gif"
        alt="Loading"
        width={200}
        height={200}
        priority
        className="w-1/2 h-auto max-w-md"
      />
    </motion.div>
  )
}

