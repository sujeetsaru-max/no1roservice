import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "info" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-[#EAF1F8] text-brand-navy border-brand-border",
    info: "bg-[#EAF5FC] text-brand-blue border-[#CFE6F8]",
    accent: "bg-[#E8FAF9] text-[#117C7E] border-[#B2EEF0]",
    success: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]",
    warning: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]",
    outline: "border-brand-border text-brand-text bg-white",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px] font-semibold",
    md: "px-2.5 py-1 text-xs font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border tracking-wide select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
