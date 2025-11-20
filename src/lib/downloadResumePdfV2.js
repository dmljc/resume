import { dict } from "./i18n-core.js";
import { loadPrintStyles } from './printStyles.js'
import { showMessage } from './message.js'

/**
 * 方案1：使用浏览器原生打印功能（推荐）
 * 优点：样式完美保留，格式稳定，无需第三方库，100% 兼容
 * 缺点：需要用户手动选择"另存为 PDF"
 */
export async function downloadResumePdfViaPrint(lang = "zh") {
  try {
    // 获取文件名（去掉 .pdf 扩展名，因为浏览器会自动添加）
    const filename = (dict["resume.filename"] && dict["resume.filename"][lang])
      ? dict["resume.filename"][lang].replace(/\.pdf$/i, '')
      : (lang === "zh" ? "张芳朝-全栈偏前端-9年工作经验" : "Zhang-Fangchao-Full-Stack-Frontend-leaning-9-Years-Experience");
    
    // 保存原始标题
    const originalTitle = document.title;
    
    // 临时修改页面标题为文件名，这样打印对话框可能会使用这个名称
    document.title = filename;
    
    // 加载打印样式
    await loadPrintStyles();
    
    // 等待样式加载
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // 触发浏览器打印对话框
    // 用户可以在打印对话框中选择"另存为 PDF"
    window.print();
    
    // 恢复原始标题
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
    
    // 显示提示信息
    // showMessage(
    //   lang === 'zh' 
    //     ? '请在打印对话框中选择"另存为 PDF"来下载简历' 
    //     : 'Please select "Save as PDF" in the print dialog to download resume',
    //   5000
    // );
  } catch (err) {
    // 确保恢复标题
    const originalTitle = document.title;
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
    
    showMessage(
      lang === 'zh' ? '打印失败，请稍后重试' : 'Print failed, please try again later',
      3000
    );
    throw err;
  }
}

/**
 * 方案2：使用 iframe + 打印
 * 创建一个隐藏的 iframe，加载简历内容，然后触发打印
 * 这样可以避免影响当前页面
 */
export async function downloadResumePdfViaIframe(lang = "zh") {
  return new Promise((resolve, reject) => {
    try {
      const el = document.querySelector(".print-area");
      if (!el) {
        throw new Error("未找到简历区域 .print-area");
      }

      // 创建隐藏的 iframe
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      iframe.style.opacity = '0';
      iframe.style.pointerEvents = 'none';
      
      document.body.appendChild(iframe);
      
      // 等待 iframe 加载
      iframe.onload = async () => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          
          // 加载打印样式
          await loadPrintStyles();
          
          // 获取所有样式
          const styles = Array.from(document.head.querySelectorAll('style'))
            .map(s => s.textContent)
            .filter(Boolean)
            .join('\n');
          
          // 获取打印样式内容
          const printStyleHref = new URL('../styles/print.css', import.meta.url).href;
          let printStyles = '';
          try {
            const res = await fetch(printStyleHref);
            if (res.ok) {
              printStyles = await res.text();
              // 去掉 @media print 包裹
              printStyles = printStyles.replace(/^[\s\S]*?@media\s+print\s*\{/, '').replace(/\}\s*$/, '');
            }
          } catch (e) {
            console.warn('加载打印样式失败:', e);
          }
          
          // 获取文件名（去掉 .pdf 扩展名）
          const filename = (dict["resume.filename"] && dict["resume.filename"][lang])
            ? dict["resume.filename"][lang].replace(/\.pdf$/i, '')
            : (lang === "zh" ? "张芳朝-全栈偏前端-9年工作经验" : "Zhang-Fangchao-Full-Stack-Frontend-leaning-9-Years-Experience");
          
          // 复制 HTML 内容
          const htmlContent = `
            <!DOCTYPE html>
            <html lang="${lang}">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${filename}</title>
                <style>
                  ${styles}
                  ${printStyles}
                </style>
              </head>
              <body style="margin: 0; padding: 0; background: white;">
                ${el.outerHTML}
              </body>
            </html>
          `;
          
          iframeDoc.open();
          iframeDoc.write(htmlContent);
          iframeDoc.close();
          
          // 等待内容渲染
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // 触发打印
          iframe.contentWindow.print();
          
          // 显示提示
          showMessage(
            lang === 'zh' 
              ? '请在打印对话框中选择"另存为 PDF"来下载简历' 
              : 'Please select "Save as PDF" in the print dialog to download resume',
            5000
          );
          
          // 清理 iframe
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
            resolve();
          }, 2000);
        } catch (err) {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          reject(err);
        }
      };
      
      // 触发加载
      iframe.src = 'about:blank';
      
    } catch (err) {
      showMessage(
        lang === 'zh' ? '生成 PDF 失败，请稍后重试' : 'Failed to generate PDF, please try again later',
        3000
      );
      reject(err);
    }
  });
}

