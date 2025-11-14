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
      backgroundColor: "#ffffff",
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

  // 不再修改页面布局，避免任何跳动

  try {
    await html2pdf().set(opt).from(el).save();
  } catch (err) {
    showMessage(lang === 'zh' ? '生成 PDF 失败，请稍后重试' : 'Failed to generate PDF, please try again later', 3000)
    throw err
  }
}