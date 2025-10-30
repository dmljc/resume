import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResumePage from './pages/ResumePage.jsx'
import { dict } from './lib/i18n-core.js'

// Set initial document.title and html lang before React mounts to avoid flicker
const initLang = localStorage.getItem('lang') || 'zh'
// Set title based on route
if (window.location.pathname === '/resume') {
  document.title = '个人简历'
} else {
  document.title = (dict['site.title']?.[initLang]) ?? dict['site.title'].zh
}
document.documentElement.lang = initLang === 'zh' ? 'zh-CN' : 'en'

const RootComp = window.location.pathname === '/resume' ? ResumePage : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComp />
  </StrictMode>,
)
