import { Router } from "express";
import { AuthController } from "./controllers/authController";

export const router = Router();

const authController = new AuthController();

router.get("/auth", authController.login);
router.post("/auth/register", authController.register);
