// 轻量 CDN 加载器：按需注入 <script>，并做去重缓存
const loaded = new Set()

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (loaded.has(src)) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.crossOrigin = 'anonymous'
    s.onload = () => { loaded.add(src); resolve() }
    s.onerror = () => reject(new Error(`加载脚本失败: ${src}`))
    document.head.appendChild(s)
  })
}

export async function ensurePdfLibsLoaded() {
  // 优先使用配置的 CDN 前缀；默认 jsDelivr
  const base = (import.meta.env.VITE_PDF_LIB_BASE || 'https://cdn.jsdelivr.net/npm').replace(/\/$/, '')
  // 使用 html2pdf 的 bundle，已包含 jspdf 与 html2canvas
  const version = '0.12.1'
  const bundlePath = `${base}/html2pdf.js@${version}/dist/html2pdf.bundle.min.js`
  await loadScript(bundlePath)
  if (!window.html2pdf) throw new Error('html2pdf 未正确加载（CDN）')
}