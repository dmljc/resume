import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target older mobile Safari/Android browsers for better compatibility
    target: ['es2019', 'safari13'],
    cssTarget: 'safari13',
  },
})
