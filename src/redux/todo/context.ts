import React, { Dispatch } from "react";
import { TodosState } from "./type";
import { AddTodoAction } from "./type_actions";

// We define our type for the context properties right here
type ContextProps = {
  state: TodosState;
  dispatch: Dispatch<AddTodoAction>;
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export const TodosContext = React.createContext<Partial<ContextProps>>({});
