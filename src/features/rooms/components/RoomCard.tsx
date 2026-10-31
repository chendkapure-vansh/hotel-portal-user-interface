import { Users, Maximize2, Bed, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { StatusBadge } from "@/components/common/StatusBadge"
import { Room } from "@/types"
import { formatCurrency } from "@/lib/utils"
import { ROOM_STATUS } from "@/constants"

interface RoomCardProps {
  room: Room
  onToggleStatus: (id: string) => void
}

/**
 * Single room card displaying image, specs, amenities and price
 * Follows Reference Image 2 specs block style (35m², King Bed, 2 guests)
 */
export function RoomCard({ room, onToggleStatus }: RoomCardProps) {
  const isAvailable = room.status === ROOM_STATUS.AVAILABLE

  return (
    <Card enableHoverEffect className="flex flex-col justify-between">
      <div>
        {/* Room Cover Photo with Status and Room Number badges */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={room.imageUrl}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm">
            Room {room.roomNumber}
          </div>
          <div className="absolute top-3 right-3 shadow-sm">
            <StatusBadge status={room.status} size="sm" />
          </div>
        </div>

        {/* Room Title and Floor */}
        <div className="p-5 pb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {room.name}
            </h3>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">{room.type} • Floor {room.floor}</div>

          {/* Specs Bar matching Reference Image 2 */}
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 py-3 mt-3 border-y border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{room.sizeSquareMeters} m²</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-slate-400" />
              <span>{room.bedType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{room.capacityAdults} Guests</span>
            </div>
          </div>

          {/* Amenities tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {room.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#86AA0D]" />
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Price and Quick Toggle Button */}
      <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
        <div>
          <span className="text-xl font-extrabold text-slate-900 dark:text-white">
            {formatCurrency(room.pricePerNight)}
          </span>
          <span className="text-xs text-slate-400 ml-1">/ night</span>
        </div>

        <button
          type="button"
          onClick={() => onToggleStatus(room.id)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all min-h-[38px] ${
            isAvailable
              ? "bg-[#C0E72B] hover:bg-[#B0D820] text-[#1E3A1E] shadow-sm"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
          }`}
        >
          {isAvailable ? "Book / Occupy" : "Mark Available"}
        </button>
      </div>
    </Card>
  )
}
