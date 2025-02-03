import { cn } from '@udecode/cn'
import { useScreen } from 'usehooks-ts'

import TwitterIcon from '@/assets/icons/twitter-icon.svg?react'
import IdLNtyBAmIcon from '@/assets/icons/idLNtyBAm-icon.svg?react'
import NoteIcon from '@/assets/icons/note-icon.svg?react'

export default function Footer() {
  const screen = useScreen()

  return (
    <>
      <div className="section min-h-0 border-t-0 bg-[white] py-6 text-center text-xl font-bold text-[black] md:py-11 md:text-2xl">
        Join the Future of AI with <span className="text-[#FF6501]">R6D9</span>
        <span className="mx-1 hidden text-lg md:inline md:text-xl">-</span>
        <a
          href="https://forms.gle/2iu7BopUTmVQf4Jy7"
          className="block cursor-pointer underline underline-offset-8 hover:underline md:inline md:no-underline"
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
  { name: 'twitter', href: 'https://x.com/Roboagent69', icon: <TwitterIcon className="size-6 md:size-9" /> },
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
