import Footer from './footer'
import Progress from './progress'
import Header from '@/components/header'

import Logo from '../logo.tsx'

export default function Section() {
  return (
    <div className="flex min-h-screen snap-start flex-col justify-between border-t-0 bg-gradient-radial from-[#2A2523] to-[black]">
      <Header />
      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-between border-t-0 p-6 md:px-[80px] md:py-10">
        <div></div>
        <Circle />
        <div className="w-full">
          <Progress />
          <Footer />
        </div>
      </div>
    </div>
  )
}

function Circle() {
  return (
    <div className="relative z-0 flex shrink-0 flex-col items-center justify-center">
      <Logo className="mx-auto my-10 block md:h-[200px] md:w-[160px]" borderColor="#FF6501" />
      <div className="mx-auto leading-6">Your Agentic Copilot, from Virtual to Real</div>
      <div className="mt-6 w-full rounded-md bg-[#FFFFFF1F] px-3 py-2 text-center text-sm leading-6">
        CA: CzbsTtLTwnX81fEvNBz7bDSt8VAw43XAcdgK8Ludvirt
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 aspect-1 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#241003] to-[black] md:size-[560px]"></div>
    </div>
  )
}
