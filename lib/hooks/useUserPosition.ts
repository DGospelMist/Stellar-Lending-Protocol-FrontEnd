/**
 * useUserPosition — fetches the connected user's account summary and
 * per-reserve positions.
 *
 * ## TODO (contributor — SLP-UI-003)
 * Replace stubs with getUserAccountData() and getUserReserveData() calls
 * from lib/contracts/dataProvider.ts.
 */

"use client";

import { useState, useEffect } from "react";
import { UserAccountData, UserReserveData } from "@/types";

export function useUserPosition(publicKey: string | null) {
  const [accountData, setAccountData] = useState<UserAccountData | null>(null);
  const [positions, setPositions] = useState<UserReserveData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!publicKey) {
      setAccountData(null);
      setPositions([]);
      return;
    }
    setLoading(true);
    // TODO (SLP-UI-003):
    // Promise.all([getUserAccountData(publicKey), getAllUserReserves(publicKey)])
    //   .then(([account, pos]) => { setAccountData(account); setPositions(pos); })
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));
    setLoading(false);
  }, [publicKey]);

  return { accountData, positions, loading, error };
}
