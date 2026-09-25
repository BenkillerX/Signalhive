import mongoose from "mongoose";

const signalSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    direction: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },

    entryPrice: {
      type: Number,
      required: true,
    },

    stopLoss: {
      type: Number,
      required: true,
    },

    takeProfit: {
      type: Number,
      required: true,
    },

    timeframe: {
      type: String,
      required: true,
    },

    analysis: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "HIT_TP", "HIT_SL", "CLOSED"],
      default: "ACTIVE",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Signal", signalSchema);