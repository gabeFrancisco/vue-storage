import express from "express";
import { router } from "./router";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/handleError";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(handleError);
app.use(cookieParser());

export default app;
