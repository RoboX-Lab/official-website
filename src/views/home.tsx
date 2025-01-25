import Section1 from '@/components/section-1-home'
import Section2 from '@/components/section-2-decision'
import Section3 from '@/components/section-3-video'
import Section4 from '@/components/section-4-can'
import Section5 from '@/components/section-5-embodiments'
import Section6 from '@/components/section-6-pyramid'
import Section7 from '@/components/section-7-team'
import Section8 from '@/components/section-8-roadmap'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="snap-y snap-mandatory">
      {/* <Header /> */}
      <Section1 />
      <HLine />
      <Section2 />
      <HLine />
      <Section3 />
      <HLine />
      <Section4 />
      <HLine />
      <Section5 />
      <HLine />
      <Section6 />
      <HLine />
      <Section7 />
      <HLine />
      <Section8 />
      <Footer />
    </div>
  )
}

function HLine() {
  return <div className="h-[2px] bg-[white]"></div>
}
