import { useState } from 'react'

export default function Progress() {
  const [progress, _setProgress] = useState(20)

  return (
    <div className="mt-10 space-y-1">
      <div className="flex items-center justify-between px-2 text-sm">
        <span>depolyment in progress ...</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full rounded-sm border border-[white] p-2">
        <div className="h-5 rounded-sm bg-[#FFFFFF1F]">
          <div
            className="h-full rounded-sm bg-gradient-to-r from-[#FFAF7C] to-[#FF6501] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 text-base text-primary-light">
        <span>Vituals</span>
        <span>Reals</span>
      </div>
    </div>
  )
}
