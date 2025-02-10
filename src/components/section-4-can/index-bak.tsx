import { useEffect, useRef, useState, forwardRef } from 'react'
import { easeInOut, easeOut, motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@udecode/cn'

import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'
import LockIcon from '@/assets/icons/lock-icon.svg?react'

import data from './data'

export default function Section() {
  const [activeTab, setActiveTab] = useState('virtual')
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const realContentRef = useRef(null)
  const virtualContentRef = useRef(null)
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center']
  })
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easeOut
  })

  const headerY = useTransform(smoothProgress, [0, 1, 1.2], ['0%', '0%', '-100%'], {
    ease: easeInOut
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const totalItems = data.virtual.length + data.real.length
      const rawIndex = Math.min(Math.round(latest * (totalItems + 3)), totalItems - 1)

      requestAnimationFrame(() => {
        setActiveIndex(rawIndex)
      })
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  useEffect(() => {
    if (activeIndex >= data.virtual.length) {
      setActiveTab('real')
    } else {
      setActiveTab('virtual')
    }
  }, [activeIndex])

  const scrollToContent = (tab: string) => {
    const targetRef = tab === 'real' ? realContentRef : virtualContentRef

    if (targetRef.current && headerRef.current) {
      const element = targetRef.current as HTMLElement
      const headerElement = headerRef.current as HTMLElement
      const headerHeight = headerElement.offsetHeight
      const elementTop = element.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div ref={containerRef} className="section relative min-h-screen pt-0 text-center md:py-[120px]">
      <motion.div ref={headerRef} style={{ y: headerY }} className="sticky top-0 z-10 bg-[black] pt-6">
        <h2 className="h2">What Can R6D9 Do?</h2>
        <p className="mt-6 text-base leading-8 md:mt-8">
          Built by top AI researchers, engineers, and a vibrant community of ambitious contributors like you. Continuous
          learning and improving.
        </p>
        <Tabs
          activeTab={activeTab}
          onSelect={(tab) => {
            setActiveTab(tab)
            scrollToContent(tab)
          }}
        />
        <ArrowIcon className="mx-auto my-5 size-9 text-primary-dark" />
      </motion.div>

      <ul className="relative">
        <li ref={virtualContentRef} />
        {data.virtual.map((item, index) => (
          <TextItem
            key={'virtual-' + index}
            text={item}
            isActive={index === activeIndex}
            ref={(el) => (listItemRefs.current[index] = el)}
          />
        ))}
        <li ref={realContentRef} />
        {data.real.map((item, index) => (
          <TextItem
            key={'real-' + index}
            text={item}
            isActive={index + data.virtual.length === activeIndex}
            ref={(el) => (listItemRefs.current[index] = el)}
          />
        ))}
      </ul>
    </div>
  )
}

function Tabs({ activeTab, onSelect }: { activeTab: string; onSelect: (tab: string) => void }) {
  const [timestamp, setTimestamp] = useState(Date.now())

  return (
    <div className="mt-10 flex rounded-sm border border-[white] p-2 text-xl font-bold leading-10 md:mx-auto md:mt-[60px] md:w-[310px]">
      <div
        className={cn(
          'h-10 flex-1 cursor-pointer transition-all duration-300 ease-out',
          activeTab === 'virtual' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => onSelect('virtual')}
      >
        Virtual
      </div>
      <div
        className={cn(
          'drop-shadow-[0_0_0_rgba(105, 188, 255, 0.5)] h-10 flex-1 cursor-not-allowed bg-gradient-to-r from-[#D2E7FF] to-[#ECF5FF] opacity-50 transition-all duration-300 ease-out',
          activeTab === 'real' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => {
          onSelect('real')
          setTimestamp(Date.now())
        }}
      >
        <LockIcon className="mr-[6px]" />
        Real
      </div>
      <Toast timestamp={timestamp} />
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
      className={cn('mt-6 text-base leading-8', isActive ? 'font-bold' : '')}
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

const Toast = ({ timestamp }: { timestamp: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showToast = () => {
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 2000)
  }

  useEffect(() => {
    if (timestamp) {
      showToast()
    }
  }, [timestamp])

  return (
    <>
      {isVisible && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[#00000010] bg-[white] px-4 py-3 text-sm text-[#1C1C26] shadow-lg">
          Coming soon...
        </div>
      )}
    </>
  )
}
