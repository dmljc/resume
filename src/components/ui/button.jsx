import * as React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(({ asChild = false, className, variant = "default", size = "md", children, ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105",
    outline: "border border-border hover:bg-muted hover:scale-105",
    ghost: "hover:bg-muted hover:scale-105",
    gradient: "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] via-[hsl(var(--grad-to))] to-[hsl(var(--grad-alt))] hover:opacity-90 hover:scale-105",
  };
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
  };
  const classes = cn(
    "inline-flex items-center justify-center rounded-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: cn(children.props?.className, classes),
      ...props,
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";