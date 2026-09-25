import { useEffect, useState } from "react";
import api from "../../services/api";

const AdminDashboard = () => {

  const [users, setUsers] = useState<number>(0)
  const [activeSignals, setActiveSignals] = useState<number>(0)
  useEffect(() => {
  const fetchStats = async () => {
    try {
      const response = await api.get("/api/admin/stats");

      setUsers(response.data.users);
      setActiveSignals(response.data.activeSignals);
    } catch (error) {
      console.error("Failed to fetch admin stats:", error);
    }
  };

  fetchStats();
}, []);
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Dashboard
        </h1>
      </div>

      {/* Stats */}
      <div className="flex justify-between gap-2 px-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">Total Users</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {users}
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Registered users
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-400">Active Signals</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {activeSignals}
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Currently active
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Signals */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">
                Recent Signals
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Latest trading signals
              </p>
            </div>

            <button className="text-sm text-blue-400 hover:text-blue-300">
              View all
            </button>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500">
              No signals available yet.
            </p>
          </div>
        </div>

        {/* Recent Users */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">
                Recent Users
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Recently registered users
              </p>
            </div>

            <button className="text-sm text-blue-400 hover:text-blue-300">
              View all
            </button>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500">
              No users available yet.
            </p>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div>
          <h2 className="font-semibold text-white">
            Market Overview
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Current market prices
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-black/10 p-4">
            <p className="text-sm text-gray-400">EUR/USD</p>

            <p className="mt-2 text-xl font-semibold text-white">
              —
            </p>

            <span className="text-xs text-gray-500">
              Live price
            </span>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/10 p-4">
            <p className="text-sm text-gray-400">XAU/USD</p>

            <p className="mt-2 text-xl font-semibold text-white">
              —
            </p>

            <span className="text-xs text-gray-500">
              Live price
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;