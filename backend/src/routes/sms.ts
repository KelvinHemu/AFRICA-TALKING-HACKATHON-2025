import { Router, Request, Response } from "express";
import { sendSMS } from "../services/africastalking";

const router = Router();

// POST /api/sms/send
router.post("/send", async (req: Request, res: Response) => {
  const { to, message } = req.body;
  if (!to || !message) {
    return res.status(400).json({ error: "Missing 'to' or 'message' in request body" });
  }
  try {
    const result = await sendSMS(to, message);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: "Failed to send SMS", details: error instanceof Error ? error.message : error });
  }
});

export default router; 