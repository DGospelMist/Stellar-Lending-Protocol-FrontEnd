/**
 * Borrow page.
 *
 * ## TODO (contributor — SLP-UI-002)
 * Implement BorrowForm — same pattern as DepositForm but calls buildBorrow().
 * Must show:
 * - Available liquidity for the selected asset
 * - User's current health factor and how it changes with the new borrow
 * - Rate mode selector (Stable vs Variable) with current rates for each
 *
 * Depends on SLP-UI-001 (deposit/withdraw) and SLP-UI-003 (data provider).
 */

export default function BorrowPage() {
  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-3xl font-bold text-white">Borrow</h1>
        <p className="text-gray-400 mt-1">
          Borrow against your deposited collateral. Choose between stable and
          variable interest rates.
        </p>
      </div>
      <div className="rounded-xl border border-dashed border-gray-600 p-8 text-center text-gray-500">
        <p className="font-medium">BorrowForm — not yet implemented</p>
        <p className="text-sm mt-1">See issue SLP-UI-002</p>
      </div>
    </div>
  );
}
