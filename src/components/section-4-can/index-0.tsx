import { useEffect, useRef, useState, forwardRef } from 'react'
import { motion } from 'motion/react'
import { cn } from '@udecode/cn'

import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'

import data from './data'

// Custom hook for setting intervals
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default function Section() {
  const [activeTab, setActiveTab] = useState('virtual')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const listContainerRef = useRef<HTMLUListElement>(null)
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([])
  const offsetHeight = useRef<number>(0)

  useEffect(() => {
    if (listItemRefs.current[1]?.offsetTop && listItemRefs.current[0]?.offsetTop) {
      const height = listItemRefs.current[1]?.offsetTop - listItemRefs.current[0]?.offsetTop
      offsetHeight.current = height
    }
  }, [listItemRefs])

  // Auto advance through items
  useInterval(
    () => {
      setActiveIndex((prev) => (prev + 1) % (data.virtual.length + data.real.length))
    },
    isPaused ? null : 500
  )

  useEffect(() => {
    if (activeIndex >= data.virtual.length) {
      setActiveTab('real')
    } else {
      setActiveTab('virtual')
    }

    // Add scroll logic
    if (listContainerRef.current && offsetHeight.current) {
      const scrollOffset = activeIndex * offsetHeight.current // Keep 3 items visible above
      listContainerRef.current.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      })

      console.log(offsetHeight.current, 'llll')
    }

    // else if (activeIndex < 3 && listContainerRef.current) {
    //   listContainerRef.current.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   })
    // }
  }, [activeIndex, offsetHeight, listContainerRef])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div ref={containerRef} className="section relative flex h-screen flex-col py-10 text-center md:py-[120px]">
      <div>
        <h2 className="h2">What Can R6D9 Do?</h2>
        <p className="mt-6 text-base leading-8 md:mt-8">
          Built by top AI researchers, engineers, and a vibrant community of ambitious contributors like you. Continuous
          learning and improving.
        </p>
        <Tabs
          activeTab={activeTab}
          onSelect={(tab) => {
            setActiveTab(tab)
          }}
        />
        <ArrowIcon className="mx-auto my-5 size-9 text-primary-dark" />
      </div>

      <ul
        ref={listContainerRef}
        className="flex-1 overflow-y-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data.virtual.map((item, index) => (
          <TextItem
            key={'virtual-' + index}
            text={item}
            isActive={index === activeIndex}
            ref={(el) => (listItemRefs.current[index] = el)}
          />
        ))}
        {data.real.map((item, index) => (
          <TextItem
            key={'real-' + index}
            text={item}
            isActive={index + data.virtual.length === activeIndex}
            ref={(el) => (listItemRefs.current[index + data.virtual.length] = el)}
          />
        ))}
      </ul>
    </div>
  )
}

function Tabs({ activeTab, onSelect }: { activeTab: string; onSelect: (tab: string) => void }) {
  return (
    <div className="mt-10 flex rounded-sm border border-[white] p-2 text-xl font-bold leading-10 md:mx-auto md:mt-[60px] md:w-[310px]">
      <div
        className={cn(
          'h-10 flex-1 cursor-pointer transition-all duration-300 ease-out',
          activeTab === 'virtual' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => onSelect('virtual')}
      >
        In Virtual
      </div>
      <div
        className={cn(
          'h-10 flex-1 cursor-pointer transition-all duration-300 ease-out',
          activeTab === 'real' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => onSelect('real')}
      >
        In Real
      </div>
    </div>
  )
}

const TextItem = forwardRef<
  HTMLLIElement,
  {
    text: string
    isActive: boolean
  }
>(({ text, isActive }, ref) => {
  return (
    <motion.li
      ref={ref}
      className={cn('mt-6 h-8 truncate text-base leading-8', isActive ? 'font-bold' : '')}
      initial={false}
      animate={{
        scale: isActive ? 1.1 : 1,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5,
        duration: 0.5
      }}
      layout
      layoutDependency={isActive}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {text}
    </motion.li>
  )
})

TextItem.displayName = 'TextItem'
