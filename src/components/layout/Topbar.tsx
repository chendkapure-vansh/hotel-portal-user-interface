import { Search, Bell, Moon, Sun, LogOut } from "lucide-react"
import { useDarkMode } from "@/hooks/useDarkMode"
import { useAuth } from "@/features/auth/hooks/useAuth"

interface TopbarProps {
  breadcrumbTitle?: string
  breadcrumbCategory?: string
}

/**
 * Top header bar with search, notification bell, dark mode toggle and user profile
 */
export function Topbar({
  breadcrumbTitle = "Dashboard",
  breadcrumbCategory = "Overview",
}: TopbarProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { currentUser, handleLogout } = useAuth()

  return (
    <header className="h-20 bg-white dark:bg-[#151B26] border-b border-slate-100 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30 transition-colors">
      {/* Left: Breadcrumbs matching Reference Image 2 */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          {breadcrumbTitle}
        </h2>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
          <span>Portal</span>
          <span>/</span>
          <span className="text-[#658709] dark:text-[#C0E72B] font-medium">
            {breadcrumbCategory}
          </span>
        </div>
      </div>

      {/* Right controls: Search, Theme Toggle, Notification Bell, User Avatar */}
      <div className="flex items-center gap-4">
        {/* Search input (hidden on mobile, visible on tablet & desktop) */}
        <div className="relative hidden md:block w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search booking, guest..."
            className="w-full h-10 pl-9 pr-4 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0E72B] text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all"
          />
        </div>

        {/* Dark mode switch */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle theme"
          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-[#C0E72B]" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Notifications */}
        <button
          aria-label="View notifications"
          className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        {/* User Profile Pill matching Reference Image 2 top right */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
          <img
            src={
              currentUser?.avatarUrl ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            }
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#C0E72B]/50"
          />
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
              {currentUser?.name || "Vansh Admin"}
            </div>
            <div className="text-[11px] text-slate-400 font-medium capitalize">
              {currentUser?.role || "Hotel Admin"}
            </div>
          </div>

          {/* Quick Sign Out icon */}
          <button
            onClick={handleLogout}
            title="Sign out"
            aria-label="Sign out"
            className="p-2 text-slate-400 hover:text-rose-500 transition-colors min-h-[44px] flex items-center justify-center"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
