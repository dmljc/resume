import { defineConfig, loadEnv } from 'vite'
import process from 'node:process'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: mode === 'production' ? env.VITE_CDN_BASE ?? '/' : '/',
    plugins: [react()],
    build: {
      // Target older mobile Safari/Android browsers for better compatibility
      target: ['es2019', 'safari13'],
      cssTarget: 'safari13',
      manifest: true,
    },
  }
})
