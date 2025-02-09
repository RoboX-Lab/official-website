import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './views/home'
import DemoPage from './views/demo'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/demo" element={<DemoPage></DemoPage>} />
      </Routes>
    </BrowserRouter>
  )
}
