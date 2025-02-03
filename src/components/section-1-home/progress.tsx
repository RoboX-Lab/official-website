import { cn } from '@udecode/cn'
import { useEffect, useState } from 'react'

export default function Progress() {
  const { progress } = useProgressControl(2000)
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="relative z-50 mt-10 md:mx-auto md:w-[800px]">
      <div className="flex items-center justify-between p-2 text-sm">
        <div />
        <div
          className={cn(
            'bg-[#FFFFFF] p-[2px] text-sm font-bold text-[#1C1C26] transition-opacity duration-300 ease-out',
            isHover && progress === 100 ? 'opacity-100' : 'opacity-0'
          )}
        >
          <span className="pr-5">Phase 1</span> Q1,25
        </div>
      </div>
      <div className="w-full rounded-sm border border-[white] px-2">
        <div className="my-2 flex h-5 items-center rounded-sm bg-[#FFFFFF1F]">
          <div
            className="h-full rounded-sm bg-gradient-to-r from-[#FFAF7C] to-[#FF6501] transition-all duration-300 ease-out"
            style={{ width: `${progress * 0.2}%` }}
          ></div>
          <div
            className={cn(
              'relative h-full transition-opacity duration-300 ease-out',
              progress === 100 ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className="absolute -bottom-2 w-[200px] translate-x-[-100px] text-center">
              <div className="mx-auto text-lg font-bold">Web Bot</div>
              <Triangle className="mx-auto -rotate-90" />
              <div className="mx-auto h-9 w-[2px] bg-[white]"></div>
            </div>
          </div>
          <div
            className={cn(
              'h-full flex-1 cursor-pointer rounded-sm bg-gradient-to-r from-[#D2E7FF] to-[#ECF5FF] shadow-md transition-all duration-300 ease-out',
              progress === 100 ? 'opacity-80' : 'opacity-0'
            )}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          ></div>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between px-2 text-base text-primary-light">
        <span>Vitual</span>
        <span>Real</span>
      </div>
    </div>
  )
}

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function useProgressControl(duration: number) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let animationFrameId: number
    let startTime: number

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsedTime = timestamp - startTime
      const progressRatio = Math.min(elapsedTime / duration, 1)
      const easedProgress = Math.floor(easeInOutCubic(progressRatio) * 100)

      setProgress(easedProgress)

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress)
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => cancelAnimationFrame(animationFrameId)
  }, [duration])

  const resetProgress = () => setProgress(0)

  return { progress, resetProgress }
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
