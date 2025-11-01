import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card.jsx'
import { Badge } from '../ui/badge.jsx'
import { Button } from '../ui/button.jsx'
import { Download, Printer } from 'lucide-react'
import { useI18n } from '../../lib/i18n-core.js'
import { jobs } from './work.data.js'
import { education } from './education.data.js'
import { contactInfo } from './contact.data.js'

export default function ResumeClone() {
  const { t, lang } = useI18n();
  const colon = lang === 'zh' ? '：' : ': ';

  return (
    <section id="resume-clone" className="relative py-10 md:py-12" style={{
      backgroundImage: `radial-gradient(1200px 800px at 10% 0%, hsl(var(--grad-from) / 0.25), transparent 60%),
        radial-gradient(1000px 700px at 90% 10%, hsl(var(--grad-to) / 0.25), transparent 60%),
        radial-gradient(800px 500px at 50% 100%, hsl(var(--grad-alt) / 0.25), transparent 60%)`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="hero-grid-overlay" />
      <div className="container mx-auto max-w-6xl px-4 print-area">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">{t('nav.resume')}</h1>
          <div className="flex items-center gap-3 print-hidden">
            <Button variant="outline" className="flex items-center gap-1 rounded-md px-4 h-9 border-gray-400 text-gray-900 hover:bg-gray-100 hover:border-gray-500 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-500 transition-colors">
              <Download size={16} />
              <span>{t('resume.download')}</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-1 rounded-md px-4 h-9 border-gray-400 text-gray-900 hover:bg-gray-100 hover:border-gray-500 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-500 transition-colors"
              onClick={() => window.print()}
            >
              <Printer size={16} />
              <span>{t('resume.print')}</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-100/50 dark:bg-blue-900/30 blur-md transform scale-110"></div>
            <div className="relative w-40 h-40 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-md">
              <img
                src="https://t13.baidu.com/it/u=623182183,2044352368&fm=225&app=113&f=JPEG?w=1685&h=1053&s=1E1A17CB84133DDC53CC4C380300C042"
                alt={t('brand.name')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="mt-5 text-2xl font-bold">{t('brand.name')}</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t('profile.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print-columns">
          <div className="space-y-8">
            <section id="contact">
            <Card className="bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">{t('contact.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400 flex-shrink-0 contact-icon">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="contact-label">{t('contact.phone')}{colon}</span>
                      <span className="contact-value">{contactInfo.phone}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400 flex-shrink-0 contact-icon">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="contact-label">{t('contact.email')}{colon}</span>
                      <span className="contact-value">{contactInfo.email}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400 flex-shrink-0 contact-icon">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="text-gray-700 dark:text-gray-300">
                      <span className="contact-label">{t('contact.wechat')}{colon}</span>
                      <span className="contact-value">{contactInfo.wechat}</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            </section>

            <section id="skills">
            <Card className="bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">{t('skills.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
              <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('skills.frontend')}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900/70 border-none rounded-full">React</Badge>
                    <Badge className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-900/70 border-none rounded-full">Vue</Badge>
                    <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900/70 border-none rounded-full">TypeScript</Badge>
                    <Badge className="px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:hover:bg-yellow-900/70 border-none rounded-full">{lang === 'zh' ? '微信小程序' : 'WeChat Mini Programs'}</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('skills.backend')}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-full">Nest.js</Badge>
                    <Badge className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-full">Node.js</Badge>
                    <Badge className="px-3 py-1 bg-pink-50 text-pink-600 hover:bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400 dark:hover:bg-pink-900/50 border border-pink-200 dark:border-pink-800 rounded-full">MySQL</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('skills.management')}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 rounded-full">{lang === 'zh' ? '技术规划' : 'Tech Strategy'}</Badge>
                    <Badge className="px-3 py-1 bg-teal-50 text-teal-600 hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50 border border-teal-200 dark:border-teal-800 rounded-full">{lang === 'zh' ? '团队建设' : 'Team Building'}</Badge>
                    <Badge className="px-3 py-1 bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800 rounded-full">{lang === 'zh' ? '项目管理' : 'Project Management'}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            </section>

            <section id="education">
            <Card className="bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">{t('education.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="text-gray-700 dark:text-gray-300 space-y-3">
                  {education.map((e) => (
                    <div key={e.school.zh}>
                      <h3 className="font-medium">{e.school[lang]}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{e.degree[lang]}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{e.time[lang]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </section>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">{t('advantages.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('advantages.label.experience')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('advantages.value.experience')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('advantages.label.stack')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('advantages.value.stack')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('advantages.label.focus')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('advantages.value.focus')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{t('advantages.label.highlights')}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('advantages.value.highlights')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <section id="experience">
            <Card className="bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-bold">{t('experience.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="space-y-8">
                  {jobs.map((j) => (
                    <div key={j.company.zh} className="relative pl-6">
                      <div className="absolute left-0 top-2 bottom-0 border-l-2 border-blue-500 dark:border-blue-400"></div>
                      <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 ring-2 ring-white dark:ring-gray-800"></div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 break-words">{j.company[lang]}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{j.time[lang]}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{j.role[lang]}</p>
                      <ul className="mt-2 list-disc pl-4 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                        {j.points[lang].map((p) => (
                          <li key={p} className="break-words">{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}