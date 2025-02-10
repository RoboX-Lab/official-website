import { cn } from '@udecode/cn'
import { useScreen } from 'usehooks-ts'
import { forwardRef, useLayoutEffect, useRef, useState } from 'react'

import Robot1 from '@/assets/robot-1.svg?react'
import Robot2 from '@/assets/robot-2.svg?react'
import BigStar from '@/assets/big-star.svg?react'

export default function Section() {
  const point1Ref = useRef<HTMLDivElement>(null)
  const point2Ref = useRef<HTMLDivElement>(null)
  const point3Ref = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const screen = useScreen()

  useLayoutEffect(() => {
    if (point1Ref.current && point2Ref.current && point3Ref.current && screen.availWidth) {
      computeSize()
    }
  }, [point1Ref, point2Ref, point3Ref, screen])

  function computeSize() {
    if (point1Ref.current && point2Ref.current && point3Ref.current) {
      const point1 = point1Ref.current.getBoundingClientRect()
      const point2 = point2Ref.current.getBoundingClientRect()
      const point3 = point3Ref.current.getBoundingClientRect()

      setWidth(point2.left - point1.left)
      setHeight(point1.top - point3.top + 1)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col pb-0 text-center md:gap-[100px]">
      <div className="relative z-50 flex flex-col items-center justify-start md:mt-[120px]">
        <h2
          className="flex w-full items-center justify-center text-6xl font-bold text-primary-light"
          style={{ width: width + 'px' }}
        >
          <HLine className="flex-1" />
          <Rect className="mr-3 size-2" ref={point3Ref} />
          Decision-Making
          <Rect className="ml-3 size-2" />
          <HLine className="flex-1" />
        </h2>
        <p className="mt-6 text-3xl font-bold text-primary-light">(Planning)</p>
      </div>
      <div className="relative z-50 flex w-full flex-1">
        <div className="flex flex-1 flex-col items-center bg-[black]">
          <div className="relative h-2">
            <Rect className="mb-3 size-2" ref={point1Ref} />
            <VLine className="absolute bottom-1 left-1/2 -translate-x-1/2" style={{ height: height + 'px' }} />
          </div>

          {/* <div className="invisible mb-8 h-[22px] text-xl">Embodiment Controls</div> */}
          <div className="relative my-8">
            <Robot1
              className="mx-auto h-[350px] w-auto flex-1"
              preserveAspectRatio="xMidYMid meet"
              height={361 / 236 + 'em'}
            />
            <BigStar className="absolute right-[-20%] top-[-5%] h-full w-auto" />
          </div>

          <div className="rounded-md bg-[#FFFFFF1F] px-8 py-2 text-xl font-bold md:mt-[92px]">Virtual</div>
        </div>

        <div className="flex flex-1 flex-col items-center">
          <div className="relative h-2">
            <Triangle className="mb-3 size-2 -translate-y-1 -rotate-90" ref={point2Ref} />
            <VLine className="absolute bottom-1 left-1/2 -translate-x-1/2" style={{ height: height + 'px' }} />
          </div>

          <div className="relative flex w-full items-center justify-center">
            <Robot2
              className="mx-auto my-8 h-[350px] w-auto flex-1"
              preserveAspectRatio="xMidYMid meet"
              height={360 / 240 + 'em'}
            />
            <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 bg-[#00000066] text-2xl font-bold">
              Embodiment Control <br /> Skills
            </div>
          </div>
          <div className="rounded-md bg-[#0000001F] px-8 py-2 text-xl font-bold md:mt-[92px]">Real</div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#FFAF7C] to-[#FF6501]"></div>
    </div>
  )
}

const Rect = forwardRef<HTMLDivElement, { className?: string; size?: number }>(({ className, size = 2 }, ref) => {
  return <div ref={ref} className={cn(`size-${size} rotate-45 bg-[white]`, className)}></div>
})

const HLine = forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => {
  return <div ref={ref} className={cn('h-0.5 bg-[white]', className)}></div>
})

function VLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div style={style} className={cn('w-0.5 bg-[white]', className)}></div>
}

const Triangle = forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `h-0 w-0 border-[8px] border-l-0 border-solid border-b-[transparent] border-r-[white] border-t-[transparent]`,
        className
      )}
    ></div>
  )
})
