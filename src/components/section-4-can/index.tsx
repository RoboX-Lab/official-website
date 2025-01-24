import { useEffect, useRef, useState } from 'react'
import { cn } from '@udecode/cn'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'

import data from './data'

export default function Section() {
  const [activeTab, setActiveTab] = useState('virtual')
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const realContentRef = useRef(null)
  const virtualContentRef = useRef(null)
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([])

  const isRealInView = useInView(realContentRef, { amount: 0.5 })

  useEffect(() => {
    setActiveTab(isRealInView ? 'real' : 'virtual')
  }, [isRealInView])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'end start']
  })

  const headerY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = (headerRef.current as HTMLElement).offsetHeight
        const scrollPosition = window.scrollY + headerHeight + 4 * 24 // 4 lines of text (assuming 24px line height)

        let closestIndex = 0
        let minDistance = Infinity

        listItemRefs.current.forEach((item, index) => {
          if (item) {
            const itemTop = item.offsetTop
            const distance = Math.abs(scrollPosition - itemTop)
            if (distance < minDistance) {
              minDistance = distance
              closestIndex = index
            }
          }
        })

        setActiveIndex(closestIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div ref={containerRef} className="section relative pt-0 text-center">
      <motion.div ref={headerRef} style={{ y: headerY }} className="sticky top-0 z-10 bg-[black] pt-6">
        <h2 className="text-3xl font-bold text-primary-light">What Can R6D9 Do?</h2>
        <p className="mt-6 text-base leading-8">
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
            index={index}
            isActive={activeTab === 'virtual' && index === activeIndex}
            ref={(el) => (listItemRefs.current[index] = el)}
          />
        ))}
        <li ref={realContentRef} />
        {data.real.map((item, index) => (
          <TextItem
            key={'real-' + index}
            text={item}
            index={index}
            isActive={activeTab === 'real' && index === activeIndex}
            ref={(el) => (listItemRefs.current[index] = el)}
          />
        ))}
      </ul>
    </div>
  )
}

function Tabs({ activeTab, onSelect }: { activeTab: string; onSelect: (tab: string) => void }) {
  return (
    <div className="mt-10 flex rounded-sm border border-[white] p-2 text-xl font-bold leading-10">
      <div
        className={cn(
          'h-10 flex-1 cursor-pointer transition-all duration-300 ease-out',
          activeTab === 'virtual' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => onSelect('virtual')}
      >
        In Virtuals
      </div>
      <div
        className={cn(
          'h-10 flex-1 cursor-pointer transition-all duration-300 ease-out',
          activeTab === 'real' ? 'bg-[white] text-[black]' : 'text-white'
        )}
        onClick={() => onSelect('real')}
      >
        In Reals
      </div>
    </div>
  )
}

function TextItem({
  text,
  isActive,
  ref
}: {
  text: string
  index: number
  isActive: boolean
  ref: React.Ref<HTMLLIElement>
}) {
  return (
    <motion.li
      ref={ref}
      className={cn(
        'mt-6 text-base leading-8 transition-all duration-300',
        isActive ? 'text-2xl font-bold' : 'text-base opacity-50'
      )}
      initial={false}
      animate={{
        scale: isActive ? 1.2 : 1,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      {text}
    </motion.li>
  )
}
