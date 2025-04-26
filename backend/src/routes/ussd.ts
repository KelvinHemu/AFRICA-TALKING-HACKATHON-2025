import { Router, Request, Response } from "express";
import Artisan from "../models/Artisan";
import MainTask from "../models/MainTask";
import SubTask from "../models/SubTask";

const router = Router();

// Helper to format tasks for USSD
function formatTasks(tasks: { title: string }[]) {
  if (!tasks.length) return "No tasks assigned for today.";
  return tasks.map((t, i) => `${i + 1}. ${t.title}`).join("\n");
}

// POST /api/ussd
router.post("/", async (req: Request, res: Response) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  if (!sessionId || !serviceCode || !phoneNumber) {
    return res.status(400).send("Missing required USSD fields");
  }

  // Split text by * to determine menu level
  const levels = text ? text.split("*") : [];
  let response = "";

  try {
    if (levels.length === 0 || (levels.length === 1 && !levels[0])) {
      // Step 1: Prompt for Artisan ID
      response = "CON Welcome to Rafiki!\nEnter your Artisan ID:";
    } else if (levels.length === 1) {
      // Step 2: Validate Artisan ID and phone
      const artisanId = levels[0].trim();
      const artisan = await Artisan.findById(artisanId);
      if (!artisan) {
        response = "END Invalid Artisan ID.";
      } else if (artisan.phone !== phoneNumber) {
        response = "END Phone number does not match our records.";
      } else {
        response = `CON Hello ${artisan.name}!\n1. View Today's Tasks\n2. Exit`;
      }
    } else if (levels.length === 2) {
      // Step 3: Handle menu selection after validation
      const artisanId = levels[0].trim();
      const menuOption = levels[1].trim();
      const artisan = await Artisan.findById(artisanId);
      if (!artisan || artisan.phone !== phoneNumber) {
        response = "END Session expired or invalid. Please try again.";
      } else if (menuOption === "1") {
        // Fetch today's MainTasks and SubTasks assigned to this artisan
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        // MainTasks
        const mainTasks = await MainTask.find({
          assigned_to: artisan._id,
          created_at: { $gte: today, $lt: tomorrow },
        });
        // SubTasks
        const subTasks = await SubTask.find({
          assigned_to: artisan._id,
          due_date: { $gte: today, $lt: tomorrow },
        });
        const allTasks = [
          ...mainTasks.map((t) => ({ title: t.title })),
          ...subTasks.map((t) => ({ title: t.title })),
        ];
        const taskList = formatTasks(allTasks);
        response = `END Today's Tasks:\n${taskList}`;
      } else if (menuOption === "2") {
        response = "END Thank you for using Rafiki.";
      } else {
        response = "END Invalid option.";
      }
    } else {
      response = "END Invalid input. Please try again.";
    }
  } catch (err) {
    response = "END An error occurred. Please try again later.";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

export default router; 