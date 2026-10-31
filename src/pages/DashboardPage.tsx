import { motion, type Variants } from "framer-motion"
import { Plus, Download } from "lucide-react"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { PageHeader } from "@/components/common/PageHeader"
import { StatCard } from "@/components/common/StatCard"
import { Button } from "@/components/ui/Button"
import { DashboardCharts } from "@/features/dashboard/components/DashboardCharts"
import { RecentBookingsTable } from "@/features/dashboard/components/RecentBookingsTable"
import { DASHBOARD_METRICS } from "@/data/mockData"

/**
 * Dashboard Home Page with real-time stats, revenue charts, and recent reservations
 */
export function DashboardPage() {
  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }

  return (
    <DashboardLayout breadcrumbTitle="Dashboard" breadcrumbCategory="Hotel Analytics">
      {/* Top Header with quick actions */}
      <PageHeader
        title="Welcome back, Vansh"
        subtitle="Here is what is happening at Vansh Grand today."
        action={
          <>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="w-3.5 h-3.5" />}
            >
              Export Report
            </Button>
            <Button
              size="sm"
              leftIcon={<Plus className="w-3.5 h-3.5" />}
            >
              New Reservation
            </Button>
          </>
        }
      />

      {/* 4 Stat Cards with staggered fade-in animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {DASHBOARD_METRICS.map((metric) => (
          <motion.div key={metric.id} variants={itemVariants}>
            <StatCard
              title={metric.title}
              value={metric.value as number}
              prefix={metric.prefix}
              suffix={metric.suffix}
              changePercentage={metric.changePercentage}
              isPositiveChange={metric.isPositiveChange}
              iconName={metric.iconName}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Analytics Charts */}
      <DashboardCharts />

      {/* Recent Reservations Table */}
      <RecentBookingsTable />
    </DashboardLayout>
  )
}
