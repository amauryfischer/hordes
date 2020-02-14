import React, { FunctionComponent, useContext } from "react";
import { H3 } from "../../share/style/components/header";
import { TodosContext } from "../../redux/todo/context";
import { FlexColumn } from "../../share/style/components/flex";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Col, Row, Container } from "reactstrap";
import { ColNoPadding } from "../../share/style/components/bootstrap";
import { DARK_BROWN, LIGHT_TEXT, BROWN } from "../../share/style/color";
import { HordeButton } from "../../share/style/components/buttons";
import { HordeCard } from "../../share/style/components/card";
import HordeAction from "../../share/components/HordeAction";

const Maison: FunctionComponent<{}> = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <>
      <Container>
        <HordeCard>
          <HordeButton size="small">
            <div>test</div>
          </HordeButton>
          yo
          <HordeAction image="/item_water.gif" text="Boire : Ration d'eau" />
        </HordeCard>
      </Container>
    </>
  );
};
export default Maison;
