import { Route, BrowserRouter, Routes } from 'react-router-dom'

import HomePage from './views/home'
import HelloPage from './views/hello'

import React from 'react'
const AirdropClaim = React.lazy(() => import('./views/airdrop-claim'))
const AirdropRegiter = React.lazy(() => import('./views/airdrop-register'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/hello" element={<HelloPage></HelloPage>} />
        <Route path="/airdrop/claim" element={<AirdropClaim></AirdropClaim>} />
        <Route path="/airdrop" element={<AirdropRegiter></AirdropRegiter>} />
      </Routes>
    </BrowserRouter>
  )
}
