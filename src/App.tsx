import React, { FunctionComponent, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./route/Home/Home";
import { TodosContext } from "./redux/todo/context";
import todoReducer from "./redux/todo/reducer";
import { TodosState } from "./redux/todo/type";
import { BlueButton } from "./share/style/components/buttons";
import { addTodo } from "./redux/todo/action";

const App: FunctionComponent<{}> = () => {
  const initialTodos: TodosState = {
    todos: [{ message: "myMessage", id: "1" }]
  };

  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  const addTodoMessage = () => dispatch(addTodo("test"));

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Router>
        <BlueButton variant="contained" onClick={addTodoMessage}>
          Add Todo
        </BlueButton>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </TodosContext.Provider>
  );
};

export default App;
