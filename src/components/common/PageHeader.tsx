import React from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

/**
 * Standard page title header with optional subtitle and action button
 */
export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="flex items-center gap-2.5">{action}</div>}
    </div>
  )
}
