import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './views/home'
import DemoPage from './views/demo'

import { AirdropLayout } from './layouts/airdrop-layout'
import React from 'react'
const Airdrop = React.lazy(() => import('./views/airdrop'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/demo" element={<DemoPage></DemoPage>} />
        <Route path="/airdrop" element={<AirdropLayout></AirdropLayout>}>
          <Route index element={<Airdrop></Airdrop>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
