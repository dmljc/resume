import { cn } from "@/lib/utils";

// 边框颜色（亮色主题更浅，暗色主题更深）
const BORDER_COLORS = {
  React: "border-blue-400 dark:border-blue-600",
  Vue: "border-green-400 dark:border-green-600",
  TypeScript: "border-purple-400 dark:border-purple-700",
  "微信小程序": "border-amber-400 dark:border-amber-600",
  "Nest.js": "border-red-400 dark:border-red-600",
  "Node.js": "border-blue-400 dark:border-blue-700",
  Nginx: "border-gray-400 dark:border-gray-500",
  MySQL: "border-pink-400 dark:border-pink-600",
  技术规划: "border-blue-400 dark:border-blue-600",
  团队建设: "border-teal-400 dark:border-teal-600",
  项目管理: "border-amber-400 dark:border-amber-600",
};

// 文字颜色（亮色主题更深，暗色主题更浅）
const TEXT_COLORS = {
  React: "text-blue-600 dark:text-blue-300",
  Vue: "text-green-600 dark:text-green-300",
  TypeScript: "text-purple-600 dark:text-purple-300",
  "微信小程序": "text-amber-600 dark:text-amber-300",
  "Nest.js": "text-red-600 dark:text-red-300",
  "Node.js": "text-blue-600 dark:text-blue-300",
  Nginx: "text-gray-600 dark:text-gray-300",
  MySQL: "text-pink-600 dark:text-pink-300",
  技术规划: "text-blue-600 dark:text-blue-300",
  团队建设: "text-teal-600 dark:text-teal-300",
  项目管理: "text-amber-600 dark:text-amber-300",
};

// 底色：亮色为柔和填充（图一），暗色为带色半透明（图二）
const BG_COLORS = {
  React: "bg-blue-100 dark:bg-blue-900/30",
  Vue: "bg-green-100 dark:bg-emerald-900/30",
  TypeScript: "bg-purple-100 dark:bg-purple-900/30",
  "微信小程序": "bg-amber-100 dark:bg-amber-900/30",
  "Nest.js": "bg-red-100 dark:bg-red-900/30",
  "Node.js": "bg-blue-100 dark:bg-blue-900/30",
  Nginx: "bg-gray-100 dark:bg-slate-900/30",
  MySQL: "bg-pink-100 dark:bg-pink-900/30",
  技术规划: "bg-blue-100 dark:bg-blue-900/30",
  团队建设: "bg-teal-100 dark:bg-teal-900/30",
  项目管理: "bg-amber-100 dark:bg-amber-900/30",
};

export function tagClass(label) {
  return cn(
    // 按参考样式实现：text-xs + font-medium，胶囊居中
    "inline-flex items-center justify-center",
    "rounded-full",
    "!px-3",
    "!py-1",
    "text-xs",
    "font-medium",
    "border",
    "shadow-sm",
    "transition-colors",
    // 悬停：亮色略提亮，暗色略加透明
    "hover:brightness-105 dark:hover:bg-opacity-40",
    BG_COLORS[label] || "bg-gray-100 dark:bg-white/5",
    BORDER_COLORS[label] || "border-gray-400 dark:border-gray-600",
    TEXT_COLORS[label] || "text-gray-700 dark:text-gray-200"
  );
}