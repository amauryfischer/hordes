import { ADD_TODO } from "./constant";
import { TodoActionType } from "./type_actions";
import { Todo } from "./type";

export const addTodo = (message: string): TodoActionType => {
  const todoItem = {
    message: message,
    id: Math.floor(Math.random() * 1000).toString()
  };
  return {
    type: ADD_TODO,
    todo: todoItem
  };
};
