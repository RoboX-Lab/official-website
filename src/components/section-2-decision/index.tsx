import { useScreen } from 'usehooks-ts'
import M from './m'
import Pc from './pc'

export default function Section() {
  const screen = useScreen()

  return screen.width < 768 ? <M /> : <Pc />
}
