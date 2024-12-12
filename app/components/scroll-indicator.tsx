'use client'

import { motion, HTMLMotionProps, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > 10) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    })

    return () => unsubscribe()
  }, [scrollY])

  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  return (
    <motion.div 
      {...{
        className: "flex justify-center w-full fixed left-0 bottom-12 md:bottom-16 lg:bottom-20 pointer-events-none",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.5 },
        style: { opacity }
      } as HTMLMotionProps<"div">}
    >
      {isVisible && (
        <motion.div
          {...{
            className: "relative pointer-events-auto",
            whileHover: { scale: 1.05 }
          } as HTMLMotionProps<"div">}
        >
          <motion.div
            {...{
              className: "absolute inset-0 bg-white/20 rounded-full blur-md",
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              },
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            } as HTMLMotionProps<"div">}
          />
          <motion.div
            {...{
              className: "w-6 h-12 bg-transparent rounded-full border-2 border-white/50 relative cursor-pointer",
              onClick: () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            } as HTMLMotionProps<"div">}
          >
            <motion.div
              {...{
                className: "absolute top-[4px] left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2",
                animate: {
                  y: [0, 24, 0]
                },
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              } as HTMLMotionProps<"div">}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

