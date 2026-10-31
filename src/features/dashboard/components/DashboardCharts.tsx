import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { Card } from "@/components/ui/Card"
import { REVENUE_CHART_DATA, OCCUPANCY_CHART_DATA } from "@/data/mockData"
import { formatCurrency } from "@/lib/utils"

/**
 * Interactive charts displaying Revenue trends and Occupancy rates
 */
export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
      {/* Revenue Area Chart - Spans 2 columns on desktop */}
      <Card className="p-5 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Revenue Analytics
            </h3>
            <p className="text-xs text-slate-400">
              Monthly revenue progression and booking growth
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C0E72B]" />
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Gross Revenue
            </span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={REVENUE_CHART_DATA}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C0E72B" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#C0E72B" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
              <XAxis
                dataKey="month"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 text-xs">
                        <div className="font-semibold text-slate-500">
                          {payload[0].payload.month}
                        </div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                          {formatCurrency(payload[0].value as number)}
                        </div>
                        <div className="text-[11px] text-[#638707] dark:text-[#C0E72B] mt-0.5">
                          {payload[0].payload.bookings} bookings recorded
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#9ECA14"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#revenueGradient)"
                isAnimationActive={true}
                animationDuration={1200}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Occupancy Weekly Bar Chart - Spans 1 column */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Weekly Occupancy
            </h3>
            <p className="text-xs text-slate-400">Peak on Friday & Saturday</p>
          </div>
          <span className="text-xs font-bold text-[#557808] dark:text-[#C0E72B] bg-[#F0F8D2] dark:bg-[#C0E72B]/20 px-2 py-1 rounded-md">
            Avg: 83%
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={OCCUPANCY_CHART_DATA}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
              <XAxis
                dataKey="day"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `${val}%`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-100">
                          {payload[0].payload.day}: {payload[0].value}% Occupancy
                        </span>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="rate"
                fill="#C0E72B"
                radius={[6, 6, 0, 0]}
                isAnimationActive={true}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
