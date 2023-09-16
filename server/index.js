import express from "express";
import cors from "cors";
import init from "./db/connection.js";
import authRouter from "./routers/authRouter.js";
import uR from "./routers/userRouter.js";

// express config
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Go To /api");
});

// base router
const bR = express.Router();
app.use("/api", bR);

bR.get("/", (req, res) => {
  res.send("v0.0.1");
});

// Routes /api/{route}
bR.use("/auth", authRouter);
bR.use("/user", uR);


// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.clear()
  init()
  console.log(`Server @ http://localhost:${PORT}`);
});

export default app;