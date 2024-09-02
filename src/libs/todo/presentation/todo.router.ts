import express from "express";
import { CreateTodoController } from "./create-todo";

const todoRouter = express.Router();

todoRouter.post("/create-todo", async (req, res) => {
  const controller = new CreateTodoController();
  const response = await controller.createTodo(req.body);

  return res.status(200).send(response);
});

export { todoRouter };
