import { dict } from "./i18n-core.js";
import { ensurePdfLibsLoaded } from './cdn-loader.js'
import { showMessage } from './message.js'

// 将打印样式转为在屏幕环境生效的内联样式，供 html2pdf 使用
let pdfStyleEl = null
async function loadPdfStylesInline() {
  if (pdfStyleEl) return pdfStyleEl
  try {
    const href = new URL('../styles/print.css', import.meta.url).href
    const res = await fetch(href)
    if (!res.ok) throw new Error('无法加载打印样式文件')
    let css = await res.text()
    // 去掉顶层 @media print 包裹，使规则在屏幕环境下也生效
    // 假设整个文件只有一个顶层 @media print 包裹
    css = css.replace(/^[\s\S]*?@media\s+print\s*\{/, '')
             .replace(/\}\s*$/, '')

    const style = document.createElement('style')
    style.id = 'pdf-inline-css'
    style.textContent = css
    document.head.appendChild(style)
    pdfStyleEl = style
    // 等待一帧，确保样式应用
    await new Promise(r => setTimeout(r, 30))
    return style
  } catch (err) {
    console.error(err)
    throw err
  }
}

function unloadPdfStylesInline() {
  if (pdfStyleEl) {
    pdfStyleEl.remove()
    pdfStyleEl = null
  }
}

  // 使用 DOM 转 PDF 的方式生成简历，避免字体文件依赖
  // 会把 .print-area 区域按 A4 自动分页并下载
  export async function downloadResumePdf(lang = "zh") {
    try {
      await ensurePdfLibsLoaded()
    } catch (err) {
      showMessage("PDF 库加载失败，请检查网络或 VITE_PDF_LIB_BASE 配置", 3000)
      throw err
    }
    
    const html2pdf = window.html2pdf
    const el = document.querySelector(".print-area");
    if (!el) {
      throw new Error("未找到简历区域 .print-area");
    }
    
    // 加载打印样式，确保 PDF 样式正确
    try {
      await loadPdfStylesInline()
      // 给 body 添加类名，触发打印样式应用
      document.body.classList.add('exporting-pdf')
      // 等待样式应用，确保渲染正确
      await new Promise(resolve => setTimeout(resolve, 300))
      // 强制浏览器重新计算样式
      void el.offsetHeight
      // 等待一帧，确保所有样式都已应用
      await new Promise(resolve => requestAnimationFrame(resolve))
    } catch (err) {
      console.warn('加载打印样式失败，PDF 可能样式不完整:', err)
    }
    
    // 确保元素可见且样式已应用
    const originalDisplay = el.style.display
    if (originalDisplay === 'none') {
      el.style.display = 'block'
    }
    
    // 清理函数，在 PDF 生成完成后移除类名
    const cleanup = () => {
      document.body.classList.remove('exporting-pdf')
    }




  // 生成文件名：优先使用 i18n 字典中的翻译，缺失时使用回退
  const filename = (dict["resume.filename"] && dict["resume.filename"][lang])
    ? dict["resume.filename"][lang]
    : (lang === "zh" ? "张芳朝-前端开发.pdf" : "Zhang-Fangchao-Frontend-Developer.pdf");

  // 选项：尽量提升清晰度与兼容性
  const opt = {
    // 统一为上下 24px 的页边距，避免显式占位元素带来的样式错乱
    // html2pdf 的 margin 应用于所有页，效果更稳定
    // 下载 PDF：按需求将第一页底部与第二页顶部的页边距设置为 24px
    // 由于 html2pdf 不支持“不同页不同边距”，这里采用统一上下 24px，满足你的红框位置要求
    margin: [24, 0, 24, 0],
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2, // 提升分辨率
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
      logging: false, // 禁用日志以减少干扰
      // 忽略渲染交互元素，避免页面跳动与按钮进入PDF
      ignoreElements: (element) => {
        const cls = element.classList;
        if (!cls) return false;
        return cls.contains('print-hidden') || cls.contains('no-print');
      },
    },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css", "legacy"] },
  };

  // 修复：html2canvas 不支持现代颜色函数（oklab/lab/oklch/lch）
  // 在 html2canvas 克隆 DOM 后，彻底清理所有包含这些颜色函数的样式规则
  opt.html2canvas.onclone = (clonedDoc) => {
    // 1. 先复制原始文档的所有 <style> 元素到克隆文档（确保样式完整）
    // html2canvas 可能不会自动复制所有样式，我们需要手动复制
    const originalStyles = document.head.querySelectorAll('style');
    const clonedStyleIds = new Set();
    clonedDoc.querySelectorAll('style').forEach(style => {
      if (style.id) clonedStyleIds.add(style.id);
    });
    
    originalStyles.forEach((originalStyle) => {
      // 检查是否已经存在（通过 ID 或内容匹配）
      let exists = false;
      if (originalStyle.id && clonedStyleIds.has(originalStyle.id)) {
        exists = true;
      } else {
        // 检查内容是否已存在
        const originalText = originalStyle.textContent.trim();
        clonedDoc.querySelectorAll('style').forEach(clonedStyle => {
          if (clonedStyle.textContent.trim() === originalText) {
            exists = true;
          }
        });
      }
      
      if (!exists && originalStyle.textContent) {
        const clonedStyle = clonedDoc.createElement('style');
        if (originalStyle.id) {
          clonedStyle.id = originalStyle.id + '-cloned';
          clonedStyleIds.add(clonedStyle.id);
        }
        clonedStyle.textContent = originalStyle.textContent;
        clonedDoc.head.appendChild(clonedStyle);
      }
    });
    
    // 确保克隆文档的样式表被正确解析和应用
    // 等待样式表解析完成
    const clonedStyles = clonedDoc.querySelectorAll('style');
    clonedStyles.forEach(style => {
      try {
        // 触发样式表解析（访问 sheet 属性会触发解析）
        void style.sheet;
      } catch (e) {
        // 忽略跨域错误
      }
    });
    
    // 2. 移除所有外部样式表链接（html2canvas 会尝试加载这些样式表，其中可能包含不支持的颜色函数）
    const linkElements = clonedDoc.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(linkEl => {
      linkEl.remove();
    });
    
    // 3. 将打印样式注入到克隆文档（确保打印样式优先级最高）
    try {
      // 从原始文档获取打印样式内容（同步操作）
      const originalPdfStyleEl = document.getElementById('pdf-inline-css');
      if (originalPdfStyleEl && originalPdfStyleEl.textContent) {
        let printCss = originalPdfStyleEl.textContent;
        
        // 清理打印样式中的不支持的现代颜色函数
        const unsupportedColorPattern = /\b(?:ok)?(?:lab|lch)\s*\(/i;
        if (unsupportedColorPattern.test(printCss)) {
          // 移除包含不支持的现代颜色函数的行
          const lines = printCss.split('\n');
          printCss = lines.filter(line => !unsupportedColorPattern.test(line)).join('\n');
        }
        
        // 将清理后的打印样式注入到克隆文档（插入到 head 的最后，确保优先级）
        const clonedStyle = clonedDoc.createElement('style');
        clonedStyle.id = 'pdf-inline-css-cloned';
        clonedStyle.textContent = printCss;
        clonedDoc.head.appendChild(clonedStyle);
      }
    } catch (err) {
      console.warn('注入打印样式到克隆文档失败:', err);
    }

    // 4. 处理所有 <style> 元素，彻底移除包含不支持的颜色函数的规则（但保留我们刚注入的打印样式）
    const styleElements = clonedDoc.querySelectorAll('style');
    styleElements.forEach(styleEl => {
      // 跳过我们刚注入的打印样式（它已经清理过了）
      if (styleEl.id === 'pdf-inline-css-cloned') return;
      if (!styleEl.textContent) return;
      
      let css = styleEl.textContent;
      
      // 检查是否包含不支持的现代颜色函数（oklab/lab/oklch/lch）
      const unsupportedColorPattern = /\b(?:ok)?(?:lab|lch)\s*\(/i;
      if (!unsupportedColorPattern.test(css)) {
        return; // 不包含不支持的颜色函数，跳过处理
      }
      
      // 使用更简单但更彻底的方法：逐行/逐规则处理
      // 将 CSS 按规则分割，过滤掉包含不支持的现代颜色函数的规则
      function removeUnsupportedColorsFromCSS(cssText) {
        let result = '';
        let i = 0;
        const len = cssText.length;
        
        while (i < len) {
          // 跳过空白和注释
          if (cssText[i] === ' ' || cssText[i] === '\n' || cssText[i] === '\t' || cssText[i] === '\r') {
            result += cssText[i];
            i++;
            continue;
          }
          
          // 处理 @ 规则（@media, @supports, @keyframes 等）
          if (cssText[i] === '@') {
            const atStart = i;
            // 找到 @ 规则名称的结束位置
            let j = i + 1;
            while (j < len && /[a-zA-Z-]/.test(cssText[j])) j++;
            const atRuleName = cssText.substring(i, j).trim();
            
            // 找到 @ 规则的大括号开始位置
            while (j < len && cssText[j] !== '{') j++;
            if (j >= len) {
              result += cssText.substring(i);
              break;
            }
            
            // 找到匹配的闭大括号
            let braceCount = 1;
            let k = j + 1;
            while (k < len && braceCount > 0) {
              if (cssText[k] === '{') braceCount++;
              else if (cssText[k] === '}') braceCount--;
              k++;
            }
            
            const blockContent = cssText.substring(atStart, k);
            // 如果块中包含不支持的现代颜色函数，跳过整个块
            if (/\b(?:ok)?(?:lab|lch)\s*\(/i.test(blockContent)) {
              i = k;
              continue;
            }
            
            result += blockContent;
            i = k;
            continue;
          }
          
          // 处理普通 CSS 规则
          // 找到选择器的结束位置（第一个 {）
          let selectorEnd = i;
          while (selectorEnd < len && cssText[selectorEnd] !== '{') selectorEnd++;
          if (selectorEnd >= len) {
            result += cssText.substring(i);
            break;
          }
          
          // 找到规则体的结束位置（匹配的 }）
          let braceCount = 1;
          let ruleEnd = selectorEnd + 1;
          while (ruleEnd < len && braceCount > 0) {
            if (cssText[ruleEnd] === '{') braceCount++;
            else if (cssText[ruleEnd] === '}') braceCount--;
            ruleEnd++;
          }
          
          const ruleContent = cssText.substring(i, ruleEnd);
          // 如果规则中包含不支持的现代颜色函数，跳过整个规则
          if (/\b(?:ok)?(?:lab|lch)\s*\(/i.test(ruleContent)) {
            i = ruleEnd;
            continue;
          }
          
          result += ruleContent;
          i = ruleEnd;
        }
        
        return result;
      }
      
      css = removeUnsupportedColorsFromCSS(css);
      
      // 清理多余的空白
      css = css.replace(/\n\s*\n/g, '\n').trim();
      
      // 如果样式表变空或只剩下空白，移除它
      if (!css.trim()) {
        styleEl.remove();
      } else {
        styleEl.textContent = css;
      }
    });

    // 4. 处理内联样式中的不支持的现代颜色函数（虽然不太可能，但为了保险）
    const allElements = clonedDoc.querySelectorAll('*');
    allElements.forEach(el => {
      if (el.style && el.style.cssText) {
        const styleText = el.style.cssText;
        // 检查是否包含不支持的现代颜色函数
        if (/\b(?:ok)?(?:lab|lch)\s*\(/i.test(styleText)) {
          // 移除包含不支持的现代颜色函数的属性
          const properties = styleText.split(';').filter(prop => {
            return !/\b(?:ok)?(?:lab|lch)\s*\(/i.test(prop);
          });
          el.style.cssText = properties.join(';');
        }
      }
    });
  };

  try {
    await html2pdf().set(opt).from(el).save();
    // PDF 生成完成，清理
    cleanup()
  } catch (err) {
    // 出错时也要清理
    cleanup()
    showMessage(lang === 'zh' ? '生成 PDF 失败，请稍后重试' : 'Failed to generate PDF, please try again later', 3000)
    throw err
  }
}