import { NextFunction, Request, Response } from "express";

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
  const errStatus = err.statusCode || 500;
  const errorMsg = err.message || "Something went wrong!"
  res.status(errStatus).json({
    status: errStatus,
    message: errorMsg
  })
}