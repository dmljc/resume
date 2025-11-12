import * as React from 'react'
import { useI18n } from '../lib/i18n-core.js'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card.jsx'
// 按需移除了顶部徽章与跳转按钮，故不再引入相关组件

export default function AboutSite() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen pt-16">
    <section id="about-site" className="relative py-10 md:py-12" style={{
      backgroundImage: `radial-gradient(1200px 800px at 10% 0%, hsl(var(--grad-from) / 0.25), transparent 60%),
        radial-gradient(1000px 700px at 90% 10%, hsl(var(--grad-to) / 0.25), transparent 60%),
        radial-gradient(800px 500px at 50% 100%, hsl(var(--grad-alt) / 0.25), transparent 60%)`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="hero-grid-overlay" />
      <div className="container mx-auto max-w-6xl px-4">
      <h1 className="text-2xl font-semibold mb-3 gradient-text">
        {t('nav.aboutSite')}
      </h1>
      <div className="mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {t('about.intro')}
        </p>
      </div>

      <div className="space-y-6">
        {/* 项目功能 */}
        <Card className="bg-card text-card-foreground shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">
              {t('about.features.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <ul className="space-y-3">
              <li>
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('about.features.label.pages')}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{t('about.features.value.pages')}</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('about.features.label.experience')}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{t('about.features.value.experience')}</span>
                </div>
              </li>
              <li>
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('about.features.label.resume')}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{t('about.features.value.resume')}</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 技术实现 */}
        <Card className="bg-card text-card-foreground shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">
              {t('about.tech.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.tech.item.react')}</p>
              </li>
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.tech.item.tailwind')}</p>
              </li>
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.tech.item.i18n')}</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 部署与运维 */}
        <Card className="bg-card text-card-foreground shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">
              {t('about.ops.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.ops.item.oss')}</p>
              </li>
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.ops.item.ecs')}</p>
              </li>
              <li>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('about.ops.item.sslcdn')}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      {/* 关闭容器包装 div，避免缺失结束标签导致解析错误 */}
      </div>
    </section>
    </main>
  )
}