import Signal from "../../models/Signal.js";

export const createSignal = async (req, res) => {
  try {
    const {
      pair,
      direction,
      entryPrice,
      stopLoss,
      takeProfit,
      timeframe,
      analysis,
    } = req.body;

    if (
      !pair ||
      !direction ||
      !entryPrice ||
      !stopLoss ||
      !takeProfit ||
      !timeframe
    ) {
      return res.status(400).json({
        message: "Please provide all required signal fields",
      });
    }

    const signal = await Signal.create({
      pair,
      direction,
      entryPrice,
      stopLoss,
      takeProfit,
      timeframe,
      analysis,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Signal uploaded successfully",
      signal,
    });
  } catch (error) {
    console.error("Create signal error:", error);

    res.status(500).json({
      message: "Failed to upload signal",
    });
  }
};