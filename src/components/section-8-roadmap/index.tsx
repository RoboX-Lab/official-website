import CheckCircleIcon from '@/assets/icons/check-circle-icon.svg?react'

type TCardProps = {
  phase: string
  date: string
  title: string
  des: string
  checks: string[]
  highlight?: boolean
}

const data: TCardProps[] = [
  {
    phase: 'Phase 1',
    date: '(Q1, 25)',
    title: 'The Crypto-Enlightened Desktop App',
    des: 'Launch a desktop app capable of learning, adapting, and performing crypto-powered purchases.',
    checks: ['Desktop App MVP', 'Community Interaction', 'Crypto-Powered Purchases']
  }
  // {
  //   phase: 'Phase 2',
  //   date: '(Q2, 25)',
  //   title: 'Embodied Robots in Shared Spaces',
  //   des: 'Introduce a collaborative environment with multiple Embodied Robots performing physical tasks based on user commands via the Twitter bot.',
  //   checks: ['Robot Deployment', 'Command Integration', 'Task Versatility', 'Performance Metrics']
  // },
  // {
  //   phase: 'Phase 3',
  //   date: '(Q3, 25)',
  //   title: 'Home Ownership and Decentralized Contributions',
  //   des: 'Launch DePin Robots for personal ownership, enabling users to earn crypto while contributing valuable data to the robotics ecosystem.',
  //   checks: [
  //     'Robot Pre-Orders',
  //     'Data Contribution System',
  //     'Labelling Platform Partnership',
  //     'Reward Mechanisms',
  //     'Ongoing Support'
  //   ]
  // }
  // {
  //   phase: 'Future Vision',
  //   date: '',
  //   title: 'Scaling and Expanding Applications',
  //   des: 'Launch DePin Robots for personal ownership, enabling users to earn crypto while contributing valuable data to the robotics ecosystem.',
  //   checks: ['Enhanced Capabilities', 'Global Community', 'AI Ecosystem'],
  //   highlight: true
  // }
]

export default function Section() {
  return (
    <div className="section md:py-[120px]">
      <div className="z-10 bg-[black] pb-3 text-center md:pb-[60px]">
        <h2 className="h2">Roadmap</h2>
        <p className="text-base leading-8">
          Revolutionizing the Way You Interact with AI, Robots, and the World Around You
        </p>
      </div>
      <div className="flex rounded-lg bg-[#FFFFFF0A] px-6 pb-4 pt-10 md:justify-center md:pb-8 md:pt-[60px]">
        {/* <div className="relative mr-6 w-[2px] bg-[#2B2B2B] md:mr-[108px]"> */}
        {/* <div className="sticky top-[200px] h-10 rounded-full bg-gradient-to-b from-[#FFAF7C00] to-[#FF6501]"></div> */}
        {/* </div> */}
        <div className="flex-1 space-y-20 pb-4 text-left">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="my-10 flex items-center justify-center gap-5 md:my-[60px]">
        <div className="flex items-center gap-1">
          <span className="block size-2 bg-[#FFE9D0]"></span>
          <span className="block size-2 bg-[#FFA769]"></span>
          <span className="block size-2 bg-[#FF6501]"></span>
        </div>
        <div className="text-2xl font-bold">MORE TO COME</div>
        <div className="flex items-center gap-1">
          <span className="block size-2 bg-[#FF6501]"></span>
          <span className="block size-2 bg-[#FFA769]"></span>
          <span className="block size-2 bg-[#FFE9D0]"></span>
        </div>
      </div>
    </div>
  )
}

function Card({ phase, date, title, des, checks, highlight }: TCardProps) {
  return (
    <div className="text-base font-normal md:mx-auto md:w-[710px]">
      <div className="flex items-center justify-between">
        <div
          className={`rounded-full ${highlight ? 'bg-primary-light' : 'bg-primary-dark'} px-3 py-1 font-bold text-gray-1000`}
        >
          {phase}
        </div>
        <div className="">{date}</div>
      </div>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-gray-400">{des}</p>
      <ul className="mt-12 space-y-4">
        {checks.map((item, index) => (
          <li key={item + index} className="flex items-center">
            <CheckCircleIcon className="mr-2 size-5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
