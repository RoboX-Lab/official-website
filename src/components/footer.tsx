import { cn } from '@udecode/cn'
import { useScreen } from 'usehooks-ts'

import TwitterIcon from '@/assets/icons/twitter-icon.svg?react'
import IdLNtyBAmIcon from '@/assets/icons/idLNtyBAm-icon.svg?react'
import NoteIcon from '@/assets/icons/note-icon.svg?react'
import { useState } from 'react'

export default function Footer() {
  const screen = useScreen()
  const [show, setShow] = useState(true)

  return (
    <>
      <div
        className={cn(
          'sticky inset-x-0 bottom-0 z-50 border-t-0 bg-[#FFFFFF1F] py-5 text-center text-lg font-bold text-[white] md:py-10 md:text-2xl',
          show ? '' : 'hidden'
        )}
        onClick={() => setShow(false)}
      >
        <span className="hidden md:inline">Join the Future of AI with </span>
        <span className="hidden text-[#FF6501] md:inline">R6D9</span>
        <span className="mx-1 hidden text-lg md:inline md:text-xl">-</span>
        <a
          href="https://forms.gle/2iu7BopUTmVQf4Jy7"
          className="block cursor-pointer text-lg no-underline underline-offset-8 hover:underline md:inline md:text-2xl md:no-underline"
          target="_blank"
        >
          Early Access Application Now Open!
        </a>
      </div>
      <div className="section min-h-0 border-t-0 py-0">
        <div className="flex flex-col items-center gap-5 py-10 text-base font-bold leading-8 md:flex-row md:justify-between md:text-xl">
          {screen.width < 768 && <Links />}
          {/* <p>Follow @ffs_DeSci</p> */}
          <p className="md:w-[200px]">Follow</p>
          {screen.width >= 768 && <Links />}
          <p className="md:w-[200px] md:text-right">Join Telegram</p>
        </div>
      </div>
    </>
  )
}

const links = [
  { name: 'twitter', href: 'https://t.me/Roboagent69Channel', icon: <TwitterIcon className="size-6 md:size-9" /> },
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
