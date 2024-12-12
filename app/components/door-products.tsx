"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { CuboidIcon as CubeIcon } from 'lucide-react'

const doors = [
  {
    tag: "en stock",
    name: "LAPLUME",
    description: ["Châssis traditionnel", "Alvéolaire"],
    image: "/doorr.avif",
    action: "Plus d'info"
  },
  {
    tag: "en stock",
    name: "LALOURDE",
    description: ["Châssis fin de chantier", "Acoustique"],
    image: "/doooor.avif",
    action: "Plus d'info"
  },
  {
    tag: "12 semaines",
    name: "SUR MESURE",
    description: ["Une porte à votre image", "Bureau d'étude dédié"],
    image: "/dor.avif",
    action: "Contactez nous"
  }
]

type MotionComponentProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: any;
  animate?: any;
  exit?: any;
  whileHover?: any;
  whileTap?: any;
  variants?: any;
  transition?: any;
  ref?: React.RefObject<any>;
}

const MotionDiv = motion.div as React.ComponentType<MotionComponentProps>
const MotionH3 = motion.h3 as React.ComponentType<MotionComponentProps>
const MotionP = motion.p as React.ComponentType<MotionComponentProps>
const MotionButton = motion.button as React.ComponentType<MotionComponentProps>

function AnimatedDoorCard({ 
  door, 
  index, 
  imageHeight = 400, 
  imageWidth = 300 
}: { 
  door: typeof doors[0], 
  index: number, 
  imageHeight?: number, 
  imageWidth?: number 
}) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <MotionDiv
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`bg-white relative ${
        index !== doors.length - 1 ? 'border-r border-gray-200' : ''
      }`}
    >
      <AnimatePresence>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-4 right-4 z-10"
        >
          <span className="bg-black text-white text-sm px-3 py-1">
            {door.tag}
          </span>
        </MotionDiv>
      </AnimatePresence>
      <div className="px-6 pt-6">
        <MotionH3
          className="text-3xl font-['Averta_ExtraBold'] mb-2 text-black"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {door.name}
        </MotionH3>
        <div className="space-y-0.5">
          {door.description.map((line, i) => (
            <MotionP
              key={i}
              className="text-gray-600 text-base"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
            >
              {line}
            </MotionP>
          ))}
        </div>
      </div>
      <div className="relative mt-12 overflow-hidden" style={{ height: '600px', width: '100%' }}>
        <MotionDiv 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <MotionDiv
          className="h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={door.image}
            alt={door.name}
            className="h-full w-full object-cover object-center"
            style={{ 
              maxHeight: `${imageHeight}px`, 
              maxWidth: `${imageWidth}px`,
              margin: 'auto'
            }}
          />
        </MotionDiv>
        <MotionDiv 
          className="absolute bottom-4 left-0 right-0 p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <MotionButton
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white py-4 text-lg font-semibold transition-colors duration-300"
          >
            {door.action}
          </MotionButton>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}

export default function AnimatedDoorProducts() {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4
      }
    }
  }

  return (
    <section className="bg-white py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <MotionDiv
          className="flex items-center justify-center gap-4 mb-24"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CubeIcon className="w-10 h-10 text-black" />
          <h2 className="text-5xl font-['Averta_ExtraBold'] text-black">
            Nos gammes de portes
          </h2>
        </MotionDiv>

        <MotionDiv
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-3 border border-gray-200"
        >
          {doors.map((door, index) => (
            <AnimatedDoorCard key={door.name} door={door} index={index} imageHeight={1000} imageWidth={450} />
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}

