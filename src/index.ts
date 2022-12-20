import express, { Application } from "express";
import cors from "cors";
import router from "../router/router";

const app: Application = express();
const port: number | string = process.env.port || 1999;

require("../config/db");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: `server is up and running ✨`,
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
