import * as React from 'react'
import { I18nProvider } from '../lib/i18n.jsx'
import ResumeClone from '../components/sections/ResumeClone.jsx'

export default function ResumePage() {
  React.useEffect(() => {
    document.title = '个人简历'
  }, [])
  return (
    <I18nProvider>
      <main className="min-h-screen bg-white dark:bg-slate-900">
        <ResumeClone />
      </main>
    </I18nProvider>
  )
}