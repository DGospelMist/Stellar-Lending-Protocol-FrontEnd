# Contributing to Stellar Lending UI

Thanks for your interest! This project runs on the **Stellar Wave** program via [Drips](https://drips.network/wave) — contributors earn on-chain rewards for merged PRs.

## Quick Start

```bash
cd Stellar-lending-ui
npm install
cp .env.example .env.local
npm run dev
```

## How to Contribute

1. Browse open issues — each has a complexity label and clear acceptance criteria.
2. Apply to an issue via the [Drips Wave app](https://drips.network/wave) or leave a comment on GitHub.
3. Wait to be assigned before opening a PR (one contributor per issue per Wave).
4. Open a PR against `develop`, referencing the issue (`Closes #N`).
5. Address review feedback; maintainer merges and marks the issue resolved.

## Code Standards

- `npm run type-check` must pass
- `npm run lint` must pass
- No raw `bigint` division in components — use `lib/utils/format.ts`
- No wallet signing logic outside `lib/hooks/useWallet.ts`

## Commit Style

```
<type>(<scope>): <short description>

Types: feat, fix, docs, test, refactor, chore
Scope: wallet, markets, deposit, borrow, contracts, hooks
```

## Questions?

Open a GitHub Discussion or ping us in the issue thread.
