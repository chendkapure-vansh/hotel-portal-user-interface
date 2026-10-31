import { Check, Clock, X } from "lucide-react"
import { Badge, BadgeVariant } from "@/components/ui/Badge"
import { BOOKING_STATUS, ROOM_STATUS, BookingStatusType, RoomStatusType } from "@/constants"

interface StatusBadgeProps {
  status: BookingStatusType | RoomStatusType | string
  size?: "sm" | "md"
}

/**
 * Standardized status badge with contextual icon and color
 */
export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  // Determine variant and icon based on status
  let variant: BadgeVariant = "neutral"
  let icon: React.ReactNode = null

  if (status === BOOKING_STATUS.CONFIRMED || status === ROOM_STATUS.AVAILABLE) {
    variant = "lime"
    icon = <Check className="w-3.5 h-3.5 stroke-[2.5]" />
  } else if (status === BOOKING_STATUS.PENDING) {
    variant = "warning"
    icon = <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
  } else if (status === BOOKING_STATUS.CANCELLED || status === ROOM_STATUS.OCCUPIED) {
    variant = status === ROOM_STATUS.OCCUPIED ? "neutral" : "danger"
    icon = status === BOOKING_STATUS.CANCELLED ? <X className="w-3.5 h-3.5 stroke-[2.5]" /> : null
  }

  return (
    <Badge variant={variant} size={size}>
      {icon}
      <span>{status}</span>
    </Badge>
  )
}
