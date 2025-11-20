import * as React from "react";

export default function Footer({ fixed = false }) {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className={`print-hidden ${fixed ? 'fixed bottom-0 left-0 right-0' : ''} z-40 min-h-12 py-2 sm:py-0 sm:h-12 border-t border-gray-200 dark:border-gray-800 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] leading-relaxed sm:leading-none text-gray-600 dark:text-gray-400">
          <div>© {year} Zhang Fangchao</div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <span className="hidden sm:inline">网站备案号：</span>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="网站备案号"
                className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-2 cursor-pointer"
              >
                浙ICP备2025207551号-1
              </a>
            </div>
            <div className="flex items-center gap-1">
              <img 
                src="/备案图标.png" 
                alt="公安局备案图标" 
                className="h-3.5 w-auto shrink-0"
              />
              <span className="hidden sm:inline">公网安备：</span>
              <a
                href="https://beian.mps.gov.cn/#/query/webSearch?code=33011002018532"
                target="_blank"
                rel="noreferrer"
                aria-label="公安局备案号"
                className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-2 cursor-pointer"
              >
                浙公网安备33011002018532号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}