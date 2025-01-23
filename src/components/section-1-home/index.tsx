import Header from './header'
import Footer from './footer'
import Main from './main'

export default function Section() {
  return (
    <div className="section flex flex-col justify-between bg-gradient-radial from-[#2A2523] to-[black]">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
