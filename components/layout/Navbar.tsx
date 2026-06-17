/**
 * Navbar — top navigation bar.
 *
 * Shows the protocol logo, nav links, and wallet connect button.
 *
 * ## TODO (contributor — SLP-UI-004)
 * Wire up the WalletButton component once useWallet is implemented.
 * Currently renders a disabled placeholder.
 */

import Link from "next/link";
import WalletButton from "@/components/wallet/WalletButton";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-stellar-blue">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          Stellar Lending
        </Link>
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/deposit" className="hover:text-white transition-colors">Deposit</Link>
          <Link href="/borrow" className="hover:text-white transition-colors">Borrow</Link>
        </div>
      </div>
      <WalletButton />
    </nav>
  );
}
