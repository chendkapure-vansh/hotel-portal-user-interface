import { useEffect, useState } from "react"
import {
  CalendarCheck,
  BedDouble,
  TrendingUp,
  UserCheck,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Card } from "@/components/ui/Card"
import { formatCurrency } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  changePercentage: number
  isPositiveChange: boolean
  iconName: string
}

/**
 * Animated statistic metric card with count-up animation on load and hover lift
 */
export function StatCard({
  title,
  value,
  prefix = "",
  suffix = "",
  changePercentage,
  isPositiveChange,
  iconName,
}: StatCardProps) {
  const [animatedCount, setAnimatedCount] = useState<number>(0)

  // Subtle count-up animation on initial render
  useEffect(() => {
    let startTimestamp: number | null = null
    const duration = 1000 // 1 second total duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      // Ease out quad for smooth deceleration
      const easeProgress = 1 - (1 - progress) * (1 - progress)
      setAnimatedCount(Math.floor(easeProgress * value))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    const animId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animId)
  }, [value])

  // Resolve icon component dynamically
  const renderIcon = () => {
    switch (iconName) {
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5" />
      case "BedDouble":
        return <BedDouble className="w-5 h-5" />
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />
      case "UserCheck":
        return <UserCheck className="w-5 h-5" />
      default:
        return <CalendarCheck className="w-5 h-5" />
    }
  }

  // Format displayed number string
  const formattedDisplay =
    prefix === "$"
      ? formatCurrency(animatedCount)
      : `${prefix}${animatedCount.toLocaleString()}${suffix}`

  return (
    <Card enableHoverEffect className="p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {title}
        </span>
        <div className="w-10 h-10 rounded-xl bg-[#F0F8D2] dark:bg-[#C0E72B]/15 flex items-center justify-center text-[#587B08] dark:text-[#C0E72B]">
          {renderIcon()}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {formattedDisplay}
        </div>

        <div className="flex items-center gap-1.5 mt-2 text-xs">
          <span
            className={`inline-flex items-center font-bold ${
              isPositiveChange ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"
            }`}
          >
            {isPositiveChange ? (
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
            )}
            {Math.abs(changePercentage)}%
          </span>
          <span className="text-slate-400 text-[11px]">vs last month</span>
        </div>
      </div>
    </Card>
  )
}
