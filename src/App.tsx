import React, { FunctionComponent, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Maison from "./route/Maison/Maison";
import { TodosContext } from "./redux/todo/context";
import todoReducer from "./redux/todo/reducer";
import { TodosState } from "./redux/todo/type";
import { BlueButton } from "./share/style/components/buttons";
import { addTodo } from "./redux/todo/action";
import AppBackground from "./share/components/AppBackground";
import { Row, Col } from "reactstrap";
import Navigator from "./share/components/Navigator/Navigator";
import { FlexRow } from "./share/style/components/flex";
import { Container } from "@material-ui/core";
import StatusBar from "./share/components/StatusBar";

const App: FunctionComponent<{}> = () => {
  const initialTodos: TodosState = {
    todos: [{ message: "myMessage", id: "1" }],
  };

  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  const addTodoMessage = () => dispatch(addTodo("test"));

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Router>
        <AppBackground>
          <StatusBar />
          <Container style={{ marginTop: "3em" }}>
            <FlexRow>
              <div>
                <Navigator />
              </div>
              <div style={{ flexFlow: "1" }}>
                <Route path="/maison">
                  <Maison />
                </Route>
              </div>
            </FlexRow>
          </Container>
        </AppBackground>
      </Router>
    </TodosContext.Provider>
  );
};

export default App;
