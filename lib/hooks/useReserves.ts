/**
 * useReserves — fetches and caches all reserve data from the protocol.
 *
 * ## TODO (contributor — SLP-UI-003)
 * Replace the stub below with a real call to getAllReserves() from
 * lib/contracts/dataProvider.ts once that is implemented.
 *
 * Consider adding a polling interval (e.g. every 10s) so rates stay fresh.
 */

"use client";

import { useState, useEffect } from "react";
import { ReserveData } from "@/types";

export function useReserves() {
  const [reserves, setReserves] = useState<ReserveData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    // TODO (SLP-UI-003): replace with getAllReserves()
    // getAllReserves()
    //   .then(setReserves)
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));

    // Stub: return empty until implemented
    setLoading(false);
  }, []);

  return { reserves, loading, error };
}
