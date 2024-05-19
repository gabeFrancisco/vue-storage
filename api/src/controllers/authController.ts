import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
  authService = new AuthService();

  login(req: Request, res: Response) {
    return res.json("Jesus bless you!");
  }

  register(req: Request, res: Response) {
    // console.log(req.body);
    // const { username, email, password } = req.body;
    // this.authService.registerUser(username, email, password);
    return res.send(req.body);
  }
}
