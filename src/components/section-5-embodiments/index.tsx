import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useInterval } from 'usehooks-ts'

import CrossCircleIcon from '@/assets/icons/cross-icon.svg?react'
import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'
import robotImage1 from '@/assets/robot-3.png?url'
import robotImage2 from '@/assets/robot-4.svg?url'
import robotImage3 from '@/assets/robot-5.svg?url'
import robotImage4 from '@/assets/robot-6.svg?url'
import robotImage5 from '@/assets/robot-7.svg?url'
import { cn } from '@udecode/cn'

export default function Section() {
  const [activeIndex] = useSwitchImage()

  return (
    <div className="section py-10 text-center md:flex md:flex-col md:justify-between md:py-[120px]">
      <div>
        <h2 className="h2 mb-16 md:mb-8">A Foundation Agent Can Act in a Wide Range of Embodiments</h2>
        <p className="text-base leading-8 md:mb-16 md:text-lg">
          Different Bodies, Different Skills
          <br className="md:hidden" />
          —All Require a Variety of Training Data.
        </p>
        <CrossCircleIcon className="mx-auto mt-5 size-14 text-primary-dark" />
      </div>
      <div>
        <Images activeIndex={activeIndex} />
        <PcImages activeIndex={activeIndex} />
        <div className="relative z-10 mt-12 flex items-center py-3">
          <div className="h-[6px] flex-1 bg-primary-dark"></div>
          <ArrowIcon className="absolute right-0 -z-10 size-10 -rotate-90 text-primary-dark" />
        </div>
      </div>
    </div>
  )
}

const images = [robotImage1, robotImage2, robotImage3, robotImage4, robotImage5]

function Images({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative mt-[70px] h-[280px] overflow-hidden md:hidden">
      <AnimatePresence initial={false} mode="popLayout">
        {images.map((image, index) => {
          const position = (index - activeIndex + images.length) % images.length
          const isActive = position === 0

          return (
            <motion.div
              key={image}
              className="absolute flex size-full items-center justify-center"
              initial={{
                opacity: 0.5,
                scale: 0.3
              }}
              animate={{
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.3,
                zIndex: isActive ? 10 : 0
              }}
              exit={{
                opacity: 0.5,
                scale: 0.3,
                zIndex: 0
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <img src={image} alt="robot" className="h-[200px] w-auto object-contain" />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

function PcImages({ activeIndex }: { activeIndex: number }) {
  return (
    <ul className="hidden items-end md:flex md:gap-[50px]">
      {images.map((image, index) => (
        <li key={image + index} className="relative size-full flex-1">
          <img
            src={image}
            alt="robot"
            className={cn(
              'duration-30 h-auto w-full scale-100 object-contain opacity-50 transition-all ease-in-out',
              activeIndex === index ? 'scale-[1.1] opacity-100' : ''
            )}
          />
        </li>
      ))}
    </ul>
  )
}

function useSwitchImage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, 2000)

  return [currentIndex]
}
