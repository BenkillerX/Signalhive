import { getLatestMarkets } from "../../services/marketService.js";

export const getMarkets = (req, res) => {
  try {
    const markets = getLatestMarkets();

    res.status(200).json(markets);
  } catch (error) {
    console.error("Error fetching markets:", error);

    res.status(500).json({
      message: "Failed to fetch market data",
    });
  }
};