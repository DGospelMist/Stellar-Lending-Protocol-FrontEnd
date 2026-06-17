/**
 * DepositForm — form for depositing an asset into the lending pool.
 *
 * Flow:
 * 1. User selects asset and enters amount
 * 2. On submit: call buildDeposit() → get XDR → pass to signAndSubmit()
 * 3. Show tx status (signing → pending → success/error)
 *
 * ## TODO (contributor — SLP-UI-001)
 * Implement the submit handler:
 * 1. Import buildDeposit from lib/contracts/lendingPool
 * 2. Import useWallet from lib/hooks/useWallet
 * 3. On form submit:
 *    a. Call buildDeposit(publicKey, selectedAsset, parsedAmount)
 *    b. Pass returned XDR to signAndSubmit()
 *    c. Update txState throughout (signing → pending → success/error)
 * 4. Disable the form while a tx is in flight
 *
 * Acceptance criteria (SLP-UI-001):
 * - [ ] Submitting the form triggers a wallet signing prompt
 * - [ ] Success state shows the transaction hash with a link to Stellar Expert
 * - [ ] Error state shows the error message clearly
 * - [ ] Amount input validates: must be > 0 and <= user's token balance
 */

"use client";

import { useState } from "react";
import { TxState } from "@/types";

export default function DepositForm() {
  const [asset, setAsset] = useState("");
  const [amount, setAmount] = useState("");
  const [tx, setTx] = useState<TxState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTx({ status: "signing" });
    try {
      // TODO (SLP-UI-001):
      // const xdr = await buildDeposit(publicKey, asset, BigInt(amount));
      // setTx({ status: "pending" });
      // const hash = await signAndSubmit(xdr);
      // setTx({ status: "success", hash });
      throw new Error("deposit not yet implemented — see SLP-UI-001");
    } catch (err: any) {
      setTx({ status: "error", error: err.message });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="block text-sm text-gray-400 mb-1">Asset</label>
        <input
          type="text"
          placeholder="Asset contract address"
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
        />
        {/* TODO (SLP-UI-003): replace text input with asset selector dropdown
            populated from useReserves() */}
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Amount</label>
        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm"
        />
        {/* TODO (SLP-UI-003): show user's current balance next to this field */}
      </div>

      <button
        type="submit"
        disabled={tx.status === "signing" || tx.status === "pending"}
        className="px-4 py-2 rounded-lg bg-stellar-purple text-white font-medium text-sm disabled:opacity-50"
      >
        {tx.status === "signing" ? "Waiting for signature…" :
         tx.status === "pending" ? "Submitting…" : "Deposit"}
      </button>

      {tx.status === "success" && (
        <p className="text-green-400 text-sm">
          ✓ Deposited!{" "}
          <a
            href={`https://stellar.expert/explorer/testnet/tx/${tx.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View transaction
          </a>
        </p>
      )}
      {tx.status === "error" && (
        <p className="text-red-400 text-sm">✗ {tx.error}</p>
      )}
    </form>
  );
}
