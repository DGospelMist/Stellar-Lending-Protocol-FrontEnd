/**
 * MarketsTable — displays all protocol reserves with their current rates.
 *
 * Columns: Asset | Total Supplied | Supply APY | Total Borrowed | Borrow APY (Variable) | Borrow APY (Stable)
 *
 * ## TODO (contributor — SLP-UI-003)
 * Replace the empty state with real data from useReserves():
 * 1. Import useReserves from lib/hooks/useReserves
 * 2. Map reserves to table rows
 * 3. Use formatRayAsPercent() from lib/utils/format for rates
 * 4. Use formatTokenAmount() for liquidity values
 * 5. Show a loading skeleton while loading === true
 *
 * Acceptance criteria (SLP-UI-003):
 * - [ ] Table renders one row per reserve returned by getAllReserves()
 * - [ ] Supply APY and Borrow APY columns show formatted percentages
 * - [ ] Frozen reserves are visually indicated (e.g. greyed out row)
 */

export default function MarketsTable() {
  // TODO (SLP-UI-003): const { reserves, loading, error } = useReserves();

  return (
    <div className="rounded-xl border border-gray-700 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-400 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Asset</th>
            <th className="px-4 py-3">Total Supplied</th>
            <th className="px-4 py-3">Supply APY</th>
            <th className="px-4 py-3">Total Borrowed</th>
            <th className="px-4 py-3">Variable APY</th>
            <th className="px-4 py-3">Stable APY</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO (SLP-UI-003): map reserves here */}
          <tr>
            <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
              Markets data not yet available — see SLP-UI-003
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
