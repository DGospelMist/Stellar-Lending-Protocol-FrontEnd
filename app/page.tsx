import MarketsTable from "@/components/markets/MarketsTable";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Markets</h1>
        <p className="text-gray-400 mt-1">
          Deposit assets to earn interest or borrow against your collateral.
        </p>
      </div>
      <MarketsTable />
    </div>
  );
}
