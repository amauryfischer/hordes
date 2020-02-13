import { TodosState } from "./type";
import { ADD_TODO } from "./constant";
import { TodoActionType } from "./type_actions";

const todoReducer = (state: TodosState, action: TodoActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      };
    default:
      return state;
  }
};

export default todoReducer;
