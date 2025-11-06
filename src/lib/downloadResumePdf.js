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
    },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css", "legacy"] },
  };

  // 为避免某些跨域图片导致画布污染，这里临时隐藏图片再渲染
  // 但不隐藏头像图片，避免闪烁
  const imgs = Array.from(el.querySelectorAll("img:not(.avatar-image)"));
  const originalDisplays = imgs.map((img) => img.style.display);
  
  // 添加一个小延迟，让用户感知到正在生成PDF
  const startTime = Date.now();
  imgs.forEach((img) => (img.style.display = "none"));

  try {
    await html2pdf().set(opt).from(el).save();
    // 成功提示（可选）：让用户知道下载已开始
    showMessage(lang === 'zh' ? '开始生成并下载 PDF' : 'Generating and downloading PDF', 2000)
  } catch (err) {
    showMessage(lang === 'zh' ? '生成 PDF 失败，请稍后重试' : 'Failed to generate PDF, please try again later', 3000)
    throw err
  } finally {
    // 确保至少有300ms的过渡时间，避免闪烁感太强
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, 300 - elapsedTime);
    
    setTimeout(() => {
      // 恢复图片显示
      imgs.forEach((img, i) => (img.style.display = originalDisplays[i] || ""));
    }, remainingTime);
  }
}