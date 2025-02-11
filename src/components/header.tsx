import { cn } from '@udecode/cn'
import { useState } from 'react'

import CrossIcon from '@/assets/icons/cross-icon.svg?react'
import MenuIcon from '@/assets/icons/menu-icon.svg?react'
import CloseIcon from '@/assets/icons/close-icon.svg?react'
import GithubIcon from '@/assets/icons/github-icon.svg?react'
import DocsIcon from '@/assets/icons/folder-open-fill-icon.svg?react'
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react'

export default function Header({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        'flex min-h-0 w-full items-center justify-between border-t-0 p-6 text-gray-200 md:px-[80px] md:py-10',
        className
      )}
    >
      <CrossIcon className={cn('size-5 text-primary-light md:size-8', isOpen && 'invisible')} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
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
    url: 'https://robox-lab.gitbook.io/r6d9-whitepaper'
  }
]

function Menu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <>
      <div className="md:hidden">
        {isOpen ? (
          <CloseIcon className="size-5 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <MenuIcon className="size-5 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
        {isOpen && (
          <>
            <div className="absolute right-0 top-[68px] z-50 w-full border-y border-y-[#FFFFFF1F]">
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
      <div className="hidden gap-10 font-medium md:flex">
        {menuItems.map((item) => (
          <a key={item.name + '-menu'} href={item.url} className="flex items-center justify-center">
            {item.icon}
            <span className="ml-2">{item.name}</span>
          </a>
        ))}
      </div>
    </>
  )
}
