import React, { FunctionComponent, useState } from "react";
import { StyledHordeAction, HordesImage } from "../style/components/buttons";

interface IHordeAction {
  image: string;
  text: string;
}

const HordeAction: FunctionComponent<IHordeAction> = props => {
  const [hover, setHover] = useState(false);
  return (
    <StyledHordeAction
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <HordesImage
        active={hover}
        style={{ width: "15px", height: "15px" }}
        src={props.image}
      />
      <div style={{ textDecoration: "underline" }}>{props.text}</div>
    </StyledHordeAction>
  );
};
export default HordeAction;
