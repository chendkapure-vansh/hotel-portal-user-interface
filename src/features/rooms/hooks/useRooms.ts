import { useState, useMemo } from "react"
import { toast } from "sonner"
import { Room } from "@/types"
import { MOCK_ROOMS } from "@/data/mockData"
import { ROOM_STATUS } from "@/constants"

/**
 * Custom hook to filter and update hotel rooms
 */
export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS)
  const [filterType, setFilterType] = useState<string>("All")
  const [filterStatus, setFilterStatus] = useState<string>("All")

  // Filter rooms according to type and availability status
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesType =
        filterType === "All" || room.type.toLowerCase().includes(filterType.toLowerCase())

      const matchesStatus =
        filterStatus === "All" || room.status.toLowerCase() === filterStatus.toLowerCase()

      return matchesType && matchesStatus
    })
  }, [rooms, filterType, filterStatus])

  /**
   * Toggles room between Available and Occupied
   */
  const toggleRoomStatus = (roomId: string) => {
    setRooms((prev) =>
      prev.map((room) => {
        if (room.id !== roomId) return room
        const newStatus =
          room.status === ROOM_STATUS.AVAILABLE
            ? ROOM_STATUS.OCCUPIED
            : ROOM_STATUS.AVAILABLE
        toast.success(`Room ${room.roomNumber} marked as ${newStatus}`)
        return { ...room, status: newStatus }
      })
    )
  }

  return {
    rooms: filteredRooms,
    totalRooms: rooms.length,
    filterType,
    setFilterType,
    filterStatus,
    setFilterStatus,
    toggleRoomStatus,
  }
}
