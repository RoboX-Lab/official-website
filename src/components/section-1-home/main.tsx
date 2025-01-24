import Logo from '@/components/logo'
import { useState } from 'react'

export default function Main() {
  return (
    <article className="py-4">
      <Circle />
    </article>
  )
}

function Circle() {
  return (
    <div className="relative z-0 flex flex-col items-center justify-center">
      <Logo className="mx-auto my-10 block" borderColor="#FF6501" />
      <div className="mx-auto leading-6">Your Agentic Copilot, from Virtuals to Reals</div>
      <div className="mt-6 w-full rounded-md bg-[#FFFFFF1F] px-3 py-2 text-center text-sm leading-6">
        CA: dasfaerwdasfaer1232dfawadf24sadfasdf
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 aspect-1 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#241003] to-[black]"></div>
    </div>
  )
}
