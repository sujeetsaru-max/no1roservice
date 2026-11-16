import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface BrandLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark" | "monochrome";
  layout?: "horizontal" | "vertical" | "icon";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string | null;
}

export function BrandLogo({
  className,
  variant = "default",
  layout = "horizontal",
  size = "md",
  showTagline = false,
  href = "/",
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isMonochrome = variant === "monochrome";

  // Size mapping for the SVG Symbol
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  // Typography sizing
  const titleSizes = {
    sm: "text-base tracking-tight",
    md: "text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] tracking-wider",
    lg: "text-xs tracking-wider",
  };

  // Inline SVG Logo Mark for instant rendering, zero distortion and full scalability
  const LogoSymbol = (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center transition-transform duration-200",
        iconSizes[size]
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMonochrome ? (
          <>
            <path
              d="M 11 29 C 11 36.8 17.2 43 25 43 C 33.2 43 39.5 36.5 39.5 28 C 39.5 21.8 35.8 16.2 31.5 11.5"
              stroke={isLight ? "#FFFFFF" : "#172B45"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="30 8"
            />
            <path
              d="M 24 5 C 24 5 13 18.5 13 28 C 13 34.6 17.9 40 24 40 C 30.1 40 35 34.6 35 28 C 35 18.5 24 5 24 5 Z"
              fill={isLight ? "#FFFFFF" : "#172B45"}
            />
            <path
              d="M 21 21.5 L 24 19 L 26.5 19 L 26.5 33 L 29 33 L 29 35.5 L 19 35.5 L 19 33 L 21.5 33 L 21.5 22 Z"
              fill={isLight ? "#123B66" : "#FFFFFF"}
            />
          </>
        ) : (
          <>
            {/* Aqua Water Purification Arc */}
            <path
              d="M 11 29 C 11 36.8 17.2 43 25 43 C 33.2 43 39.5 36.5 39.5 28 C 39.5 21.8 35.8 16.2 31.5 11.5"
              stroke="#22C7C9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="30 8"
            />
            {/* Primary Droplet */}
            <path
              d="M 24 5 C 24 5 13 18.5 13 28 C 13 34.6 17.9 40 24 40 C 30.1 40 35 34.6 35 28 C 35 18.5 24 5 24 5 Z"
              fill="url(#brandDropletGrad)"
            />
            {/* Filtered Crescent Wave */}
            <path
              d="M 15 30 C 18 34.5 22 36 24 36 C 28 36 32 33 34 28 C 34.2 32.5 31 38.5 24 38.5 C 17.5 38.5 14.2 33.5 15 30 Z"
              fill="#22C7C9"
              opacity="0.8"
            />
            {/* Clean Integrated Numeral 1 */}
            <path
              d="M 21 21.5 L 24 19 L 26.5 19 L 26.5 33 L 29 33 L 29 35.5 L 19 35.5 L 19 33 L 21.5 33 L 21.5 22 Z"
              fill="#FFFFFF"
            />
            <defs>
              <linearGradient
                id="brandDropletGrad"
                x1="16"
                y1="6"
                x2="33"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1688D4" />
                <stop offset="1" stopColor="#123B66" />
              </linearGradient>
            </defs>
          </>
        )}
      </svg>
    </div>
  );

  // Exact Wordmark
  const Wordmark = (
    <div
      className={cn(
        "flex flex-col",
        layout === "vertical" ? "items-center text-center mt-2" : "text-left"
      )}
    >
      <div className={cn("font-black leading-none", titleSizes[size])}>
        <span
          className={cn(
            isMonochrome
              ? isLight
                ? "text-white"
                : "text-brand-text"
              : isLight
              ? "text-white"
              : "text-brand-navy"
          )}
        >
          No.1{" "}
        </span>
        <span
          className={cn(
            isMonochrome
              ? isLight
                ? "text-white"
                : "text-brand-text"
              : isLight
              ? "text-brand-aqua"
              : "text-brand-blue"
          )}
        >
          RO{" "}
        </span>
        <span
          className={cn(
            isMonochrome
              ? isLight
                ? "text-white"
                : "text-brand-text"
              : isLight
              ? "text-white"
              : "text-brand-text"
          )}
        >
          Service
        </span>
      </div>

      {showTagline && (
        <span
          className={cn(
            "font-semibold uppercase tracking-wider mt-1 select-none",
            taglineSizes[size],
            isLight ? "text-brand-border opacity-90" : "text-brand-muted"
          )}
        >
          Your Trusted Partner for Pure Water
        </span>
      )}
    </div>
  );

  const containerClasses = cn(
    "inline-flex focus:outline-none transition-opacity hover:opacity-95 select-none",
    layout === "vertical"
      ? "flex-col items-center justify-center gap-1"
      : "items-center gap-3",
    className
  );

  if (!href) {
    return (
      <div className={containerClasses} aria-label="No.1 RO Service">
        {LogoSymbol}
        {layout !== "icon" && Wordmark}
      </div>
    );
  }

  return (
    <Link href={href} className={containerClasses} aria-label="No.1 RO Service Home">
      {LogoSymbol}
      {layout !== "icon" && Wordmark}
    </Link>
  );
}
