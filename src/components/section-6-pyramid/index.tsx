import PlusIcon from '@/assets/icons/plus-icon.svg?react'

export default function Section() {
  return (
    <div className="section flex flex-col items-center py-10 text-center">
      <h2 className="mb-16 text-3xl font-bold text-primary-light">Data Pyramid</h2>
      <PlusIcon className="size-8 text-primary-dark" />
      <div className="aspect-[640/560] bg-[red]"></div>
    </div>
  )
}
