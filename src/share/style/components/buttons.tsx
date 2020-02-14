import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";
import { BLUE, WHITE } from "../color";

export const BlueButton = styled(Button)`
  background-color: ${BLUE} !important;
  color: ${WHITE} !important;
`;
export const HordeButton = styled(Button)`
  text-align: center;
  background-image: url("/button.gif");
  margin: 0px;
  margin-top: 0px;
  padding: 0px;
  display: block;
  margin-top: 3px;
  padding-left: 7px;
  padding-right: 7px;
  width: 250px;
  height: 25px;
  padding-bottom: 1px;
  color: #f0d79e;
  font-size: 10pt;
  font-weight: bold;
  font-family: Arial;
  letter-spacing: 0pt;
  text-align: left;
  font-variant: small-caps;
  text-decoration: none;
  background-color: #b37c4a;

  border: 1px solid black;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-bottom-width: 2px;
  outline: 1px solid #784323;
  cursor: pointer;

  &:hover {
    padding-bottom: 0px;
    padding-top: 1px;
    border-top-width: 2px;
    border-bottom-width: 1px;
    outline: 1px solid #f0d79e;
    color: white;
  }
`;
export const StyledHordeAction = styled.div`
  display: block;
  text-decoration: none;
  width: max-content;
  display: flex;
  align-items: center;
  font-variant: small-caps;
  color: #ddab76;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
interface IHordesImage {
  active: boolean;
}
export const HordesImage = styled.img`
  ${(props: IHordesImage) =>
    props.active &&
    css`
      border: 1px solid white;
    `}
`;
