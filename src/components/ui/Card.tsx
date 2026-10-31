import { forwardRef } from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLMotionProps<"div"> {
  enableHoverEffect?: boolean
}

/**
 * Clean 12px rounded card container with soft shadow and dark mode support
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, enableHoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          enableHoverEffect
            ? { y: -3, transition: { duration: 0.25, ease: "easeOut" } }
            : undefined
        }
        className={cn(
          "bg-white dark:bg-[#151B26] border border-slate-100 dark:border-slate-800/80 rounded-xl shadow-sm overflow-hidden transition-shadow",
          enableHoverEffect && "hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"
