import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  return res.send("God bless you!");
});
