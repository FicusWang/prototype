import express from "express";

export const usersRouter = express.Router();

usersRouter.post("/", (req, res) => {
  const msg =
    "POST HTTP method on user resource, request body " +
    JSON.stringify(req.body);
  return res.send(msg);
});

usersRouter.get("/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});
