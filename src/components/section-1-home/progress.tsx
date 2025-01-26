import { useEffect, useState } from 'react'

import ProgressLine from '@/assets/progress-line.svg?react'

export default function Progress() {
  const { progress } = useProgressControl(2000)

  return (
    <div className="mt-10 space-y-1 md:mx-auto md:w-[800px]">
      <div className="flex items-center justify-between px-2 text-sm">
        <span>depolyment in progress ...</span>
        <span>{Math.round(progress * 0.2)}%</span>
      </div>
      <div className="w-full rounded-sm border border-[white] p-2">
        <div className="relative h-5 rounded-sm bg-[#FFFFFF1F]">
          <div
            className="h-full rounded-sm bg-gradient-to-r from-[#FFAF7C] to-[#FF6501] transition-all duration-300 ease-out"
            style={{ width: `${progress * 0.2}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-between">
            <div></div>
            <ProgressLine />
            <ProgressLine />
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 text-base text-primary-light">
        <span>Vituals</span>
        <span>Reals</span>
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
