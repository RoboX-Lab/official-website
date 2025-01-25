import PlusIcon from '@/assets/icons/plus-icon.svg?react'
import Pyramid from '@/assets/triangle.svg?react'

import image1 from '@/assets/pyramid-image-1.png?url'
import image2 from '@/assets/pyramid-image-2.png?url'
import image3 from '@/assets/pyramid-image-3.png?url'

type TItemProps = {
  text: string | JSX.Element
  image: string
  className?: string
}

const data = [
  {
    text: (
      <div className="mb-2 md:mb-0 md:pt-14">
        Real-world <br />
        Robot Data
      </div>
    ),
    image: image1,
    className: 'w-[calc(235/640*100%)]'
  },
  { text: <div className="pb-3 md:pb-0">Simulation Data</div>, image: image2, className: 'w-[calc(430/640*100%)]' },
  { text: <div className="pb-7 md:pb-0">Internet Data</div>, image: image3, className: 'w-[calc(640/640*100%)]' }
]

export default function Section() {
  return (
    <div className="section flex flex-col items-center py-10 text-center md:h-screen md:py-[120px]">
      <h2 className="h2">Data Pyramid</h2>
      <PlusIcon className="mt-20 size-8 text-primary-dark md:hidden" />
      <div className="relative z-0 my-3 mt-[70px] flex aspect-[640/560] w-full flex-col items-center text-sm md:w-[640px]">
        <Pyramid className="pointer-events-none absolute top-0 z-20 mx-auto size-full" width={640} height={560} />
        {data.map((item, index) => (
          <Item key={item.image + index} {...item} />
        ))}
      </div>
    </div>
  )
}

function Item({ text, image, className }: TItemProps) {
  return (
    <div className={`group relative flex flex-1 items-center justify-center ${className} cursor-pointer`}>
      <div className="absolute flex size-full items-end justify-center text-sm md:items-center">{text}</div>
      <img
        src={image}
        alt=""
        className="relative z-10 h-full w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  )
}
