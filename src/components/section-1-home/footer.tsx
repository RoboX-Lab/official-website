import { cn } from '@udecode/cn'

import PlusIcon from '@/assets/icons/plus-icon.svg?react'
import ArrowDownCircleIcon from '@/assets/icons/arrow-down-circle-icon.svg?react'

export default function Header({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <PlusIcon className="size-5 text-primary-light" />
      <ArrowDownCircleIcon className="size-5" />
    </div>
  )
}
