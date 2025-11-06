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
  // 优先使用配置的 CDN；支持传入“目录前缀”或“完整文件 URL”
  const raw = (import.meta.env.VITE_PDF_LIB_BASE || 'https://cdn.jsdelivr.net/npm').trim()
  const isFileUrl = /\.js(\?.*)?$/.test(raw)
  const base = isFileUrl ? raw : raw.replace(/\/$/, '')
  // 使用 html2pdf 的 bundle，已包含 jspdf 与 html2canvas
  const version = '0.12.1'
  const primaryUrl = isFileUrl
    ? base
    : `${base}/html2pdf.js@${version}/dist/html2pdf.bundle.min.js`
  // 直接按配置加载；不做兜底
  await loadScript(primaryUrl)

  if (!window.html2pdf) throw new Error('html2pdf 未正确加载（CDN）')
}