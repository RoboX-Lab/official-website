/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

/* eslint-disable */
interface Window {
  Telegram: any
  chrome: any
}

interface ImportMeta {
  env: {
    VITE_GA_TRACKING_ID: string
  }
}
