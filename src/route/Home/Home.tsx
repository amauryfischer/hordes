import React, { FunctionComponent, useContext } from "react";
import { H3 } from "../../share/style/components/header";
import { TodosContext } from "../../redux/todo/context";
import { FlexColumn } from "../../share/style/components/flex";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Col, Row, Container } from "reactstrap";
import { ColNoPadding } from "../../share/style/components/bootstrap";

const Home: FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <>
      <H3>Home</H3>
      <Container>
        <Row style={{ width: "300px" }}>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/home_night.gif"
                title="Contemplative Reptile"
              />
              <div>Ma maison</div>
            </Card>
          </ColNoPadding>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/well_night.gif"
                title="Contemplative Reptile"
              />
              <div>Puit</div>
            </Card>
          </ColNoPadding>
        </Row>
        <Row style={{ width: "300px" }}>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/stocks_night.gif"
                title="Contemplative Reptile"
              />
              <div>Banque</div>
            </Card>
          </ColNoPadding>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/jobs_night.gif"
                title="Contemplative Reptile"
              />
              <div>Quartiers</div>
            </Card>
          </ColNoPadding>
        </Row>
        <Row style={{ width: "300px" }}>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/agora_night.gif"
                title="Contemplative Reptile"
              />
              <div>Chantier</div>
            </Card>
          </ColNoPadding>
          <ColNoPadding>
            <Card style={{ width: "145px" }}>
              <CardMedia
                style={{ width: "145px", height: "80px" }}
                image="http://data.hordes.fr/gfx/menu/door_night.gif"
                title="Contemplative Reptile"
              />
              <div>Extérieur</div>
            </Card>
          </ColNoPadding>
        </Row>
      </Container>
      <FlexColumn>
        {state?.todos.map(todo => (
          <div key={todo.id}>{todo.message}</div>
        ))}
      </FlexColumn>
    </>
  );
};
export default Home;
