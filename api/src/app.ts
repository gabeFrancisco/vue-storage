import express from "express";
import { router } from "./router";
import cookieParser from "cookie-parser";

const app = express();

app.use(router);
app.use(cookieParser());

export default app;
