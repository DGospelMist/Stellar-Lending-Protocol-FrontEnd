/**
 * Formatting utilities for protocol values.
 *
 * RAY = 1e27, WAD = 1e18 — all on-chain rates and indexes use RAY precision.
 * Token amounts use the asset's native decimals (7 for XLM, 6 for USDC).
 */

const RAY = BigInt("1000000000000000000000000000"); // 1e27

/** Format a RAY-precision rate as a human-readable percentage. e.g. 0.05 RAY → "5.00%" */
export function formatRayAsPercent(ray: bigint): string {
  const pct = (Number(ray) / Number(RAY)) * 100;
  return `${pct.toFixed(2)}%`;
}

/** Format a token amount given its decimals. e.g. 10_000_000n, 7 → "1.0000000" */
export function formatTokenAmount(amount: bigint, decimals: number): string {
  const divisor = BigInt(10 ** decimals);
  const whole = amount / divisor;
  const frac = amount % divisor;
  return `${whole}.${frac.toString().padStart(decimals, "0")}`;
}

/**
 * Format a health factor (RAY precision).
 * Returns "∞" when there is no debt (healthFactor === BigInt max).
 * Returns the value to 2 decimal places otherwise.
 */
export function formatHealthFactor(hf: bigint): string {
  if (hf === BigInt("0x7fffffffffffffffffffffffffffffff")) return "∞";
  return (Number(hf) / Number(RAY)).toFixed(2);
}

/** Returns true when health factor is below 1 RAY (liquidatable). */
export function isUnhealthy(hf: bigint): boolean {
  return hf < RAY;
}
