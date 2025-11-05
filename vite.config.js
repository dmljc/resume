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
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        external: ['html2pdf.js', 'jspdf', 'html2canvas'],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react')) return 'react'
            if (id.includes('node_modules/react-dom')) return 'react'
            if (id.includes('node_modules/react-router-dom')) return 'router'
            if (id.includes('node_modules/lucide-react')) return 'icons'
            if (id.includes('node_modules/html2pdf')) return 'pdf'
            if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) return 'utils'
            if (id.includes('node_modules')) return 'vendor'
          },
        },
      },
    },
  }
})
