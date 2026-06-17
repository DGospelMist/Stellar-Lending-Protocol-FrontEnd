/**
 * Repay page.
 *
 * ## TODO (contributor — SLP-UI-002)
 * Implement RepayForm — calls buildRepay() from lib/contracts/lendingPool.
 * Must show:
 * - User's current outstanding debt (principal + accrued interest + origination fee)
 * - "Repay all" shortcut that passes i128::MAX to the contract
 * - Updated health factor preview after repayment
 *
 * Depends on SLP-UI-001 and SLP-UI-003.
 */

export default function RepayPage() {
  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-3xl font-bold text-white">Repay</h1>
        <p className="text-gray-400 mt-1">
          Repay your outstanding debt. Partial repayments are supported.
        </p>
      </div>
      <div className="rounded-xl border border-dashed border-gray-600 p-8 text-center text-gray-500">
        <p className="font-medium">RepayForm — not yet implemented</p>
        <p className="text-sm mt-1">See issue SLP-UI-002</p>
      </div>
    </div>
  );
}
