import { cn } from '@udecode/cn'
import { forwardRef, useLayoutEffect, useRef, useState } from 'react'

import Robot1 from '@/assets/robot-1.svg?react'
import Robot2 from '@/assets/robot-2.svg?react'
import BigStar from '@/assets/big-star.svg?react'

export default function Section() {
  const [leftLineHeight, setLeftLineHeight] = useState(0)
  const [rightLineHeight, setRightLineHeight] = useState(0)

  const topLeftLineRef = useRef<HTMLDivElement>(null)
  const bottomLeftLineRef = useRef<HTMLDivElement>(null)
  const topRightLineRef = useRef<HTMLDivElement>(null)
  const bottomRightLineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const calculateLineHeights = () => {
      if (topLeftLineRef.current && bottomLeftLineRef.current) {
        const topLeft = topLeftLineRef.current.getBoundingClientRect()
        const bottomLeft = bottomLeftLineRef.current.getBoundingClientRect()
        setLeftLineHeight(bottomLeft.top - topLeft.top)
      }

      if (topRightLineRef.current && bottomRightLineRef.current) {
        const topRight = topRightLineRef.current.getBoundingClientRect()
        const bottomRight = bottomRightLineRef.current.getBoundingClientRect()
        setRightLineHeight(bottomRight.top - topRight.top)
      }
    }

    calculateLineHeights()
    window.addEventListener('resize', calculateLineHeights)
    return () => window.removeEventListener('resize', calculateLineHeights)
  }, [])

  return (
    <div className="section relative flex h-screen flex-col pb-0 pt-10 text-center">
      <h2 className="flex w-full items-center justify-center text-3xl font-bold text-primary-light">
        <div className="relative flex-1">
          <HLine ref={topLeftLineRef} className="flex-1" />
          <VLine style={{ height: leftLineHeight }} className="absolute -left-0.5 top-0" />
        </div>
        <Rect className="mr-3" />
        Decision-Making
        <Rect className="ml-3" />
        <div className="relative z-50 flex-1">
          <HLine ref={topRightLineRef} className="flex-1" />
          <VLine style={{ height: rightLineHeight }} className="absolute -right-0.5 top-0" />
        </div>
      </h2>
      <p className="w-full text-3xl font-bold text-primary-light">(Planning)</p>
      <div className="flex flex-1 flex-col py-3">
        <h3 className="mb-2 h-5 text-sm font-bold text-gray-1000"></h3>
        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex-1">
            <HLine ref={bottomLeftLineRef} className="flex-1" />
          </div>
          <Rect className="mr-3" />
          <div className="relative h-full">
            <Robot1 className="mx-auto h-full w-auto" preserveAspectRatio="xMidYMid meet" width={236 / 361 + 'em'} />
            <BigStar className="absolute right-[-20%] top-[-5%] h-full w-auto" />
          </div>
          <Rect className="invisible ml-3" />
          <div className="invisible relative flex-1">
            <HLine className="flex-1" />
          </div>
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#FFFFFF1F] px-8 py-2 text-xl font-bold">Virtual World</div>
        </div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col py-3">
        {/* <h3 className="mb-2 h-5 text-sm font-bold text-gray-1000">Embodiment Skills</h3> */}
        <div className="relative mt-4 flex min-h-0 w-full flex-1 items-center justify-center">
          <div className="invisible relative flex-1">
            <HLine className="flex-1" />
          </div>
          <Triangle className="invisible mr-3" />
          <Robot2 className="mx-auto h-full w-auto" preserveAspectRatio="xMidYMid meet" width={231 / 351 + 'em'} />
          <Triangle className="relative z-50 ml-3" />
          <div className="relative z-50 flex-1">
            <HLine ref={bottomRightLineRef} className="flex-1" />
          </div>
          <div className="absolute w-screen bg-[#00000066] text-2xl font-bold leading-[38px]">
            Embodiment Control <br />
            Skills
          </div>
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#0000001F] px-8 py-2 text-xl font-bold">Real World</div>
        </div>
        <div className="absolute left-[calc((-100vw+100%)/2)] top-0 -z-10 h-full w-screen bg-gradient-to-r from-[#FFAF7C] to-[#FF6501]"></div>
      </div>
    </div>
  )
}

function Rect({ className, size = 2 }: { className?: string; size?: number }) {
  return <div className={cn(`size-${size} rotate-45 bg-[white]`, className)}></div>
}

const HLine = forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => {
  return <div ref={ref} className={cn('h-0.5 bg-[white]', className)}></div>
})

function VLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div style={style} className={cn('w-0.5 bg-[white]', className)}></div>
}

function Triangle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `h-0 w-0 border-[8px] border-l-0 border-solid border-b-[transparent] border-r-[white] border-t-[transparent]`,
        className
      )}
    ></div>
  )
}
