import React, { FunctionComponent, useContext } from "react";
import { H3 } from "../../share/style/components/header";
import { TodosContext } from "../../redux/todo/context";
import { FlexColumn } from "../../share/style/components/flex";

const Home: FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext(TodosContext);
  return (
    <>
      <H3>Home</H3>
      <FlexColumn>
        {state?.todos.map(todo => (
          <React.Fragment key={todo.id}>{todo.message}</React.Fragment>
        ))}
      </FlexColumn>
    </>
  );
};
export default Home;
