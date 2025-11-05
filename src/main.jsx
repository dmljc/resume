import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
const App = React.lazy(() => import('./App.jsx'))
const ResumePage = React.lazy(() => import('./pages/ResumePage.jsx'))
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
  function PrefetchResume() {
    const { pathname } = useLocation()
    React.useEffect(() => {
      if (pathname === '/') {
        const idle = 'requestIdleCallback' in window
          ? window.requestIdleCallback
          : (fn) => setTimeout(fn, 600)
        const handle = idle(() => {
          import('./pages/ResumePage.jsx')
        })
        return () => {
          if ('cancelIdleCallback' in window) {
            window.cancelIdleCallback(handle)
          }
        }
      }
    }, [pathname])
    return null
  }
  return (
    <BrowserRouter>
      <I18nProvider>
        <DynamicHead />
        <Navbar />
        <PrefetchResume />
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </React.Suspense>
      </I18nProvider>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
