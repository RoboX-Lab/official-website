import Robot1 from '@/assets/robot-1.svg?react'
import Robot2 from '@/assets/robot-2.svg?react'

export default function Section() {
  return (
    <div className="section relative flex h-screen flex-col pb-0 pt-10 text-center">
      <h2 className="w-full text-3xl font-bold text-primary-light">Decision-Making</h2>
      <p className="w-full text-3xl font-bold text-primary-light">(Planing)</p>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="mb-2 h-5 text-sm font-bold text-gray-1000">In Virtuals</h3>
        <div className="flex-1">
          <Robot1 className="mx-auto h-full w-auto" />
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#FFFFFF1F] px-8 py-2 text-xl font-bold">In Virtuals</div>
        </div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-3">
        <h3 className="mb-2 h-5 text-sm font-bold text-gray-1000">Embodiment Skills</h3>
        <div className="min-h-0 w-full flex-1">
          <Robot2 className="mx-auto h-full w-auto" />
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#0000001F] px-8 py-2 text-xl font-bold">In Reals</div>
        </div>
        <div className="absolute left-[calc((-100vw+100%)/2)] top-0 -z-10 h-full w-screen bg-gradient-to-r from-[#FFAF7C] to-[#FF6501]"></div>
      </div>
    </div>
  )
}
