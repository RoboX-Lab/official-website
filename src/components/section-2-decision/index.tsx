import Robot1 from '@/assets/robot-1.svg?react'
import Robot2 from '@/assets/robot-2.svg?react'

export default function Section() {
  return (
    <div className="section relative flex flex-col p-0">
      <div className="flex flex-1 flex-col p-3">
        <h3 className="mb-2 h-5 text-center text-sm font-bold text-gray-1000"></h3>
        <div className="flex-1">
          <Robot1 className="mx-auto h-full w-auto" />
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#FFFFFF1F] px-8 py-2 text-xl font-bold">In Virtuals</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gradient-to-r from-[#FFAF7C] to-[#FF6501] p-3">
        <h3 className="mb-2 h-5 text-center text-sm font-bold text-gray-1000">Embodiment Skills</h3>
        <div className="min-h-0 flex-1">
          <Robot2 className="mx-auto h-full w-auto" />
        </div>
        <div className="flex w-full justify-center pb-3 pt-5">
          <div className="rounded-md bg-[#0000001F] px-8 py-2 text-xl font-bold">In Reals</div>
        </div>
      </div>
    </div>
  )
}
