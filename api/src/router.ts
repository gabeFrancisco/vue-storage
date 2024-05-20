import { Router } from "express";
import userController from "./controllers/user.controller";
import { authMiddleware } from "./middlewares/auth.middleware";
export const router = Router();

//User endpoints
router.get("/users/login", userController.login);
router.get("/users", authMiddleware, userController.getAll);
router.post("/users/register", userController.register);
