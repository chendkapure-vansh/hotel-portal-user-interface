import { Plus, Filter } from "lucide-react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { PageHeader } from "@/components/common/PageHeader"
import { Button } from "@/components/ui/Button"
import { EmptyState } from "@/components/common/EmptyState"
import { RoomCard } from "@/features/rooms/components/RoomCard"
import { useRooms } from "@/features/rooms/hooks/useRooms"

/**
 * Rooms Page displaying catalog grid of rooms with filters
 */
export function RoomsPage() {
  const {
    rooms,
    filterType,
    setFilterType,
    filterStatus,
    setFilterStatus,
    toggleRoomStatus,
  } = useRooms()

  const typeOptions = ["All", "Deluxe", "Suite", "Superior", "Villa"]
  const statusOptions = ["All", "Available", "Occupied"]

  return (
    <DashboardLayout breadcrumbTitle="Rooms & Suites" breadcrumbCategory="Inventory">
      <PageHeader
        title="Rooms Catalog"
        subtitle="Explore rooms, monitor real-time occupancy, and adjust availability."
        action={
          <Button size="sm" leftIcon={<Plus className="w-3.5 h-3.5" />}>
            Add New Room
          </Button>
        }
      />

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Room Type Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {typeOptions.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilterType(type)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap min-h-[38px] ${
                filterType === type
                  ? "bg-[#C0E72B] text-[#1E3A1E] font-bold shadow-sm"
                  : "bg-white dark:bg-[#151B26] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Status Toggle buttons */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
            {statusOptions.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  filterStatus === status
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rooms Grid or Empty State */}
      {rooms.length === 0 ? (
        <EmptyState
          title="No rooms match your filter"
          description="Try selecting a different room type or clearing your status filters."
          actionLabel="Show All Rooms"
          onAction={() => {
            setFilterType("All")
            setFilterStatus("All")
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onToggleStatus={toggleRoomStatus}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  )
}
