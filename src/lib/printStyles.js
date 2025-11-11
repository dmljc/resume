let printLinkEl = null;

export function loadPrintStyles() {
  if (printLinkEl) return printLinkEl;
  const href = new URL('../styles/print.css', import.meta.url).href;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.id = 'print-css';
  document.head.appendChild(link);
  printLinkEl = link;
  return link;
}

export function unloadPrintStyles() {
  if (printLinkEl) {
    printLinkEl.remove();
    printLinkEl = null;
  }
}

export function printWithStyles() {
  // 动态加载样式后再唤起系统打印
  const link = loadPrintStyles();
  let printed = false;
  const start = () => {
    if (printed) return;
    printed = true;
    window.print();
  };
  // 若样式已解析则立即打印，否则等待加载完成
  if (link.sheet) start();
  else link.addEventListener('load', start, { once: true });
  // 兜底：避免某些浏览器未触发 load
  setTimeout(start, 200);

  // 打印结束后清理样式，避免常态页面加载打印 CSS
  const cleanup = () => {
    unloadPrintStyles();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
}