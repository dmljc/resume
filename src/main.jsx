import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ResumePage from './pages/ResumePage.jsx'
import Navbar from './components/navbar.jsx'
import { I18nProvider } from './lib/i18n.jsx'
import { dict } from './lib/i18n-core.js'

// 动态设置标题与 lang
export function DynamicHead() {
  const { pathname } = useLocation()
  const lang = localStorage.getItem('lang') || 'zh'
  React.useEffect(() => {
    const siteTitle = dict['site.title']?.[lang] ?? dict['site.title'].zh
    const resumeTitle = dict['nav.resume']?.[lang] ?? dict['nav.resume'].zh
    document.title = pathname === '/resume' ? `${resumeTitle}` : siteTitle
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [pathname, lang])
  return null
}

export function Root() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <DynamicHead />
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
