import path from "path";

import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import { AuthRouter } from "./routers/auth/auth.router";
import { UserRouter } from "./routers/users/users.router";

import { errorCatcher } from "./middlewares/errorCatcher";

const app = express();

app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"]
    }
  })
);
process.env.NODE_ENV === 'development' && app.use(morgan("dev"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/users", UserRouter)

// custom middleware
app.use(errorCatcher)

app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

export { app };