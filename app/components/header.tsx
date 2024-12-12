'use client'

import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <motion.div 
        {...{
          className: "max-w-[1400px] mx-auto px-4 hidden md:block fixed top-0 left-0 right-0 z-50",
          initial: "hidden",
          animate: "visible",
          variants: fadeIn,
        } as HTMLMotionProps<"div">}
      >
        <motion.div 
          {...{
            className: "flex items-center justify-between h-[90px] bg-[#D9D9D9]/50 backdrop-blur-md rounded-2xl px-8 mt-5",
            variants: staggerChildren
          } as HTMLMotionProps<"div">}
        >
          <div className="flex items-center h-full">
            <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
              <Link href="/" className="block ml-2">
                <Image
                  src="/logo.svg"
                  alt="La Lourde"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </motion.div>

            <motion.nav 
              {...{
                className: "flex items-center space-x-8 ml-6",
                variants: staggerChildren
              } as HTMLMotionProps<"nav">}
            >
              <motion.div {...{ className: "relative group", variants: fadeIn } as HTMLMotionProps<"div">}>
                <button className="flex items-center text-[15px] font-medium text-white">
                  <span>Produits</span>
                  <ChevronDown className="h-4 w-4 text-white/80" />
                </button>
              </motion.div>
              <motion.div {...{ className: "relative group mr-2", variants: fadeIn } as HTMLMotionProps<"div">}>
                <button className="flex items-center mx-2 text-[15px] font-medium text-white whitespace-nowrap">
                  <span>À propos de nous</span>
                  <ChevronDown className="h-4 w-4 text-white/80" />
                </button>
              </motion.div>
              <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
                <Link href="#" className="text-[15px] font-medium text-white mx-5">
                  Avantages
                </Link>
              </motion.div>
            </motion.nav>
          </div>

          <motion.div 
            {...{
              className: "flex items-center",
              variants: staggerChildren
            } as HTMLMotionProps<"div">}
          >
            <motion.div 
              {...{
                className: "flex items-center h-[64px] px-6 bg-[#C4C1C8] rounded-2xl mr-4",
                variants: fadeIn
              } as HTMLMotionProps<"div">}
            >
              <div className="flex items-center mr-4">
                <Image
                  src="/logo.png"
                  alt="La Lourde"
                  width={84}
                  height={84}
                  className="mr-2"
                />
                <Phone className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-[15px] text-gray-700">01 89 70 82 98</span>
              </div>
              <motion.button 
                {...{
                  className: "bg-black text-white hover:bg-black/90 rounded-md h-10 px-5 text-[15px] font-medium transition-colors",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 }
                } as HTMLMotionProps<"button">}
              >
                Contactez-nous
              </motion.button>
            </motion.div>

            <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
              <Image
                src="/uk-flag.svg"
                alt="English"
                width={24}
                height={24}
                className="rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Header */}
      <motion.div 
        {...{
          className: "md:hidden fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2",
          initial: "hidden",
          animate: "visible",
          variants: fadeIn,
          style: { background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }
        } as HTMLMotionProps<"div">}
      >
        <motion.div 
          {...{
            className: "flex items-center justify-between px-4 h-16 bg-white/10 backdrop-blur-md rounded-full w-full max-w-[400px] mx-auto",
            variants: staggerChildren
          } as HTMLMotionProps<"div">}
        >
          <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
            <Link href="/" className="block">
              <Image
                src="/logo.svg"
                alt="La Lourde"
                width={80}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </motion.div>

          <motion.div 
            {...{
              className: "flex items-center gap-2",
              variants: staggerChildren
            } as HTMLMotionProps<"div">}
          >
            <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
              <Image
                src="/uk-flag.svg"
                alt="Français"
                width={24}
                height={24}
                className="rounded-full"
              />
            </motion.div>
            <motion.button
              {...{
                onClick: () => setIsOpen(!isOpen),
                className: "text-white p-2 rounded-full hover:bg-[#2C2C2C] transition-colors",
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 },
                variants: fadeIn
              } as HTMLMotionProps<"button">}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              {...{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
                className: "fixed top-[calc(1rem+4rem)] left-4 right-4 bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg max-w-[400px] mx-auto"
              } as HTMLMotionProps<"div">}
            >
              <motion.nav 
                {...{
                  className: "flex flex-col py-4",
                  variants: staggerChildren,
                  initial: "hidden",
                  animate: "visible"
                } as HTMLMotionProps<"nav">}
              >
                <motion.button 
                  {...{
                    className: "flex items-center justify-between px-4 py-3 text-white",
                    variants: fadeIn,
                    whileHover: { backgroundColor: "rgba(255,255,255,0.1)" }
                  } as HTMLMotionProps<"button">}
                >
                  <span>Produits</span>
                  <ChevronDown className="h-4 w-4 text-white/80" />
                </motion.button>
                <motion.button 
                  {...{
                    className: "flex items-center justify-between px-4 py-3 text-white",
                    variants: fadeIn,
                    whileHover: { backgroundColor: "rgba(255,255,255,0.1)" }
                  } as HTMLMotionProps<"button">}
                >
                  <span>À propos de nous</span>
                  <ChevronDown className="h-4 w-4 text-white/80" />
                </motion.button>
                <motion.div {...{ variants: fadeIn } as HTMLMotionProps<"div">}>
                  <Link 
                    href="#" 
                    className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
                  >
                    Avantages
                  </Link>
                </motion.div>
                <motion.div 
                  {...{
                    className: "border-t border-white/10 mt-2 pt-2",
                    variants: staggerChildren
                  } as HTMLMotionProps<"div">}
                >
                  <motion.button 
                    {...{
                      className: "w-full px-4 py-3 text-left text-white flex items-center hover:bg-white/10 transition-colors",
                      variants: fadeIn
                    } as HTMLMotionProps<"button">}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    01 89 70 82 98
                  </motion.button>
                  <motion.button 
                    {...{
                      className: "w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors",
                      variants: fadeIn
                    } as HTMLMotionProps<"button">}
                  >
                    Contactez-nous
                  </motion.button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

