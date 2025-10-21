// 轻量消息提示：支持锚点显示或底部浮现
// 用法：
// 1) showMessage("复制成功", 2000) // 底部浮现（默认）
// 2) showMessage("复制成功", 2000, { anchorSelector: "#contact", offsetRem: 2 }) // 在锚点上方 2rem
export function showMessage(text, duration = 2000, options = {}) {
  try {
    const wrapper = document.createElement("div");
    const anchorEl = options.anchorEl || (options.anchorSelector ? document.querySelector(options.anchorSelector) : null);
    const isAnchored = Boolean(anchorEl);

    // 根据是否锚定设置定位类
    if (isAnchored) {
      wrapper.className = "fixed left-1/2 -translate-x-1/2 z-[1000] pointer-events-none";
      const rect = anchorEl.getBoundingClientRect();
      const offsetPx = typeof options.offsetPx === "number" ? options.offsetPx : ((options.offsetRem ?? 2) * 16);
      wrapper.style.top = `${Math.max(rect.top - offsetPx, 8)}px`;
    } else {
      wrapper.className = "fixed bottom-24 sm:bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none";
      // 适配移动端安全区（如 iPhone 刘海），避免贴边
      wrapper.style.bottom = "calc(env(safe-area-inset-bottom, 0px) + 5rem)";
    }

    const box = document.createElement("div");
    // 使用现有主题变量保持风格一致
    box.className = [
      "px-4 py-2",
      "rounded-lg",
      "bg-card text-card-foreground",
      "border",
      "shadow-lg",
      "backdrop-blur-sm",
      "tracking-wide text-sm",
    ].join(" ");
    box.textContent = text;

    // 轻量过渡动画
    box.style.transition = "opacity 200ms ease, transform 200ms ease";
    box.style.opacity = "0";
    box.style.transform = "translateY(8px)";

    wrapper.appendChild(box);
    document.body.appendChild(wrapper);

    requestAnimationFrame(() => {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    });

    const hide = () => {
      box.style.opacity = "0";
      box.style.transform = "translateY(8px)";
      setTimeout(() => {
        if (wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
      }, 220);
    };

    setTimeout(hide, duration);
    return hide;
  } catch {
    // 安全兜底：如果运行环境异常，回退到 alert
    alert(text);
  }
}