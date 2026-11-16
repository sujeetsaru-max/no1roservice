import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "accent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.99]";

    const variantClasses = {
      primary:
        "bg-brand-blue text-white hover:bg-brand-blue/90 active:bg-[#0F5E94] shadow-xs focus-visible:ring-brand-blue",
      secondary:
        "bg-brand-navy text-white hover:bg-brand-navy/90 active:bg-[#0A213A] shadow-xs focus-visible:ring-brand-navy",
      outline:
        "border border-brand-border bg-white text-brand-text hover:bg-brand-bg-light hover:border-slate-300 focus-visible:ring-brand-blue",
      ghost:
        "text-brand-text hover:bg-brand-bg-light hover:text-brand-navy focus-visible:ring-brand-navy",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 focus-visible:ring-rose-500",
      accent:
        "bg-brand-aqua text-brand-navy hover:bg-[#1AA6A8] active:bg-[#158C8E] shadow-xs focus-visible:ring-brand-aqua",
    };

    const sizeClasses = {
      sm: "h-8.5 px-3.5 text-xs gap-1.5",
      md: "h-10 px-4.5 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
