import { cn } from '@udecode/cn'
import { useScreen } from 'usehooks-ts'

import TwitterIcon from '@/assets/icons/twitter-icon.svg?react'
import IdLNtyBAmIcon from '@/assets/icons/idLNtyBAm-icon.svg?react'
import NoteIcon from '@/assets/icons/note-icon.svg?react'

export default function Footer() {
  const screen = useScreen()

  return (
    <div className="section min-h-0 border-t-0 py-0">
      <div className="flex flex-col items-center gap-5 py-10 text-base font-bold leading-8 md:flex-row md:justify-between md:text-xl">
        {screen.width < 768 && <Links />}
        {/* <p>Follow @ffs_DeSci</p> */}
        <p className="w-[200px]">Follow</p>
        {screen.width >= 768 && <Links />}
        <p className="w-[200px] text-right">Join Telegram</p>
      </div>
    </div>
  )
}

const links = [
  { name: 'twitter', href: '#', icon: <TwitterIcon className="size-6 md:size-9" /> },
  { name: 'idLNtyBAm', href: '#', icon: <IdLNtyBAmIcon className="size-6 md:size-9" /> },
  { name: 'note', href: '#', icon: <NoteIcon className="size-6 md:size-9" /> }
]
function Links({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center justify-center gap-5', className)}>
      {links.map((link) => (
        <li key={link.name + '-icon'} className="cursor-pointer">
          <a href={link.href}>{link.icon}</a>
        </li>
      ))}
    </ul>
  )
}
