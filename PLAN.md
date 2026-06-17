# Build Plan

This document defines the implementation order for the Stellar Lending UI.
Each phase depends on the previous one being complete. Issues are ordered so
contributors can pick them up without blocking each other.

**Legend:** ✅ done · ⚠️ partial · 🔨 open

---

## Phase 1 — Foundation ✅

Scaffolding, types, and utilities that everything else builds on.

| # | Item | Location | Status | Notes |
|---|---|---|---|---|
| 1 | Project scaffold | `app/`, `components/`, `lib/` | ✅ | Next.js 14, TypeScript, Tailwind |
| 2 | TypeScript types | `types/index.ts` | ✅ | Mirrors CoreLibrary structs |
| 3 | Format utilities | `lib/utils/format.ts` | ✅ | RAY/WAD formatters, health factor |
| 4 | RPC config | `lib/config.ts` | ✅ | Env-driven addresses + network |
| 5 | Page skeletons | `app/*/page.tsx` | ✅ | All routes render, no broken imports |
| 6 | CI | `.github/workflows/ci.yml` | ✅ | Lint + type-check on every PR |

---

## Phase 2 — Wallet Connection 🔨

Everything that submits transactions depends on this.

| # | Item | Location | Issue | Complexity |
|---|---|---|---|---|
| 7 | `useWallet` hook | `lib/hooks/useWallet.ts` | SLP-UI-004 | Medium |
| 8 | `WalletButton` component | `components/wallet/WalletButton.tsx` | SLP-UI-004 | Medium |

**SLP-UI-004 scope:**
- Initialise `StellarWalletsKit` with Freighter, xBull, Albedo
- `connect()` opens modal, stores public key
- `disconnect()` clears state
- `signAndSubmit(xdr)` → kit.signTx() → rpc.sendTransaction() → poll → return hash

**Acceptance criteria:** connect opens modal · connected state shows truncated key · signAndSubmit returns tx hash · errors surface with descriptive message.

---

## Phase 3 — Read Data (Markets + Positions) 🔨

Depends on: contract deployment (testnet addresses in `.env.local`).

| # | Item | Location | Issue | Complexity |
|---|---|---|---|---|
| 9 | `getReserveData` + `getAllReserves` | `lib/contracts/dataProvider.ts` | SLP-UI-003 | High |
| 10 | `getUserAccountData` + `getUserReserveData` | `lib/contracts/dataProvider.ts` | SLP-UI-003 | High |
| 11 | `useReserves` hook | `lib/hooks/useReserves.ts` | SLP-UI-003 | Medium |
| 12 | `useUserPosition` hook | `lib/hooks/useUserPosition.ts` | SLP-UI-003 | Medium |
| 13 | `MarketsTable` | `components/markets/MarketsTable.tsx` | SLP-UI-003 | Medium |
| 14 | `HealthFactorBadge` | `components/position/HealthFactorBadge.tsx` | SLP-UI-003 | Medium |
| 15 | Dashboard page data | `app/dashboard/page.tsx` | SLP-UI-003 | Medium |

**SLP-UI-003 scope:**
- Simulate `get_reserve_data` and `get_user_account_data` via RPC
- Parse returned `ScVal` into `ReserveData` / `UserAccountData` TypeScript types
- Wire hooks into `MarketsTable` and `HealthFactorBadge`

**Acceptance criteria:** MarketsTable renders one row per reserve · rates show as formatted percentages · frozen reserves visually indicated · health factor badge shows correct colour.

---

## Phase 4 — Deposit + Withdraw 🔨

Depends on: Phase 2 (wallet), Phase 3 (data), contract SLP-005 (SToken) deployed.

| # | Item | Location | Issue | Complexity |
|---|---|---|---|---|
| 16 | `buildDeposit` + `buildWithdraw` | `lib/contracts/lendingPool.ts` | SLP-UI-001 | High |
| 17 | `DepositForm` — wire up submit | `components/shared/DepositForm.tsx` | SLP-UI-001 | High |
| 18 | Asset selector dropdown | `components/shared/DepositForm.tsx` | SLP-UI-001 | Medium |

**SLP-UI-001 scope:**
- Build + simulate deposit/withdraw transactions using `@stellar/stellar-sdk`
- Return assembled XDR for wallet signing
- `DepositForm` calls `buildDeposit` → `signAndSubmit` → shows tx hash on success

**Acceptance criteria:** submitting form triggers wallet prompt · success shows tx hash linked to Stellar Expert · error shows message · amount validates against user balance.

---

## Phase 5 — Borrow + Repay 🔨

Depends on: Phase 4 (deposit working end-to-end).

| # | Item | Location | Issue | Complexity |
|---|---|---|---|---|
| 19 | `buildBorrow` + `buildRepay` | `lib/contracts/lendingPool.ts` | SLP-UI-002 | High |
| 20 | `BorrowForm` component | `components/shared/BorrowForm.tsx` | SLP-UI-002 | High |
| 21 | `RepayForm` component | `components/shared/RepayForm.tsx` | SLP-UI-002 | High |
| 22 | Borrow page | `app/borrow/page.tsx` | SLP-UI-002 | Medium |
| 23 | Repay page | `app/repay/page.tsx` | SLP-UI-002 | Medium |

**SLP-UI-002 scope:**
- Rate mode selector (Stable vs Variable) with current rates shown
- Health factor preview — show how the new borrow changes the user's HF
- "Repay all" shortcut passes `BigInt(i128::MAX)` to the contract
- Disable borrow button if resulting HF would be < 1.0

---

## Open Contributor Issues

| Issue | Scope | Complexity | Blocked by |
|---|---|---|---|
| **SLP-UI-004** | `useWallet` + `WalletButton` | Medium | — |
| **SLP-UI-003** | Data provider queries + MarketsTable + HealthFactorBadge | High | Contract deployed |
| **SLP-UI-001** | `buildDeposit` + `buildWithdraw` + DepositForm wiring | High | SLP-UI-004 |
| **SLP-UI-002** | `buildBorrow` + `buildRepay` + BorrowForm + RepayForm | High | SLP-UI-001 |

---

## Milestones

| Milestone | Requires | Status |
|---|---|---|
| **M0 — Scaffold live** | Phase 1 | ✅ |
| **M1 — Wallet connects** | Phase 2 | 🔨 |
| **M2 — Markets page shows live data** | Phase 3 | 🔨 |
| **M3 — Deposit/Withdraw works** | Phase 4 | 🔨 |
| **M4 — Full lending loop** | Phase 5 | 🔨 |
