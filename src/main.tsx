import { createRoot } from 'react-dom/client'
import Router from '@/router'
import { Toaster } from 'react-hot-toast'

import '@/styles/tailwind.css'
import '@/styles/global.css'
import 'video-react/styles/scss/video-react.scss'

import ReactGA from 'react-ga4'

const container = document.getElementById('root')
if (!container) {
  throw new Error('root container not found')
}

initReactGA()

const root = createRoot(container)
root.render(
  <>
    <Toaster />
    <Router></Router>
  </>
)

function initReactGA() {
  ReactGA.initialize([
    {
      trackingId: import.meta.env.VITE_GA_TRACKING_ID,
      gaOptions: {
        userId: localStorage.getItem('uid') || undefined
      }
    }
  ])
}
