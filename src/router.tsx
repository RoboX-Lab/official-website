import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './views/home'
import HelloPage from './views/hello'

import { AirdropLayout } from './layouts/airdrop-layout'
import React from 'react'
const Airdrop = React.lazy(() => import('./views/airdrop'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/hello" element={<HelloPage></HelloPage>} />
        <Route path="/airdrop" element={<AirdropLayout></AirdropLayout>}>
          <Route index element={<Airdrop></Airdrop>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
