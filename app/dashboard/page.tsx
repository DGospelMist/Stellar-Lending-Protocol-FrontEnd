/**
 * Dashboard page — user's portfolio overview.
 *
 * Shows:
 * - Total collateral (USD)
 * - Total debt (USD)
 * - Available to borrow (USD)
 * - Health factor
 * - Per-reserve deposit and borrow positions
 *
 * ## TODO (contributor — SLP-UI-003)
 * Replace placeholder cards with real data from useUserPosition().
 * Requires wallet to be connected — redirect to home if not connected.
 */

import HealthFactorBadge from "@/components/position/HealthFactorBadge";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <HealthFactorBadge />
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Collateral", value: "—", note: "SLP-UI-003" },
          { label: "Total Debt", value: "—", note: "SLP-UI-003" },
          { label: "Available to Borrow", value: "—", note: "SLP-UI-003" },
        ].map(({ label, value, note }) => (
          <div key={label} className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            <p className="text-xs text-gray-600 mt-1">{note}</p>
          </div>
        ))}
      </div>

      {/* Positions table */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Your Positions</h2>
        <div className="rounded-xl border border-gray-700 p-6 text-center text-gray-500 text-sm">
          {/* TODO (SLP-UI-003): render per-reserve positions from useUserPosition() */}
          Connect wallet and implement SLP-UI-003 to see your positions.
        </div>
      </div>
    </div>
  );
}
