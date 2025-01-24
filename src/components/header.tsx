import { cn } from '@udecode/cn'
import { useState } from 'react'

import CrossIcon from '@/assets/icons/cross-icon.svg?react'
import MenuIcon from '@/assets/icons/menu-icon.svg?react'
import CloseIcon from '@/assets/icons/close-icon.svg?react'
import GithubIcon from '@/assets/icons/github-icon.svg?react'
import DocsIcon from '@/assets/icons/folder-open-fill-icon.svg?react'
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react'

export default function Header({ className }: { className?: string }) {
  return (
    <div className="relative">
      <div className={cn('section flex min-h-0 w-full items-center justify-between border-t-0', className)}>
        <CrossIcon className="size-5 text-primary-light" />
        <Menu />
      </div>
    </div>
  )
}

const menuItems = [
  {
    name: 'Github',
    icon: <GithubIcon className="size-6" />,
    url: ''
  },
  {
    name: 'Docs',
    icon: <DocsIcon className="size-6" />,
    url: ''
  }
]

function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="">
      {isOpen ? (
        <CloseIcon className="size-5 cursor-pointer" onClick={() => setIsOpen(false)} />
      ) : (
        <MenuIcon className="size-5 cursor-pointer" onClick={() => setIsOpen(true)} />
      )}
      {isOpen && (
        <>
          <div className="absolute right-0 top-full z-50 w-full border-y border-y-[#FFFFFF1F]">
            <ul className="section min-h-0 space-y-16 rounded-md border-t-0 bg-[black] py-6 shadow-lg">
              {menuItems.map((item) => (
                <li key={item.name + '-icon'} className="cursor-pointer">
                  <a href={item.url} className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                    <ArrowRightIcon className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
