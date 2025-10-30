import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card.jsx'
import { Badge } from '../ui/badge.jsx'
import { Button } from '../ui/button.jsx'
import { Download, Printer } from 'lucide-react'

export default function ResumeClone() {
  return (
    <section id="resume-clone" className="py-10 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 print-area">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">个人简历</h1>
          <div className="flex items-center gap-3 print-hidden">
            <Button variant="outline" className="flex items-center gap-1 rounded-md px-4 h-9 hover:bg-blue-50">
              <Download size={16} />
              <span>下载简历</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-1 rounded-md px-4 h-9 hover:bg-blue-50"
              onClick={() => window.print()}
            >
              <Printer size={16} />
              <span>打印简历</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-100/50 blur-md transform scale-110"></div>
            <div className="relative w-40 h-40 rounded-full bg-gray-100 overflow-hidden ring-4 ring-white shadow-md">
              <img
                src="https://placehold.co/320x320/e2e8f0/a0aec0?text=ZFC"
                alt="张芳朝"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="mt-5 text-2xl font-bold">张芳朝</h2>
          <p className="mt-2 text-sm text-gray-500">前端开发 | 9年经验</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 text-lg font-bold">联系方式</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-700">电话：13800138000</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="text-gray-700">邮箱：zhangfangchao@example.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="text-gray-700">微信：zhangfangchao</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 text-lg font-bold">技术专长</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">前端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none rounded-full">React</Badge>
                    <Badge className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200 border-none rounded-full">Vue</Badge>
                    <Badge className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 border-none rounded-full">TypeScript</Badge>
                    <Badge className="px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-none rounded-full">微信小程序</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">后端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-full">Nest.js</Badge>
                    <Badge className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 rounded-full">Node.js</Badge>
                    <Badge className="px-3 py-1 bg-pink-50 text-pink-600 hover:bg-pink-100 border border-pink-200 rounded-full">MySQL</Badge>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-700">团队管理</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200 rounded-full">技术规划</Badge>
                    <Badge className="px-3 py-1 bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200 rounded-full">团队建设</Badge>
                    <Badge className="px-3 py-1 bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-200 rounded-full">项目管理</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 text-lg font-bold">教育背景</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="text-gray-700">
                  <h3 className="font-medium">商丘工学院</h3>
                  <p className="text-sm text-gray-500">辅修软件工程 - 本科</p>
                  <p className="text-sm text-gray-500 mt-1">2012 - 2016</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 text-lg font-bold">个人优势</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">【专业经验】</h3>
                    <p className="text-sm text-gray-600">9 年前端开发、4 年团队管理</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">【技术体系】</h3>
                    <p className="text-sm text-gray-600">React、Vue、TypeScript、ES6+</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">【特色领域】</h3>
                    <p className="text-sm text-gray-600">Three.js 三维可视化、Nest.js 全栈应用、微信小程序</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">【项目亮点】</h3>
                    <p className="text-sm text-gray-600">三维标注项目落地、性能优化、中后台项目重构落地</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2 pt-5">
                <CardTitle className="text-blue-600 text-lg font-bold">工作经历</CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <div className="space-y-8">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 border-l-2 border-blue-500"></div>
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white"></div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-800">浙江图维科技股份有限公司</h3>
                      <span className="text-sm text-gray-500">2022.04 至今</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">前端小组长</p>
                    <ul className="mt-2 list-disc pl-4 space-y-1.5 text-sm text-gray-700">
                      <li>负责三维工井标注项目的探索与落地</li>
                      <li>技术栈 Three.js、Vue3、TypeScript、Vite、ES6+ 等</li>
                      <li>三维项目需求分析、架构设计、性能优化，相关通用能力沉淀</li>
                      <li>牵头三维技术方向团队能力建设，内部技术文档沉淀</li>
                    </ul>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 border-l-2 border-blue-500"></div>
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white"></div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-800">云上会展有限公司【阿里子公司】</h3>
                      <span className="text-sm text-gray-500">2021.07 - 2022.03</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">项目 Leader</p>
                    <ul className="mt-2 list-disc pl-4 space-y-1.5 text-sm text-gray-700">
                      <li>展会工作台首屏性能优化从约 10s 优化至约 2.5s</li>
                      <li>技术栈 React、TypeScript、Webpack、ES6+</li>
                      <li>主导4人规模前端小组常规研发与协作管理，制定技术规范</li>
                    </ul>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 border-l-2 border-blue-500"></div>
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white"></div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-800">杭州绿湾网络科技有限公司</h3>
                      <span className="text-sm text-gray-500">2020.02 - 2021.06</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">项目 Owner</p>
                    <ul className="mt-2 list-disc pl-4 space-y-1.5 text-sm text-gray-700">
                      <li>通过主导重构数据治理中后台系统，为团队争取到了 3.75 的绩效</li>
                      <li>技术栈 React、TypeScript、Webpack、ES6+</li>
                    </ul>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 border-l-2 border-blue-500"></div>
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-white"></div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-800">北京汉克时代科技有限公司</h3>
                      <span className="text-sm text-gray-500">2017.03 - 2020.02</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">前端开发骨干</p>
                    <ul className="mt-2 list-disc pl-4 space-y-1.5 text-sm text-gray-700">
                      <li>客服工作平台项目的开发与维护</li>
                      <li>技术栈 Vue2 全家桶、Element UI、Git</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}