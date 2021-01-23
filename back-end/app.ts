import cors from "cors";
import express from "express";
import { usersRouter } from "./router/user.router";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
