import express from "express";
import { TodoDto } from "../todo.dto";
import { CreateTodoDto } from "./create-todo.dto";

const router = express.Router();

export class CreateTodoController {
  // TODO: Instantiate create-todo use-case
  constructor() {}

  public async createTodo(todo: CreateTodoDto): Promise<TodoDto> {
    throw new Error("not implemented");
  }
}
