import path from "path/posix";

import express, {Response, Request} from "express";
import helmet from "helmet";
import cors from "cors";

const app = express()

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "..", "..", "public")))

app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"))
})

export { app }