import { useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const AddSignal = () => {
  const [formData, setFormData] = useState({
    pair: "",
    direction: "BUY",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    timeframe: "15m",
    analysis: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };


    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
  await api.post("/api/signal", {
    pair: formData.pair,
    direction: formData.direction,
    entryPrice: Number(formData.entryPrice),
    stopLoss: Number(formData.stopLoss),
    takeProfit: Number(formData.takeProfit),
    timeframe: formData.timeframe,
    analysis: formData.analysis,
  });

  toast.success("Signal uploaded successfully!");

  setFormData({
    pair: "",
    direction: "BUY",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    timeframe: "15m",
    analysis: "",
  });
} catch (error) {
  console.error(error);
  toast.error("Failed to upload signal.");
}
};

  return (
        <section className="min-h-screen flex justify-center items-center">
               <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Add Trading Signal
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-6"
      >
        {/* Pair */}
        <div>
          <label
            htmlFor="pair"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Trading Pair
          </label>

          <input
            id="pair"
            name="pair"
            type="text"
            value={formData.pair}
            onChange={handleChange}
            placeholder="EUR/USD"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
          />
        </div>

        {/* Direction + Timeframe */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="direction"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Direction
            </label>

            <select
              id="direction"
              name="direction"
              value={formData.direction}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="timeframe"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Timeframe
            </label>

            <select
              id="timeframe"
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              <option value="1m">1 Minute</option>
              <option value="5m">5 Minutes</option>
              <option value="15m">15 Minutes</option>
              <option value="30m">30 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="4h">4 Hours</option>
              <option value="1d">1 Day</option>
            </select>
          </div>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="entryPrice"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Entry Price
            </label>

            <input
              id="entryPrice"
              name="entryPrice"
              type="number"
              step="any"
              value={formData.entryPrice}
              onChange={handleChange}
              placeholder="1.1745"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="stopLoss"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Stop Loss
            </label>

            <input
              id="stopLoss"
              name="stopLoss"
              type="number"
              step="any"
              value={formData.stopLoss}
              onChange={handleChange}
              placeholder="1.1725"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="takeProfit"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Take Profit
            </label>

            <input
              id="takeProfit"
              name="takeProfit"
              type="number"
              step="any"
              value={formData.takeProfit}
              onChange={handleChange}
              placeholder="1.1790"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-blue-500"
            />
          </div>
        </div>


        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Publishing Signal..." : "Publish Signal"}
        </button>
      </form>
    </div>
        </section>
  );
};

export default AddSignal;