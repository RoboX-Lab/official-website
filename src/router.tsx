import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './views/home'
import HelloPage from './views/hello'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/hello" element={<HelloPage></HelloPage>} />
      </Routes>
    </BrowserRouter>
  )
}
