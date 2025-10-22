import * as React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm/50 shadow-black/5", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("px-4 sm:px-6 pt-5 sm:pt-6", className)} {...props} />;
}
export function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-base sm:text-lg font-semibold", className)} {...props} />;
}
export function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm sm:text-base text-muted-foreground", className)} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={cn("px-4 sm:px-6 pb-5 sm:pb-6", className)} {...props} />;
}
export function CardFooter({ className, ...props }) {
  return <div className={cn("px-4 sm:px-6 pb-5 sm:pb-6", className)} {...props} />;
}