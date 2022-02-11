import path from "path";

import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

import { AuthRouter } from "./routers/auth/auth.router";
import { errorCatcher } from "./middlewares/errorCatcher"

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use('/api/v1/auth', AuthRouter);
// app.use('/api/v1/users', )

// custom middleware
app.use(errorCatcher)

app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

export { app };