import { cn } from '@udecode/cn'

import CrossIcon from '@/assets/icons/cross-icon.svg?react'
import MenuIcon from '@/assets/icons/menu-icon.svg?react'

export default function Header({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <CrossIcon className="size-5 text-primary-light" />
      <MenuIcon className="size-5" />
    </div>
  )
}
