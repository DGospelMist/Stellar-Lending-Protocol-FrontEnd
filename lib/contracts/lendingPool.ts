/**
 * LendingPool contract client.
 *
 * Wraps the Soroban contract calls for all user-facing actions:
 * deposit, withdraw, borrow, repay, and liquidation.
 *
 * ## TODO (contributor — SLP-UI-001)
 * This file is a skeleton. Each function has the correct signature and
 * documents exactly what it needs to do, but the Soroban invocation is
 * not yet wired up.
 *
 * To implement:
 * 1. Use `@stellar/stellar-sdk` Contract + SorobanRpc to build and simulate
 *    each transaction.
 * 2. Return the assembled XDR for the wallet to sign (do NOT sign here —
 *    signing happens in the wallet layer).
 * 3. After signing, submit via `rpc.sendTransaction()` and poll
 *    `rpc.getTransaction()` until status is SUCCESS or FAILED.
 *
 * Reference: https://developers.stellar.org/docs/build/smart-contracts/getting-started/interact-with-a-contract
 *
 * Acceptance criteria (SLP-UI-001):
 * - [ ] deposit() builds a valid simulated transaction
 * - [ ] withdraw() builds a valid simulated transaction
 * - [ ] All functions return AssembledTransaction, not void
 * - [ ] Error from simulation is surfaced as a thrown Error with message
 */

import { Contract, TransactionBuilder, BASE_FEE, xdr } from "@stellar/stellar-sdk";
import { rpc, NETWORK_PASSPHRASE, CONTRACT_ADDRESSES } from "@/lib/config";
import { RateMode } from "@/types";

const contract = new Contract(CONTRACT_ADDRESSES.lendingPool);

/**
 * Build a deposit transaction.
 *
 * @param sourceAddress - The user's Stellar public key
 * @param asset         - The asset contract address to deposit
 * @param amount        - Amount in the asset's native units (e.g. stroops for XLM)
 * @returns             - Assembled XDR string ready for wallet signing
 *
 * TODO (SLP-UI-001): implement using Contract.call("deposit", ...)
 */
export async function buildDeposit(
  sourceAddress: string,
  asset: string,
  amount: bigint
): Promise<string> {
  // TODO: build and simulate transaction
  // const account = await rpc.getAccount(sourceAddress);
  // const tx = new TransactionBuilder(account, { fee: BASE_FEE, networkPassphrase: NETWORK_PASSPHRASE })
  //   .addOperation(contract.call("deposit", xdr.ScVal..., xdr.ScVal..., xdr.ScVal...))
  //   .setTimeout(30)
  //   .build();
  // const sim = await rpc.simulateTransaction(tx);
  // if (SorobanRpc.Api.isSimulationError(sim)) throw new Error(sim.error);
  // return SorobanRpc.assembleTransaction(tx, sim).build().toXDR();
  throw new Error("buildDeposit not yet implemented — see SLP-UI-001");
}

/**
 * Build a withdraw transaction.
 *
 * @param sourceAddress - The user's Stellar public key
 * @param asset         - The asset contract address to withdraw
 * @param amount        - Amount to withdraw (pass BigInt(i128::MAX) to withdraw all)
 * @returns             - Assembled XDR string ready for wallet signing
 *
 * TODO (SLP-UI-001): implement using Contract.call("withdraw", ...)
 */
export async function buildWithdraw(
  sourceAddress: string,
  asset: string,
  amount: bigint
): Promise<string> {
  throw new Error("buildWithdraw not yet implemented — see SLP-UI-001");
}

/**
 * Build a borrow transaction.
 *
 * @param sourceAddress - The user's Stellar public key
 * @param asset         - The asset to borrow
 * @param amount        - Amount to borrow
 * @param rateMode      - RateMode.Stable (1) or RateMode.Variable (2)
 * @returns             - Assembled XDR string ready for wallet signing
 *
 * TODO (SLP-UI-002): implement after deposit/withdraw are working
 */
export async function buildBorrow(
  sourceAddress: string,
  asset: string,
  amount: bigint,
  rateMode: RateMode
): Promise<string> {
  throw new Error("buildBorrow not yet implemented — see SLP-UI-002");
}

/**
 * Build a repay transaction.
 *
 * @param sourceAddress - The user's Stellar public key
 * @param asset         - The asset to repay
 * @param amount        - Amount to repay (pass BigInt(i128::MAX) to repay all)
 * @param onBehalfOf    - Address whose debt to repay (usually same as sourceAddress)
 * @returns             - Assembled XDR string ready for wallet signing
 *
 * TODO (SLP-UI-002): implement after deposit/withdraw are working
 */
export async function buildRepay(
  sourceAddress: string,
  asset: string,
  amount: bigint,
  onBehalfOf: string
): Promise<string> {
  throw new Error("buildRepay not yet implemented — see SLP-UI-002");
}
