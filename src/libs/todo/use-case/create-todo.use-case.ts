import { Todo } from "@isdin-todo-domain";

// Given the class Dummy implement the create-dummy-use-case
// Validations:
// - If the name is duplicated throw error
// - If there is a repository problem throw error

export interface CreateTodoRequestModelUseCase {
  // TODO:
}

export interface CreateTodoResponseModelUseCase {
  todo: Todo;
}

export class CreateTodoUseCase {
  // TODO:
  constructor() {}

  public async execute(
    request: CreateTodoRequestModelUseCase
  ): Promise<CreateTodoResponseModelUseCase> {
    // TODO:
    throw new Error("method not implemented");
  }
}
