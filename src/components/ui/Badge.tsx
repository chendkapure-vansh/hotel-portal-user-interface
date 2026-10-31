import React from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant =
  | "lime"
  | "lime-solid"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "outline"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: "sm" | "md"
  dot?: boolean
}

/**
 * Visual status pill used for bookings, membership tiers and room availability
 */
export function Badge({
  className,
  variant = "lime",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    lime: "bg-[#F0F8D2] text-[#3D5608] dark:bg-[#C0E72B]/20 dark:text-[#D5FA55]",
    "lime-solid": "bg-[#C0E72B] text-[#1E3A1E] font-semibold dark:bg-[#C0E72B] dark:text-[#142614]",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    danger: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    outline: "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
  }

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] rounded-md gap-1",
    md: "px-2.5 py-1 text-xs rounded-lg gap-1.5",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium select-none tracking-tight leading-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "danger"
              ? "bg-rose-500"
              : variant === "warning"
              ? "bg-amber-500"
              : "bg-[#719808]"
          )}
        />
      )}
      {children}
    </span>
  )
}
