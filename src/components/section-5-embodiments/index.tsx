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

export default function Section() {
  return (
    <div className="section py-10 text-center">
      <h2 className="mb-16 text-3xl font-bold leading-[48px] text-primary-light">
        A Foundation Agent Can Act in a Wide Range of Embodiments
      </h2>
      <p className="text-base leading-8">
        Different Body, Different Skills,
        <br /> Need Variety of Training Data
      </p>
      <CrossCircleIcon className="mx-auto mt-5 size-14 text-primary-dark" />
      <Images />
      <div className="relative z-10 mt-12 flex items-center py-3">
        <div className="h-[6px] flex-1 bg-primary-dark"></div>
        <ArrowIcon className="absolute right-0 -z-10 size-10 -rotate-90 text-primary-dark" />
      </div>
    </div>
  )
}

const images = [robotImage1, robotImage2, robotImage3, robotImage4, robotImage5]

function Images() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, 2000)

  return (
    <div className="relative mt-[70px] h-[280px] overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        {images.map((image, index) => {
          const position = (index - currentIndex + images.length) % images.length
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
