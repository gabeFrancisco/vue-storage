import { Router } from "express";
import authController from "./controllers/authController";

export const router = Router();

router.get("/auth", authController.login);
router.post("/auth/register", authController.register);
