/**
 * Soroban RPC client configuration.
 *
 * Reads contract addresses and network settings from environment variables.
 * Set these in .env.local — see .env.example.
 */

import { SorobanRpc, Networks } from "@stellar/stellar-sdk";

export const RPC_URL =
  process.env.NEXT_PUBLIC_SOROBAN_RPC_URL ?? "https://soroban-testnet.stellar.org";

export const NETWORK_PASSPHRASE =
  process.env.NEXT_PUBLIC_STELLAR_NETWORK === "mainnet"
    ? Networks.PUBLIC
    : Networks.TESTNET;

export const CONTRACT_ADDRESSES = {
  lendingPool: process.env.NEXT_PUBLIC_LENDING_POOL_ADDRESS ?? "",
  lendingPoolCore: process.env.NEXT_PUBLIC_LENDING_POOL_CORE_ADDRESS ?? "",
  priceOracle: process.env.NEXT_PUBLIC_PRICE_ORACLE_ADDRESS ?? "",
  addressesProvider: process.env.NEXT_PUBLIC_ADDRESSES_PROVIDER_ADDRESS ?? "",
} as const;

/** Shared RPC server instance. */
export const rpc = new SorobanRpc.Server(RPC_URL, { allowHttp: true });
