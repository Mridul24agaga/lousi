'use client'

import { useRef } from "react"
import { domAnimation, LazyMotion, m, type Variants, useScroll, useTransform, type MotionStyle } from "framer-motion"
import { ScrollIndicator } from "@/app/components/scroll-indicator"

type MotionComponentProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  style?: MotionStyle;
  initial?: string | object;
  whileInView?: string | object;
  viewport?: object;
  ref?: React.RefObject<HTMLElement>;
}

export function AnimatedHero() {
  // Change the type to HTMLElement to match the expected type
  const targetRef = useRef<HTMLElement>(null!)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  // Create a style object with the correct types
  const style = {
    opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    scale: useTransform(scrollYProgress, [0, 0.3], [0.9, 1]),
    y: useTransform(scrollYProgress, [0, 0.3], [100, 0])
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const MotionDiv = m.div as React.ComponentType<MotionComponentProps>
  const MotionH1 = m.h1 as React.ComponentType<MotionComponentProps>
  const MotionP = m.p as React.ComponentType<MotionComponentProps>
  const MotionButton = m.button as React.ComponentType<MotionComponentProps>

  return (
    <LazyMotion features={domAnimation}>
      <MotionDiv
        ref={targetRef as React.RefObject<HTMLElement>}
        style={style}
        className="w-full px-6 md:px-12 lg:px-20"
      >
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-sm md:max-w-2xl lg:max-w-4xl"
        >
          <MotionH1 
            variants={titleVariants}
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight font-[Averta_ExtraBold] font-extrabold"
          >
            Exclusive flush door for Professionals
          </MotionH1>
          <MotionP 
            variants={paragraphVariants}
            className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8"
          >
            Get your delivery anywhere in Europe within one week.
          </MotionP>
          <MotionButton 
            variants={buttonVariants}
            className="bg-black text-white hover:bg-black/90 hover:outline hover:outline-2 hover:outline-white px-6 py-3 text-lg md:text-xl lg:text-2xl font-medium rounded-lg transition-all duration-200"
          >
            Contact Us
          </MotionButton>
          <ScrollIndicator />
        </MotionDiv>
      </MotionDiv>
    </LazyMotion>
  )
}

