"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion"
import { CuboidIcon } from 'lucide-react'

const features = [
  {
    title: "Serrure magnétique",
    image: "/1.gif",
  },
  {
    title: "Joint d'isolation phonique",
    image: "/2.gif",
  },
  {
    title: "Charnières invisibles en alliage de zinc",
    image: "/3.gif",
  },
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
  href?: string;
}

const MotionDiv = motion.div as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLDivElement>>
const MotionImg = motion.img as React.ComponentType<MotionComponentProps & React.ImgHTMLAttributes<HTMLImageElement>>
const MotionH2 = motion.h2 as React.ComponentType<MotionComponentProps>
const MotionH3 = motion.h3 as React.ComponentType<MotionComponentProps>
const MotionButton = motion.button as React.ComponentType<MotionComponentProps>
const MotionA = motion.a as React.ComponentType<MotionComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>
const MotionSpan = motion.span as React.ComponentType<MotionComponentProps>

export default function DoorFeatures() {
  const ref = useRef<HTMLDivElement>(null!)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const motionStyle = {
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    scale: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]),
    y: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  }

  return (
    <div ref={ref} className="px-0 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="max-w-[1800px] mx-auto">
        <MotionDiv 
          className="bg-black rounded-[20px] sm:rounded-[40px] px-0 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-16"
          style={motionStyle}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="px-4 sm:px-0">
            <MotionDiv 
              className="flex items-center gap-3 mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            >
              <CuboidIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              <p className="text-white text-base sm:text-lg font-['Averta_ExtraBold']">Nos Innovations</p>
            </MotionDiv>
            
            <MotionH2 
              className="text-white text-3xl sm:text-4xl md:text-5xl font-['Averta_ExtraBold'] mb-8 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            >
              Les Avantages
              <br />
              La Lourde
            </MotionH2>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start mb-8 sm:mb-12 gap-8 sm:gap-16 md:gap-24 lg:gap-32">
              {features.map((feature, index) => (
                <MotionDiv
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.7, duration: 1.2, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <MotionDiv 
                    className="relative w-36 h-36 sm:w-48 sm:h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-[#D2C4B1]">
                      <MotionImg
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </MotionDiv>
                  <MotionH3 
                    className="text-white text-base sm:text-lg font-['Averta_ExtraBold'] mt-4 text-center max-w-[160px]"
                    whileHover={{ scale: 1.05, color: "#D2C4B1" }}
                    transition={{ duration: 0.4 }}
                  >
                    {feature.title}
                  </MotionH3>
                </MotionDiv>
              ))}
            </div>

            <div className="mb-8 sm:mb-16">
              <MotionDiv 
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] sm:rounded-[40px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <MotionDiv
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <MotionImg
                    src="/hey.avif"
                    alt="Porte invisible"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </MotionDiv>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8">
                  <MotionH2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Averta_ExtraBold'] mb-4 sm:mb-8"
                  >
                    La Lourde le spécialiste de la
                    <br />
                    <MotionSpan 
                      className="italic"
                      whileHover={{ color: "#D2C4B1" }}
                      transition={{ duration: 0.4 }}
                    >
                      Porte invisible !
                    </MotionSpan>
                  </MotionH2>

                  <MotionButton
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, backgroundColor: "#D2C4B1" }}
                    className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-['Averta_ExtraBold']"
                  >
                    Savoir plus
                  </MotionButton>
                </div>
              </MotionDiv>
            </div>

            <div className="flex justify-end">
              <MotionA
                href="#"
                className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity font-['Averta_ExtraBold'] text-sm sm:text-base"
                whileHover={{ x: 5, color: "#D2C4B1" }}
                transition={{ duration: 0.4 }}
              >
                Plus d&apos;infos
                <MotionSpan 
                  className="text-lg sm:text-xl"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  →
                </MotionSpan>
              </MotionA>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}

