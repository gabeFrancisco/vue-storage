import { Router } from "express";
import userController from "./controllers/user.controller";
import { authMiddleware as auth } from "./middlewares/auth.middleware";
import productController from "./controllers/product.controller";
export const router = Router();

//User endpoints
router.post("/users/login", userController.login);
router.get("/users", auth, userController.getAll);
router.post("/users/register", userController.register);
router.get("/users/:username", userController.getUser);

//Product endpoints
router.post("/products", auth, productController.addProduct);
