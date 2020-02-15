import { Link } from "react-router-dom";
import styled from "styled-components";
import { LIGHT_TEXT } from "../color";

export const StyledLink = styled(Link)`
  background-image: url("/tab.gif");
  float: left;

  position: relative;
  margin-top: -24px;
  height: 24px;

  margin-right: 2px;

  margin-top: 1px;

  font-family: "Trebuchet MS", "Arial", Verdana, sans-serif;

  white-space: nowrap;

  background-position: top left;

  background-repeat: no-repeat;

  border-left: 1px solid #694023;

  border-right: 1px solid #694023;
  text-decoration: none;
  color: ${LIGHT_TEXT};
  &:hover {
    color: white;
    border: 1px solid white;
  }
`;
