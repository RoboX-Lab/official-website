import ArrowIcon from '@/assets/icons/arrow-down-icon.svg?react'

export default function Section() {
  return (
    <div className="section flex flex-col items-center py-10 text-center md:py-[120px]">
      <h2 className="h2 mb-16">Team</h2>
      <div className="flex-1 md:flex md:items-center md:justify-between">
        <div className="flex-1 md:flex md:justify-center md:gap-[260px]">
          <div className="flex flex-col items-center md:max-w-[470px]">
            <p className="text-xl leading-8 md:h-[64px]">[LLM, Agentic AI System, Sandbox]</p>
            <ArrowIcon className="my-12 h-[36px] w-[30px] rotate-180" />
            <h3 className="text-[40px] font-bold leading-[60px]">RoboX Lab</h3>
            <p className="mt-4 text-base leading-8">(led by Christ, PhD@CMU)</p>
          </div>
          <div className="mt-[68px] flex flex-col items-center md:mt-0 md:max-w-[470px]">
            <p className="text-xl leading-8 md:h-[64px]">
              [Annotation Tooling, Quality Workflow, Community Management]
            </p>
            <ArrowIcon className="my-12 h-[36px] w-[30px] rotate-180" />
            <h3 className="text-[40px] font-bold leading-[60px]">Codatta</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
