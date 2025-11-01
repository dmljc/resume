import * as React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-secondary text-secondary-foreground",
    outline: "border border-border",
    gradient: "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] via-[hsl(var(--grad-to))] to-[hsl(var(--grad-alt))]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-[3px] text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}