import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import ResumeClone from '../components/sections/ResumeClone.jsx'
import { isMobileDevice } from '../lib/utils.js'
import { useI18n } from '../lib/i18n-core.js'
import { showMessage } from '../lib/message.js'

export default function ResumePage() {
  const navigate = useNavigate()
  const { t } = useI18n()

  React.useEffect(() => {
    const redirectIfMobile = () => {
      if (isMobileDevice()) {
        navigate('/', { replace: true })
        // 显示提示消息：仅 PC 端可查看在线简历
        setTimeout(() => {
          // showMessage 已含兜底逻辑，无需外层 try/catch
          showMessage(t('resume.pcOnly'), 2500)
        }, 100)
      }
    }
    // 初始判断
    redirectIfMobile()
    // 监听视口变化，确保从桌面变为移动时也重定向
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = () => redirectIfMobile()
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else if (mq.addListener) mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else if (mq.removeListener) mq.removeListener(handler)
    }
  }, [navigate, t])

  return (
    <div>
      <main className="min-h-screen pt-16">
        <ResumeClone />
      </main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Zhang Fangchao</footer>
    </div>
  )
}