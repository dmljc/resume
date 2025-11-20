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

