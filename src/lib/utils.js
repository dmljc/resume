import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 判断是否为移动设备或小屏交互环境
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  // 打印或打印预览期间，避免误判为移动端导致路由重定向
  // 在 Chrome/Edge/Safari 中打开系统打印对话框时，视口尺寸可能被修改，
  // (max-width: 768px) 会临时匹配；这里显式忽略 print 媒体状态。
  const isPrinting = window.matchMedia && window.matchMedia('print').matches;
  if (isPrinting) return false;
  const ua = navigator.userAgent || navigator.vendor || (window.opera ?? '');
  const isUA = /android|iphone|ipod|ipad|blackberry|iemobile|opera mini|mobi/i.test(ua);
  const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const isSmall = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  return Boolean(isUA || isCoarse || isSmall);
}