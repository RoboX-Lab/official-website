import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'
import svgr from 'vite-plugin-svgr'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  base: process.env.CDN_ASSETS_PATH ? `https://s.codatta.io/${process.env.CDN_ASSETS_PATH}` : undefined,
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        svgo: true
      },
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: '**/*.svg?react',
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should exclude.
      exclude: '**/node_modules/**'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5175,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://test.r6d9.ai',
        changeOrigin: true
      }
    }
  }
})
