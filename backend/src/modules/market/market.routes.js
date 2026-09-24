import express from "express";
import { getMarkets } from "./market.controllers.js";

const marketRoutes = express.Router();

marketRoutes.get("/", getMarkets);

export default marketRoutes;