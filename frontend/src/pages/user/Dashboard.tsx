import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CandlestickChart,
  DollarSign,
  Signal,
  TrendingUp,
  Wallet,
} from "lucide-react";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white px-5 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Welcome back</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Dashboard
            </h1>
          </div>

          <button className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-slate-900" />
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="space-y-6 p-5 sm:p-6 lg:p-8">
        {/* Account Overview */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Account Overview
            </h2>
            <p className="text-sm text-slate-500">
              Your trading account at a glance
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Balance */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-slate-100 p-2.5">
                  <Wallet size={20} className="text-slate-700" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Balance
                </span>
              </div>

              <p className="text-2xl font-bold text-slate-900">$0.00</p>
              <p className="mt-1 text-xs text-slate-500">
                Available balance
              </p>
            </div>

            {/* Profit / Loss */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-slate-100 p-2.5">
                  <TrendingUp size={20} className="text-slate-700" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  P/L
                </span>
              </div>

              <p className="text-2xl font-bold text-slate-900">$0.00</p>
              <p className="mt-1 text-xs text-slate-500">
                Today's profit/loss
              </p>
            </div>

            {/* Open Trades */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-slate-100 p-2.5">
                  <CandlestickChart size={20} className="text-slate-700" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Trades
                </span>
              </div>

              <p className="text-2xl font-bold text-slate-900">0</p>
              <p className="mt-1 text-xs text-slate-500">
                Open positions
              </p>
            </div>

            {/* Portfolio */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-slate-100 p-2.5">
                  <BriefcaseBusiness size={20} className="text-slate-700" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Portfolio
                </span>
              </div>

              <p className="text-2xl font-bold text-slate-900">$0.00</p>
              <p className="mt-1 text-xs text-slate-500">
                Portfolio value
              </p>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Market Overview
              </h2>

              <p className="text-sm text-slate-500">
                Track major forex pairs
              </p>
            </div>

            <button className="text-sm font-medium text-slate-700 hover:text-slate-900">
              View markets
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-5 border-b border-slate-200 px-5 py-3 text-xs font-medium uppercase tracking-wide text-slate-400 sm:grid">
              <span>Pair</span>
              <span>Price</span>
              <span>24h Change</span>
              <span>High</span>
              <span>Low</span>
            </div>

            {[
              {
                pair: "EUR/USD",
                price: "—",
              },
              {
                pair: "GBP/USD",
                price: "—",
              },
              {
                pair: "USD/JPY",
                price: "—",
              },
              {
                pair: "USD/CHF",
                price: "—",
              },
            ].map((market) => (
              <div
                key={market.pair}
                className="grid grid-cols-2 gap-3 border-b border-slate-100 px-5 py-4 last:border-0 sm:grid-cols-5"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {market.pair}
                  </p>

                  <p className="text-xs text-slate-400 sm:hidden">
                    Forex pair
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-700">
                  {market.price}
                </span>

                <span className="flex items-center gap-1 text-sm text-slate-400">
                  <ArrowUpRight size={15} />
                  —
                </span>

                <span className="hidden text-sm text-slate-500 sm:block">
                  —
                </span>

                <span className="hidden text-sm text-slate-500 sm:block">
                  —
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Signals + Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Trading Signals */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Trading Signals
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Latest market signals
                </p>
              </div>

              <BarChart3 size={20} className="text-slate-500" />
            </div>

            <div className="p-5">
              <div className="flex min-h-40 flex-col items-center justify-center text-center">
                <div className="mb-3 rounded-full bg-slate-100 p-3">
                  <SignalIcon />
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  No signals available
                </h3>

                <p className="mt-1 max-w-xs text-xs text-slate-500">
                  Trading signals will appear here when they become
                  available.
                </p>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Recent Activity
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your latest account activity
                </p>
              </div>

              <DollarSign size={20} className="text-slate-500" />
            </div>

            <div className="p-5">
              <div className="flex min-h-40 flex-col items-center justify-center text-center">
                <div className="mb-3 rounded-full bg-slate-100 p-3">
                  <ArrowDownRight
                    size={20}
                    className="text-slate-500"
                  />
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  No recent activity
                </h3>

                <p className="mt-1 max-w-xs text-xs text-slate-500">
                  Your trades and account activities will appear here.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const SignalIcon = () => {
  return <Signal size={20} className="text-slate-600" />;
};

export default Dashboard;
