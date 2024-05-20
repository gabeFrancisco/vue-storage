import { Router } from "express";
import userController from "./controllers/user.controller";
export const router = Router();

//User endpoints
router.get("/users/login", userController.login);
router.get("/users", userController.getAll);
router.post("/users/register", userController.register);
