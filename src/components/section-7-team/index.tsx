import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'

export default function Section() {
  return (
    <div className="section flex flex-col items-center py-10 text-center">
      <h2 className="mb-16 text-3xl font-bold text-primary-light">Team</h2>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-xl leading-8">[LLM, Agentic AI System, Sandbox]</p>
          <ArrowIcon className="my-12 h-[36px] w-[30px] rotate-180" />
          <h3 className="text-[40px] font-bold leading-[60px]">RoboX Lab</h3>
          <p className="mt-4 text-base leading-8">(led by Christ, PhD@CMU)</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-[68px] text-xl leading-8">[Annotation Tooling, Quality Workflow, Community Management]</p>
          <ArrowIcon className="my-12 h-[36px] w-[30px] rotate-180" />
          <h3 className="text-[40px] font-bold leading-[60px]">Codatta</h3>
        </div>
      </div>
    </div>
  )
}
