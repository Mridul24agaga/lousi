"use client";

import { FC, ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, cubicBezier, MotionValue, type MotionStyle, useAnimation, AnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

type MotionComponentProps = {
  children?: ReactNode;
  className?: string;
  style?: MotionStyle;
  custom?: any;
  initial?: any;
  animate?: AnimationControls;
}

const MotionDiv = motion.div as React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLDivElement>>
const MotionSpan = motion.span as React.ComponentType<MotionComponentProps>

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement>(null!)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  const words = text.split(" ");

  // Enhanced easing function for smoother and faster animation
  const easeFunction = cubicBezier(0.25, 0.1, 0.25, 1);

  // Calculate the progress at which the last word is fully visible
  const lastWordEnd = (words.length - 1) / words.length;

  // Adjust container animation to stay visible until the last word is shown
  const motionStyle = {
    y: useTransform(
      smoothProgress,
      [0, 0.05, lastWordEnd, lastWordEnd + 0.1, 1],
      ["5%", "0%", "0%", "0%", "-5%"],
      { ease: easeFunction }
    ),
    opacity: useTransform(
      smoothProgress,
      [0, 0.05, lastWordEnd, lastWordEnd + 0.1, 1],
      [0, 1, 1, 1, 0],
      { ease: easeFunction }
    )
  }

  // SVG opacity animation
  const svgOpacity = useTransform(
    smoothProgress,
    [lastWordEnd, lastWordEnd + 0.05],
    [0, 1],
    { ease: easeFunction }
  );

  const controls = useAnimation();

  useEffect(() => {
    if (isMounted) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: easeFunction }
      }));
    }
  }, [controls, isMounted]);

  return (
    <div ref={targetRef} className={cn("relative z-0 min-h-[250vh]", className)}>
      <MotionDiv 
        className="sticky top-0 mx-auto flex h-screen w-full max-w-7xl flex-col items-start justify-center bg-transparent px-3 sm:px-6 md:px-8"
        style={motionStyle}
      >
        <div className="relative w-full h-full flex items-center">
          <p className="flex max-w-4xl flex-wrap text-left text-xl sm:text-2xl md:text-4xl lg:text-[3rem] font-normal sm:font-semibold leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-normal sm:tracking-wide">
            {words.map((word, i) => (
              <Word 
                key={i} 
                progress={smoothProgress} 
                index={i} 
                totalWords={words.length}
                easeFunction={easeFunction}
                controls={controls}
              >
                {word}
              </Word>
            ))}
          </p>
          <MotionDiv 
            className="absolute bottom-4 right-4 flex gap-2 sm:gap-4"
            style={{ opacity: svgOpacity }}
          >
            <img src="/1.svg" alt="FSC Certification" className="h-10 w-auto sm:h-16" />
            <img src="/2.png" alt="PEFC Certification" className="h-10 w-auto sm:h-16" />
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  index: number;
  totalWords: number;
  easeFunction: (t: number) => number;
  controls: AnimationControls;
}

const Word: FC<WordProps> = ({ children, progress, index, totalWords, easeFunction, controls }) => {
  const start = index / totalWords;
  const end = (index + 1) / totalWords;

  const motionStyle = {
    opacity: useTransform(
      progress,
      [start, end],
      [0, 1],
      { ease: easeFunction }
    ),
    y: useTransform(
      progress,
      [start, (start + end) / 2, end],
      [20, 0, 0],
      { ease: easeFunction }
    )
  }
  
  return (
    <MotionSpan 
      className="relative mr-[0.2em] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed inline-block"
      style={motionStyle}
      custom={index}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <span className="font-semibold sm:font-semi text-black">
        {children}
      </span>
    </MotionSpan>
  );
};

export default TextRevealByWord;

