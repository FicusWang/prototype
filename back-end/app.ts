import cors from "cors";
import express from "express";
// rest of the code remains same
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!!!"));

app.post("/users", (req, res) => {
  const msg =
    "POST HTTP method on user resource, request body " +
    JSON.stringify(req.body);
  return res.send(msg);
});

app.get("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
