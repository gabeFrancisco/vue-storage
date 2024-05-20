import { NextFunction, Request, Response } from "express";

import tokenManager from "../utils/tokenManager";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.access_token;
  if (!token) {
    return res
      .json({
        message: "Not authorized!",
      })
      .status(403);
  }

  req.userId = tokenManager.verifyToken(token).id;
  next();
}

export { authMiddleware };
