import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/db.js";
import http from "http";
import { WebSocketServer } from "ws";
import cors from "cors";

import authRoutes from "./src/modules/auth/auth.routes.js";
import marketRoutes from "./src/modules/market/market.routes.js";
import {
  connectToMarketData,
  getLatestMarkets,
} from "./src/services/marketService.js";
import signalRoutes from "./src/modules/signal/signal.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/markets", marketRoutes);
app.use("/api/signal", signalRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "SignalHive API is running",
  });
});

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({
  server,
  path: "/ws/markets",
});

// Frontend WebSocket connection
wss.on("connection", (socket) => {
  console.log("Frontend connected to market WebSocket");

  // Send current market data immediately
  socket.send(
    JSON.stringify({
      type: "market_snapshot",
      data: getLatestMarkets(),
    })
  );

  socket.on("close", () => {
    console.log("Frontend disconnected from market WebSocket");
  });

  socket.on("error", (error) => {
    console.error("Frontend WebSocket error:", error);
  });
});

const startServer = async () => {
  try {
    await connectDB();

    console.log("Mongodb connected successfully");

    server.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);

      connectToMarketData(wss);
    });
  } catch (error) {
    console.error(
      "An error occurred while starting the server:",
      error
    );

    process.exit(1);
  }
};

startServer();