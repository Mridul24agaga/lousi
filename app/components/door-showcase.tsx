"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion"

const doorColors = [
  { color: "#FFFFFF", image: "/door1.jpg" },
  { color: "#E6C88B", image: "/door2.jpg" },
  { color: "#4A3829", image: "/door3.jpg" }
]

type MotionComponentProps = {
  children?: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  onClick?: () => void;
}

const MotionSection = motion.section as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLElement>>
const MotionDiv = motion.div as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLDivElement>>
const MotionP = motion.p as React.ComponentType<MotionComponentProps>
const MotionButton = motion.button as React.ComponentType<MotionComponentProps>

export default function DoorShowcase() {
  const [selectedColor, setSelectedColor] = useState(0)
  const ref = useRef<HTMLDivElement>(null!)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const motionStyle = {
    y: useTransform(scrollYProgress, [0, 1], [100, 0]),
    opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    scale: useTransform(scrollYProgress, [0, 0.3], [0.9, 1])
  }

  return (
    <div ref={ref} className="bg-white px-4 sm:px-6 lg:px-8 pt-0 pb-16 sm:py-16">
      <MotionSection 
        style={motionStyle}
        className="relative bg-black rounded-3xl max-w-[2000px] mx-auto overflow-hidden mt-0 sm:mt-4"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-16 py-10 sm:py-20">
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl"
          >
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight [font-family:'Averta_ExtraBold']">
                Découvrez notre bloc-porte fin de chantier
              </h2>
            </MotionDiv>
            <MotionP 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-gray-400 mb-10 leading-relaxed text-lg max-w-xl"
            >
              Notre bloc-porte La Lourde est conçu spécialement pour les projets de promotion immobilière. Notre châssis a été conçu entièrement par nos ingénieurs pour simplifier l'organisation et l'installation sur vos chantiers. Améliorez la satisfaction de vos clients, réduisez drastiquement le nombre de réserves et faite passer vos programmes sur un autre niveau de prestation à l'aide de nos solutions.
            </MotionP>
            <MotionButton 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Découvrez
            </MotionButton>
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative"
          >
            <MotionDiv 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute left-16 lg:left-24 top-1/2 -translate-y-1/2 flex flex-col gap-3"
            >
              {doorColors.map((door, i) => (
                <MotionDiv
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "w-6 h-6 rounded-full cursor-pointer border-2 transition-all",
                    i === selectedColor ? "border-white" : "border-transparent"
                  )}
                  style={{ backgroundColor: door.color }}
                  onClick={() => setSelectedColor(i)}
                />
              ))}
            </MotionDiv>
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              className="relative h-[800px] w-full"
            >
              <Image
                key={selectedColor}
                src={doorColors[selectedColor].image}
                alt={`Door showcase - ${doorColors[selectedColor].color}`}
                className="object-contain object-right"
                fill
                priority
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  )
}

