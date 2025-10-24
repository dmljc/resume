import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { dict } from './lib/i18n-core.js'

// Set initial document.title and html lang before React mounts to avoid flicker
const initLang = localStorage.getItem('lang') || 'zh'
document.title = (dict['site.title']?.[initLang]) ?? dict['site.title'].zh
document.documentElement.lang = initLang === 'zh' ? 'zh-CN' : 'en'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
