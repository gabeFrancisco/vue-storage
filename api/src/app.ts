import express from "express";
import { router } from "./router";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/error.middleware";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(handleError);

export default app;
