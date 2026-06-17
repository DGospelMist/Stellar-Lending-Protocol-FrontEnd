/**
 * useWallet — wallet connection state and signing helper.
 *
 * Uses @creit.tech/stellar-wallets-kit to support Freighter, xBull,
 * Albedo, and other Stellar wallets via a unified interface.
 *
 * ## TODO (contributor — SLP-UI-004)
 * Implement the hook body. The interface below is the contract this hook
 * must fulfil — components depend on it.
 *
 * Steps:
 * 1. Initialise StellarWalletsKit with the supported wallets list
 * 2. `connect()` — open the wallet selection modal, store the public key
 * 3. `disconnect()` — clear stored key and kit state
 * 4. `signAndSubmit(xdr)` — call kit.signTx(), then submit via rpc.sendTransaction(),
 *    poll rpc.getTransaction() until SUCCESS or FAILED, return the tx hash
 *
 * Reference: https://github.com/Creit-Tech/Stellar-Wallets-Kit
 *
 * Acceptance criteria (SLP-UI-004):
 * - [ ] connect() opens wallet modal and stores publicKey
 * - [ ] disconnect() clears publicKey
 * - [ ] signAndSubmit() returns tx hash on success
 * - [ ] signAndSubmit() throws descriptive error on failure
 */

"use client";

import { useState, useCallback } from "react";
import { TxState } from "@/types";

export interface WalletState {
  publicKey: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signAndSubmit: (xdr: string) => Promise<string>;
}

export function useWallet(): WalletState {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    try {
      // TODO (SLP-UI-004): initialise StellarWalletsKit and open modal
      // const kit = new StellarWalletsKit({ ... });
      // await kit.openModal({ onWalletSelected: async (option) => {
      //   kit.setWallet(option.id);
      //   const { address } = await kit.getAddress();
      //   setPublicKey(address);
      // }});
      throw new Error("connect not yet implemented — see SLP-UI-004");
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setPublicKey(null);
    // TODO (SLP-UI-004): clean up kit state
  }, []);

  const signAndSubmit = useCallback(async (_xdr: string): Promise<string> => {
    if (!publicKey) throw new Error("wallet not connected");
    // TODO (SLP-UI-004): kit.signTx() → rpc.sendTransaction() → poll → return hash
    throw new Error("signAndSubmit not yet implemented — see SLP-UI-004");
  }, [publicKey]);

  return {
    publicKey,
    isConnected: publicKey !== null,
    isConnecting,
    connect,
    disconnect,
    signAndSubmit,
  };
}
