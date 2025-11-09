import { dict } from "./i18n-core.js";
import { ensurePdfLibsLoaded } from './cdn-loader.js'
import { showMessage } from './message.js'

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
    margin: [20, 20, 20, 20],
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
  } finally {
    // 无需恢复任何元素，可选择性地做些状态清理
  }
}