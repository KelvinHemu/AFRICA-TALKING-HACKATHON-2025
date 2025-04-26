import { Router, Request, Response, NextFunction } from "express";
import SubTask, { ISubTask } from "../models/SubTask";
import { authMiddleware } from "./auth";

const router = Router();

// CREATE
router.post("/", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subTask = new SubTask(req.body);
    await subTask.save();
    res.status(201).json(subTask);
  } catch (err) {
    next(err);
  }
});

// READ ALL
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subtasks = await SubTask.find();
    res.json(subtasks);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subtask = await SubTask.findById(req.params.id);
    if (!subtask) return res.status(404).json({ error: "Not found" });
    res.json(subtask);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subtask = await SubTask.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subtask) return res.status(404).json({ error: "Not found" });
    res.json(subtask);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subtask = await SubTask.findByIdAndDelete(req.params.id);
    if (!subtask) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
});

export default router; 