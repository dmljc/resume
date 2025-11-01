import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// 判断是否为移动设备或小屏交互环境
export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent || navigator.vendor || (window.opera ?? '');
  const isUA = /android|iphone|ipod|ipad|blackberry|iemobile|opera mini|mobi/i.test(ua);
  const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const isSmall = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  return Boolean(isUA || isCoarse || isSmall);
}