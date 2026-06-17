# Stellar Lending UI

Frontend for the [Stellar Lending Protocol](https://github.com/Savy-s-Gospel-Tech/Stellar_Lending_Protocol) — a decentralised, non-custodial lending protocol built on Stellar using Soroban smart contracts.

> **Status:** Scaffold — UI structure and component skeletons are in place. Core functionality is open for contributors via [Drips Wave](https://drips.network/wave/stellar).

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **@stellar/stellar-sdk** — Soroban RPC + transaction building
- **@creit.tech/stellar-wallets-kit** — Freighter, xBull, Albedo wallet support

---

## Project Structure

```
app/                    # Next.js pages
├── page.tsx            # Markets overview
├── dashboard/          # User portfolio (health factor, positions)
├── deposit/            # Deposit form
├── borrow/             # Borrow form
└── repay/              # Repay form

components/
├── layout/Navbar.tsx           # Top nav + wallet button
├── wallet/WalletButton.tsx     # Connect/disconnect wallet (SLP-UI-004)
├── markets/MarketsTable.tsx    # Reserve rates table (SLP-UI-003)
├── position/HealthFactorBadge  # Health factor display (SLP-UI-003)
└── shared/DepositForm.tsx      # Deposit transaction form (SLP-UI-001)

lib/
├── config.ts                   # RPC + contract address config
├── contracts/
│   ├── lendingPool.ts          # buildDeposit, buildWithdraw, buildBorrow, buildRepay
│   └── dataProvider.ts         # getReserveData, getUserAccountData
├── hooks/
│   ├── useWallet.ts            # Wallet connection state (SLP-UI-004)
│   ├── useReserves.ts          # Reserve data fetching (SLP-UI-003)
│   └── useUserPosition.ts      # User position fetching (SLP-UI-003)
└── utils/format.ts             # RAY/WAD formatting helpers ✅

types/index.ts          # TypeScript types mirroring on-chain structs ✅
```

---

## Getting Started

```bash
git clone https://github.com/Savy-s-Gospel-Tech/stellar-lending-ui
cd stellar-lending-ui
npm install
cp .env.example .env.local
# Fill in contract addresses in .env.local
npm run dev
```

---

## Open Issues (Drips Wave Bounties)

These are the contributor issues. Each has a clear scope and acceptance criteria in the source file.

| Issue | Description | Complexity | Depends on |
|---|---|---|---|
| **SLP-UI-001** | Implement `buildDeposit` + `buildWithdraw` in `lib/contracts/lendingPool.ts` | High | Contract deployed |
| **SLP-UI-002** | Implement `buildBorrow` + `buildRepay` + BorrowForm + RepayForm | High | SLP-UI-001 |
| **SLP-UI-003** | Implement `getReserveData`, `getUserAccountData` in `lib/contracts/dataProvider.ts`; wire up `useReserves`, `useUserPosition`, `MarketsTable`, `HealthFactorBadge` | High | SLP-UI-001 |
| **SLP-UI-004** | Implement `useWallet` hook + `WalletButton` using `@creit.tech/stellar-wallets-kit` | Medium | — |

Each `TODO` comment in the source files references the issue number and lists exact acceptance criteria.

---

## Contract Addresses

Set in `.env.local` — see `.env.example`. Contracts are deployed from the [Stellar Lending Protocol](https://github.com/Savy-s-Gospel-Tech/Stellar_Lending_Protocol) repo.

---

## Contributing

This project participates in the **Stellar Wave** program on [Drips](https://drips.network/wave/stellar). Issues tagged `Stellar Wave` are bounty-eligible.

See the [protocol CONTRIBUTING.md](https://github.com/Savy-s-Gospel-Tech/Stellar_Lending_Protocol/blob/main/CONTRIBUTING.md) for code standards and commit style.
