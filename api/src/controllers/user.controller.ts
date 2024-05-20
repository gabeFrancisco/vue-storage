import { Request, Response } from "express";
import userService from "../services/user.service";
import tokenManager from "../utils/tokenManager";
import { User } from "../models/User";

async function getUser(req: Request, res: Response) {
  const { username } = req.params;
  const user = await userService.getUserByUsername(username);
  if (user) {
    return res.json(user).status(200);
  } else {
    return res.json("Not found!").status(404);
  }
}

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const loginData = (await userService.loginUser(username, password)) as {
    user: User;
    exp: string;
  };
  const token = tokenManager.generateToken(
    loginData.user.id!,
    loginData.user.username
  );

  res.cookie("user", loginData, { maxAge: parseInt(loginData.exp) });
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: parseInt(loginData.exp),
  });

  return res.json(loginData).status(200);
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

export default { login, getAll, register, getUser };
