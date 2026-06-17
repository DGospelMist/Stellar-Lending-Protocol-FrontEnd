# Architecture

The Stellar Lending UI is a Next.js 14 frontend for the [Stellar Lending Protocol](https://github.com/Savy-s-Gospel-Tech/Stellar_Lending_Protocol). It connects to deployed Soroban contracts via the Stellar RPC and uses `@creit.tech/stellar-wallets-kit` for wallet integration.

---

## Directory Structure

```
stellar-lending-ui/
│
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — Navbar + global styles
│   ├── page.tsx                # / — Markets overview (reserve rates table)
│   ├── dashboard/page.tsx      # /dashboard — User portfolio, health factor, positions
│   ├── deposit/page.tsx        # /deposit — Deposit form
│   ├── borrow/page.tsx         # /borrow — Borrow form
│   └── repay/page.tsx          # /repay — Repay form
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Top nav + wallet button
│   ├── wallet/
│   │   └── WalletButton.tsx    # Connect/disconnect (SLP-UI-004)
│   ├── markets/
│   │   └── MarketsTable.tsx    # Reserve rates table (SLP-UI-003)
│   ├── position/
│   │   └── HealthFactorBadge.tsx  # Health factor display (SLP-UI-003)
│   └── shared/
│       └── DepositForm.tsx     # Deposit transaction form (SLP-UI-001)
│
├── lib/
│   ├── config.ts               # RPC URL, network passphrase, contract addresses from env
│   ├── contracts/
│   │   ├── lendingPool.ts      # buildDeposit, buildWithdraw, buildBorrow, buildRepay (SLP-UI-001/002)
│   │   └── dataProvider.ts     # getReserveData, getUserAccountData (SLP-UI-003)
│   ├── hooks/
│   │   ├── useWallet.ts        # Wallet state + signAndSubmit (SLP-UI-004)
│   │   ├── useReserves.ts      # Fetches all reserve data (SLP-UI-003)
│   │   └── useUserPosition.ts  # Fetches user account + per-reserve positions (SLP-UI-003)
│   └── utils/
│       └── format.ts           # ✅ RAY/WAD formatters, health factor display
│
├── types/
│   └── index.ts                # ✅ TypeScript types mirroring on-chain CoreLibrary structs
│
├── .env.example                # Required environment variables
└── .github/workflows/ci.yml   # Lint + type-check on every PR
```

---

## Data Flow

```
User action (e.g. click Deposit)
    │
    ▼
DepositForm (component)
    │  calls
    ▼
buildDeposit() — lib/contracts/lendingPool.ts
    │  builds + simulates XDR via @stellar/stellar-sdk
    ▼
useWallet().signAndSubmit(xdr)
    │  signs via stellar-wallets-kit
    │  submits via rpc.sendTransaction()
    │  polls rpc.getTransaction() until SUCCESS/FAILED
    ▼
TxState update → UI feedback (success hash / error message)
```

```
Page load (e.g. Markets)
    │
    ▼
useReserves() hook
    │  calls
    ▼
getAllReserves() — lib/contracts/dataProvider.ts
    │  simulates get_reserve_data for each asset via RPC
    ▼
ReserveData[] → MarketsTable renders rows
```

---

## Contract Address Configuration

All contract addresses are injected via environment variables (never hardcoded). Set them in `.env.local` after deploying the protocol contracts:

```
NEXT_PUBLIC_LENDING_POOL_ADDRESS=
NEXT_PUBLIC_LENDING_POOL_CORE_ADDRESS=
NEXT_PUBLIC_PRICE_ORACLE_ADDRESS=
NEXT_PUBLIC_ADDRESSES_PROVIDER_ADDRESS=
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK=testnet
```

---

## Key Design Decisions

**Transaction building is separate from signing.** `lib/contracts/` functions return assembled XDR strings. The wallet hook handles signing and submission. This keeps contract logic testable without a wallet.

**Types mirror on-chain structs.** `types/index.ts` defines `ReserveData`, `UserReserveData`, and `UserAccountData` to match `CoreLibrary` in the contract repo. When contract structs change, update both.

**RAY precision throughout.** All rates and indexes from the contract are `bigint` in RAY (1e27). Use `formatRayAsPercent()` from `lib/utils/format.ts` before displaying — never divide raw bigints in components.

**No wallet = read-only.** Pages that only display market data (Markets) work without a connected wallet. Pages that submit transactions (Deposit, Borrow, Repay) should check `isConnected` and prompt connection if needed.
