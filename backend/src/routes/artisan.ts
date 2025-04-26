import { Router, Request, Response, NextFunction } from "express";
import Artisan, { IArtisan } from "../models/Artisan";
import { authMiddleware } from "./auth";

const router = Router();

// CREATE
router.post("/", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artisan = new Artisan(req.body);
    await artisan.save();
    res.status(201).json(artisan);
  } catch (err) {
    next(err);
  }
});

// READ ALL
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artisans = await Artisan.find();
    res.json(artisans);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artisan = await Artisan.findById(req.params.id);
    if (!artisan) return res.status(404).json({ error: "Not found" });
    res.json(artisan);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artisan = await Artisan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artisan) return res.status(404).json({ error: "Not found" });
    res.json(artisan);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artisan = await Artisan.findByIdAndDelete(req.params.id);
    if (!artisan) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
});

export default router; 