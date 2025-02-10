import { motion } from 'framer-motion'
import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'
import RXLOGOIcon from '@/assets/rx-logo.svg?react'
import { useScreen } from 'usehooks-ts'

export default function Section() {
  const { width } = useScreen()

  const arrowAnimation = width > 768 ? { x: [0, 10, 0] } : { y: [0, 10, 0] }

  return (
    <div className="section flex flex-col items-center py-10 text-center md:py-[120px]">
      <h2 className="h2 mb-16">Team</h2>
      <div className="flex-1 md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:flex md:items-center md:py-12">
          <a className="md:flex md:items-center md:gap-9" href="https://roboxlab.xyz/" target="_blank">
            <RXLOGOIcon className="mx-auto h-[112px] w-[147px]" width="1em" height={112 / 147 + 'em'} />
            <div>
              <h3 className="mt-6 text-4xl font-bold leading-[56px] md:mt-0">RoboX Lab</h3>
              <p className="mt-1 text-base leading-8 md:mt-4">(led by Christ, PhD@CMU)</p>
            </div>
          </a>
          <motion.div
            animate={arrowAnimation}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mx-auto my-6 w-[30px] md:mx-12 md:my-0"
          >
            <ArrowIcon className="h-[36px] w-[30px] rotate-0 md:-rotate-90" />
          </motion.div>
          <p className="text-xl leading-8">[LLM, Agentic AI System, Sandbox]</p>
        </div>
        <div className="mt-12 md:my-12 md:mt-[120px] md:flex md:items-center">
          <h3 className="text-4xl font-bold leading-[56px]">Codatta</h3>
          <motion.div
            animate={arrowAnimation}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mx-auto my-6 w-[30px] md:mx-6 md:my-0"
          >
            <ArrowIcon className="h-[36px] w-[30px] rotate-0 md:-rotate-90" />
          </motion.div>
          <p className="text-xl leading-8">[Annotation Tooling, Quality Workflow, Community Management]</p>
        </div>
      </div>
    </div>
  )
}
