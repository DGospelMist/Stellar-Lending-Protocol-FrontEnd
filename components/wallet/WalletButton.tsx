/**
 * WalletButton — connect / disconnect wallet.
 *
 * Shows "Connect Wallet" when disconnected, truncated public key when connected.
 *
 * ## TODO (contributor — SLP-UI-004)
 * Replace the disabled button with a working implementation:
 * 1. Import useWallet from lib/hooks/useWallet
 * 2. Call connect() on click when disconnected
 * 3. Show a dropdown with "Disconnect" when connected
 * 4. Show a spinner while isConnecting is true
 *
 * Acceptance criteria (SLP-UI-004):
 * - [ ] Clicking "Connect Wallet" opens the wallet selection modal
 * - [ ] Connected state shows truncated public key (first 4 + last 4 chars)
 * - [ ] Disconnect clears the key and returns to disconnected state
 */

"use client";

export default function WalletButton() {
  // TODO (SLP-UI-004): const { publicKey, isConnected, isConnecting, connect, disconnect } = useWallet();

  return (
    <button
      disabled
      className="px-4 py-2 rounded-lg bg-stellar-purple text-white text-sm font-medium opacity-50 cursor-not-allowed"
      title="Wallet connection not yet implemented — see SLP-UI-004"
    >
      Connect Wallet
    </button>
  );
}
