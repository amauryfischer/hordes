import React from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import { BROWN, DARK_BROWN } from "../color";
export const HordeCard = styled(Card)`
  width: 800px;
  height: 800px;
  padding: 5px;
  background-color: ${BROWN};
  border: 1px solid ${DARK_BROWN};
`;
