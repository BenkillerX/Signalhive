import Signal from "../../models/Signal.js";
import USER from "../../models/User.js";

export const getAdminStats = async (req, res) => {
  try {
    const users = await USER.countDocuments();

    const activeSignals = await Signal.countDocuments({
      status: "ACTIVE",
    });

    res.status(200).json({
      users,
      activeSignals,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch admin statistics",
    });
  }
};