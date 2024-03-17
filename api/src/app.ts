import express from "express";
import { router } from "./router";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(router);
app.use(handleError)
app.use(cookieParser());

export default app;
