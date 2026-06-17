/**
 * HealthFactorBadge — displays a user's health factor with colour coding.
 *
 * Green  → hf >= 2.0 (safe)
 * Yellow → 1.0 <= hf < 2.0 (at risk)
 * Red    → hf < 1.0 (liquidatable)
 *
 * ## TODO (contributor — SLP-UI-003)
 * Replace the placeholder with real data:
 * 1. Accept healthFactor: bigint as a prop
 * 2. Use formatHealthFactor() and isUnhealthy() from lib/utils/format
 * 3. Apply the correct colour class based on the value
 */

export default function HealthFactorBadge() {
  // TODO (SLP-UI-003): accept { healthFactor: bigint } prop and render real value

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700 text-gray-400 text-sm">
      <span className="w-2 h-2 rounded-full bg-gray-500" />
      <span>— </span>
      <span className="text-xs text-gray-500">Health Factor (SLP-UI-003)</span>
    </div>
  );
}
