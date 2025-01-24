import TwitterIcon from '@/assets/icons/twitter-icon.svg?react'
import IdLNtyBAmIcon from '@/assets/icons/idLNtyBAm-icon.svg?react'
import NoteIcon from '@/assets/icons/note-icon.svg?react'

export default function Footer() {
  return (
    <div className="section min-h-0">
      <div className="flex flex-col items-center gap-5 py-10 text-base font-bold leading-8">
        <Links />
        <p>Follow @ffs_DeSci</p>
        <p>Join Telegram</p>
      </div>
    </div>
  )
}

const links = [
  { name: 'twitter', href: '#', icon: <TwitterIcon className="size-6" /> },
  { name: 'idLNtyBAm', href: '#', icon: <IdLNtyBAmIcon className="size-6" /> },
  { name: 'note', href: '#', icon: <NoteIcon className="size-6" /> }
]
function Links() {
  return (
    <ul className="flex items-center justify-center gap-5">
      {links.map((link) => (
        <li key={link.name + '-icon'} className="cursor-pointer">
          <a href={link.href}>{link.icon}</a>
        </li>
      ))}
    </ul>
  )
}
