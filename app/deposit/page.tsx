/**
 * Deposit page.
 *
 * ## TODO (contributor — SLP-UI-001)
 * DepositForm handles the transaction logic — see that component.
 * This page should also show the user's current balance for the selected
 * asset once SLP-UI-003 (data provider) is implemented.
 */

import DepositForm from "@/components/shared/DepositForm";

export default function DepositPage() {
  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-3xl font-bold text-white">Deposit</h1>
        <p className="text-gray-400 mt-1">
          Supply assets to earn interest. You will receive sTokens representing
          your deposit plus accrued interest.
        </p>
      </div>
      <DepositForm />
    </div>
  );
}
