import React from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { BottomNav } from "./BottomNav"

interface DashboardLayoutProps {
  children: React.ReactNode
  breadcrumbTitle?: string
  breadcrumbCategory?: string
}

/**
 * Shared layout for inner authenticated dashboard screens:
 * Desktop includes persistent left sidebar; Mobile swaps to bottom navigation.
 */
export function DashboardLayout({
  children,
  breadcrumbTitle = "Dashboard",
  breadcrumbCategory = "Overview",
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F4F6F8] dark:bg-[#0A0E14] flex text-slate-900 dark:text-slate-100 antialiased selection:bg-[#C0E72B] selection:text-[#1E3A1E] transition-colors">
      {/* Desktop Persistent Left Sidebar (hidden on mobile & tablet < 768px) */}
      <Sidebar className="hidden md:flex flex-shrink-0 min-h-screen sticky top-0" />

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-8">
        <Topbar
          breadcrumbTitle={breadcrumbTitle}
          breadcrumbCategory={breadcrumbCategory}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav />
    </div>
  )
}
