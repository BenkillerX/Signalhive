import express from "express";
import { sendVerificationEmail } from "../services/emailService";

const router = express.Router();

router.get("/send-email", async (req, res) => {
  try {
    await sendVerificationEmail("benedictakhere802@gmail.com");

    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      message: "Failed to send email",
    });
  }
});

export default router;