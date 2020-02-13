import { ADD_TODO } from "./constant";
import { Todo } from "./type";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

export type TodoActionType = AddTodoAction;
