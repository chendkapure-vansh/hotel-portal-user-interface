import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  containerClassName?: string
}

/**
 * Clean text input with label, icon support and validation error message
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      leftIcon,
      rightIcon,
      containerClassName,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined)

    return (
      <div className={cn("w-full flex flex-col gap-1.5 text-left", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            type={type}
            className={cn(
              "w-full h-11 px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#C0E72B] focus:border-transparent min-h-[44px]",
              error
                ? "border-rose-400 focus:ring-rose-400"
                : "border-slate-200 dark:border-slate-800",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 flex items-center text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <span className="text-xs text-rose-500 font-medium animate-fade-in">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
