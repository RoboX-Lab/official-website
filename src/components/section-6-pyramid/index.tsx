import PlusIcon from '@/assets/icons/plus-icon.svg?react'
import Pyramid from '@/assets/triangle.svg?react'

type TItemProps = {
  text: string | JSX.Element
  image: string
}

const data = [
  {
    text: (
      <>
        Real-world <br />
        Robot Data
      </>
    ),
    image: ''
  },
  { text: 'Simulation Data', image: '' },
  { text: 'Internet Data', image: '' }
]

export default function Section() {
  return (
    <div className="section flex flex-col items-center py-10 text-center">
      <h2 className="mb-16 text-3xl font-bold text-primary-light">Data Pyramid</h2>
      <PlusIcon className="mt-20 size-8 text-primary-dark" />
      <div className="relative z-0 mt-[70px] flex aspect-[640/560] w-full flex-col pt-14 text-sm">
        <Pyramid className="absolute top-0 -z-10 mx-auto size-full" width={640} height={560} />
        {data.map((item, index) => (
          <Item key={item.image + index} {...item} />
        ))}
      </div>
    </div>
  )
}

function Item({ text }: TItemProps) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <span>{text}</span>
    </div>
  )
}
