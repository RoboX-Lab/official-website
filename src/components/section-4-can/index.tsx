// import { cn } from '@udecode/cn'

export default function Section() {
  return (
    <div className="section text-center">
      <h2 className="text-3xl font-bold text-primary-light">What Can R6D9 Do?</h2>
      <p className="mt-6 text-base leading-8">
        Built by top AI researchers, engineers, and a vibrantcommunity of ambitious contributors like you. Continuous
        learning and improving.
      </p>
      {/* <Tabs /> */}
    </div>
  )
}

// function Tabs({ activeTab, onSelect }: { activeTab: string; onSelect: (tab: string) => void }) {
//   return (
//     <div className="mt-10 flex rounded-sm border border-[white] p-2 text-xl font-bold">
//       <div
//         className={cn('h-10 flex-1 leading-10', activeTab === 'virtual' ? 'text-primary' : 'text-white')}
//         onClick={() => onSelect('virtual')}
//       >
//         In Virtuals
//       </div>
//       <div className="h-10 flex-1 leading-10" onClick={() => onSelect('real')}>
//         In Reals
//       </div>
//     </div>
//   )
// }
