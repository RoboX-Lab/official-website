import Logo from '@/components/logo'
import { useState } from 'react'

export default function Main() {
  return (
    <article className="flex-1 py-4">
      <Circle />
      <Progress />
    </article>
  )
}

function Circle() {
  return (
    <div className="relative z-0 flex h-[500px] flex-col items-center justify-center">
      <Logo className="mx-auto my-10 block" borderColor="#FF6501" />
      <div className="mx-auto leading-6">Your Agentic Copilot, from Virtuals to Reals</div>
      <div className="mt-6 w-full rounded-md bg-[#FFFFFF1F] px-3 py-2 text-center text-sm leading-6">
        CA: dasfaerwdasfaer1232dfawadf24sadfasdf
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 aspect-1 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#241003] to-[black]"></div>
    </div>
  )
}

function Progress() {
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
