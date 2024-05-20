import { Request, Response } from "express";
import userService from "../services/user.service";

function login(req: Request, res: Response) {
  return res.json("Jesus bless you!");
}

async function getAll(req: Request, res: Response) {
  return res.json(await userService.getAllUsers());
}

async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;
  await userService
    .registerUser(username, email, password)
    .then(() => res.json(`User ${username} added successfully!`));
}

export default { login, getAll, register };
