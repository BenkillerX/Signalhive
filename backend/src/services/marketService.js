import WebSocket from "ws";

const TWELVE_DATA_API_KEY = process.env.TWELVE_DATA_API_KEY;

const TWELVE_DATA_WS_URL =
  `wss://ws.twelvedata.com/v1/quotes/price?apikey=${TWELVE_DATA_API_KEY}`;

const symbols = [
  "EUR/USD",
  "XAU/USD",
];

let marketSocket = null;

const latestMarkets = {};

export const connectToMarketData = (wss) => {
  if (!TWELVE_DATA_API_KEY) {
    throw new Error("TWELVE_DATA_API_KEY is not defined");
  }

  marketSocket = new WebSocket(TWELVE_DATA_WS_URL);

  marketSocket.on("open", () => {
    console.log("Connected to Twelve Data");

    marketSocket.send(
      JSON.stringify({
        action: "subscribe",
        params: {
          symbols: symbols.join(","),
        },
      })
    );

    console.log(`Subscribed to: ${symbols.join(", ")}`);
  });

  marketSocket.on("message", (data) => {
    try {
      const message = JSON.parse(data.toString());

      console.log("Twelve Data message:", message);

      if (message.event === "subscribe-status") {
        console.log(
          "Subscription status:",
          JSON.stringify(message, null, 2)
        );
        return;
      }

      if (message.event === "price") {
        const market = {
          symbol: message.symbol,
          price: Number(message.price),
          timestamp: message.timestamp,
        };

        latestMarkets[message.symbol] = market;

        console.log("Market update:", market);

        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(
              JSON.stringify({
                type: "market_update",
                data: market,
              })
            );
          }
        });
      }
    } catch (error) {
      console.error("Failed to process market data:", error);
    }
  });

  marketSocket.on("error", (error) => {
    console.error("Twelve Data WebSocket error:", error);
  });

  marketSocket.on("close", () => {
    console.log("Twelve Data WebSocket disconnected");
    marketSocket = null;
  });
};

export const getLatestMarkets = () => {
  return Object.values(latestMarkets);
};