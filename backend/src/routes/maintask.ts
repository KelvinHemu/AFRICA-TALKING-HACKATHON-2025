import { Router, Request, Response, NextFunction } from "express";
import MainTask, { IMainTask } from "../models/MainTask";
import { authMiddleware } from "./auth";

const router = Router();

// CREATE
router.post("/", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mainTask = new MainTask(req.body);
    await mainTask.save();
    res.status(201).json(mainTask);
  } catch (err) {
    next(err);
  }
});

// READ ALL
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await MainTask.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await MainTask.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await MainTask.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: "Not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await MainTask.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
});

export default router; 