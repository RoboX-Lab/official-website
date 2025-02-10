import ComingIcon from '@/assets/coming.svg?react'
import SoonIcon from '@/assets/soon.svg?react'
// import Rect1 from '@/assets/rect-frame-1.svg?url'
// import Rect2 from '@/assets/rect-frame-2.svg?url'

export default function Page() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div
        className="absolute left-0 top-[-50px] h-screen w-full bg-[length:110%_auto] bg-left-top bg-no-repeat md:w-[450px] md:bg-contain"
        style={{ backgroundImage: `url(/rect-frame-1.svg)` }}
      ></div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-[90px]">
        <ComingIcon className="h-[54px] w-[240px] md:h-[110px] md:w-[calc(240/54*110px)]" />
        <SoonIcon className="h-[70px] w-[240px] md:h-[110px] md:w-[calc(240/70*110px)]" />
      </div>
      <div
        className={
          'absolute bottom-0 right-0 hidden h-screen w-full bg-[length:110%_auto] bg-right-bottom bg-no-repeat md:block md:w-[200px] md:bg-contain'
        }
        style={{ backgroundImage: `url(/rect-frame-2.svg)` }}
      ></div>
    </div>
  )
}
