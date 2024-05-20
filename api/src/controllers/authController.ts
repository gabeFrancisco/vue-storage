import { Request, Response } from "express";
import authService from "../services/authService";

function login(req: Request, res: Response) {
  return res.json("Jesus bless you!");
}

async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;
  await authService.registerUser(username, email, password);

  return res.json();
}

export default { login, register };
