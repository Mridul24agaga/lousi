"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, type MotionStyle } from 'framer-motion'

const backgroundImages = [
  "/111.avif",
  "/112.avif",
  "/113.png",
  "/114.avif",
]

type MotionComponentProps = {
  children?: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  ref?: React.RefObject<HTMLElement>;
}

export default function ChangingBackgroundContainer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLElement>(null!)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const motionStyle = {
    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  }

  const yMotionStyle = {
    y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const MotionDiv = motion.div as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLElement>>
  const MotionH2 = motion.h2 as React.ComponentType<MotionComponentProps>
  const MotionButton = motion.button as React.ComponentType<MotionComponentProps>

  return (
    <MotionDiv 
      ref={containerRef}
      className="h-screen w-full"
      style={motionStyle}
    >
      <MotionDiv 
        className="relative w-full h-full overflow-hidden"
        style={yMotionStyle}
      >
        <div className="absolute inset-0 p-0 sm:p-8">
          <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[40px]">
            <AnimatePresence mode="wait">
              {backgroundImages.map((image, index) => (
                <MotionDiv
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={image}
                    alt={`Background ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </MotionDiv>
              ))}
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/50" />

            <MotionDiv 
              className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <MotionH2 
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Averta_ExtraBold'] mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Découvrez nos
                <br />
                panneaux bois
              </MotionH2>

              <MotionButton
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-['Averta_ExtraBold'] transition-all duration-300 hover:scale-105 hover:bg-[#D2C4B1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                whileHover={{ scale: 1.05, backgroundColor: "#D2C4B1" }}
              >
                Contactez nous
              </MotionButton>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

