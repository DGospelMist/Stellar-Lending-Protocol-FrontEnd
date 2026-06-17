/**
 * LendingPoolDataProvider contract client — read-only queries.
 *
 * These functions read protocol state: reserve data, user positions,
 * health factors. They simulate (never submit) transactions, so no
 * wallet signing is needed.
 *
 * ## TODO (contributor — SLP-UI-003)
 * Implement each function using rpc.simulateTransaction() and parse
 * the returned ScVal into the TypeScript types defined in types/index.ts.
 *
 * Parsing ScVal → TypeScript:
 * - Use `scValToNative()` from @stellar/stellar-sdk for simple types
 * - For structs, destructure the ScMap fields by name
 *
 * Acceptance criteria (SLP-UI-003):
 * - [ ] getReserveData() returns a populated ReserveData object
 * - [ ] getUserAccountData() returns a populated UserAccountData object
 * - [ ] Both functions throw a descriptive error when the contract call fails
 */

import { Contract } from "@stellar/stellar-sdk";
import { rpc, CONTRACT_ADDRESSES } from "@/lib/config";
import { ReserveData, UserAccountData, UserReserveData } from "@/types";

const contract = new Contract(CONTRACT_ADDRESSES.lendingPool);

/**
 * Fetch aggregate data for a single reserve (rates, liquidity, config).
 * Called by the Markets page to populate the reserve table.
 *
 * TODO (SLP-UI-003): simulate contract.call("get_reserve_data", assetScVal)
 * and parse the returned ReserveData ScMap.
 */
export async function getReserveData(_asset: string): Promise<ReserveData> {
  throw new Error("getReserveData not yet implemented — see SLP-UI-003");
}

/**
 * Fetch all reserves. Calls getReserveData for each known asset.
 *
 * TODO (SLP-UI-003): implement after getReserveData works.
 * Consider batching with Promise.all for performance.
 */
export async function getAllReserves(): Promise<ReserveData[]> {
  throw new Error("getAllReserves not yet implemented — see SLP-UI-003");
}

/**
 * Fetch a user's aggregated account summary (health factor, total collateral, etc).
 * Called by the Dashboard and position components.
 *
 * TODO (SLP-UI-003): simulate contract.call("get_user_account_data", userScVal)
 */
export async function getUserAccountData(_user: string): Promise<UserAccountData> {
  throw new Error("getUserAccountData not yet implemented — see SLP-UI-003");
}

/**
 * Fetch a user's position in a specific reserve.
 *
 * TODO (SLP-UI-003): simulate contract.call("get_user_reserve_data", userScVal, assetScVal)
 */
export async function getUserReserveData(
  _user: string,
  _asset: string
): Promise<UserReserveData> {
  throw new Error("getUserReserveData not yet implemented — see SLP-UI-003");
}
