import React, { FunctionComponent } from "react";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DARK_BROWN, LIGHT_TEXT } from "../../style/color";
interface INavigatorCard {
  item: {
    title: string;
    link: string;
    image: string;
  };
}
const NavigatorCard: FunctionComponent<INavigatorCard> = props => {
  return (
    <Card style={{ margin: "2px" }}>
      <Link to={props.item.link}>
        <CardActionArea>
          <CardMedia
            style={{ height: "80px", width: "145px" }}
            image={props.item.image}
          />
          <div style={{ backgroundColor: DARK_BROWN, color: LIGHT_TEXT }}>
            {props.item.title}
          </div>
        </CardActionArea>
      </Link>
    </Card>
  );
};
export default NavigatorCard;
