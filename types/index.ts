/**
 * Shared TypeScript types for the Stellar Lending Protocol UI.
 *
 * These mirror the on-chain data structures defined in CoreLibrary
 * (contracts/libraries/CoreLibrary/src/lib.rs). Keep in sync when
 * the contract structs change.
 */

// ── Reserve ───────────────────────────────────────────────────────────────────

/**
 * Aggregate state of a single lending reserve.
 * Returned by LendingPoolDataProvider::get_reserve_data().
 */
export interface ReserveData {
  asset: string;           // Stellar asset contract address
  symbol: string;          // e.g. "USDC", "XLM"
  decimals: number;        // e.g. 7 for XLM, 6 for USDC

  totalLiquidity: bigint;         // total deposited (available + borrowed)
  totalVariableBorrows: bigint;
  totalStableBorrows: bigint;

  liquidityIndex: bigint;         // RAY — cumulative depositor index
  variableBorrowIndex: bigint;    // RAY — cumulative variable borrow index

  currentLiquidityRate: bigint;   // RAY — current deposit APY
  currentVariableBorrowRate: bigint;
  currentStableBorrowRate: bigint;

  ltvBps: number;                 // e.g. 7500 = 75%
  liquidationThresholdBps: number;
  liquidationBonusBps: number;

  borrowingEnabled: boolean;
  stableRateBorrowingEnabled: boolean;
  usageAsCollateralEnabled: boolean;
  isActive: boolean;
  isFrozen: boolean;
}

// ── User position ─────────────────────────────────────────────────────────────

/**
 * A user's position in a single reserve.
 * Returned by LendingPoolDataProvider::get_user_reserve_data().
 */
export interface UserReserveData {
  asset: string;
  principalBorrowBalance: bigint;
  currentBorrowBalance: bigint;   // principal + accrued interest
  borrowRate: bigint;             // RAY
  borrowRateMode: RateMode;
  originationFee: bigint;
  liquidityIndexSnapshot: bigint; // RAY — at time of last deposit
  useAsCollateral: boolean;
}

/**
 * Aggregated account summary across all reserves.
 * Returned by LendingPoolDataProvider::get_user_account_data().
 */
export interface UserAccountData {
  totalCollateralUsd: bigint;     // 7 decimals
  totalDebtUsd: bigint;
  availableBorrowsUsd: bigint;
  currentLiquidationThreshold: bigint; // RAY weighted average
  ltv: bigint;                    // RAY weighted average
  healthFactor: bigint;           // RAY — healthy when >= 1 RAY
}

// ── Enums ─────────────────────────────────────────────────────────────────────

export enum RateMode {
  None = 0,
  Stable = 1,
  Variable = 2,
}

// ── Transaction ───────────────────────────────────────────────────────────────

export type TxStatus = "idle" | "signing" | "pending" | "success" | "error";

export interface TxState {
  status: TxStatus;
  hash?: string;
  error?: string;
}
