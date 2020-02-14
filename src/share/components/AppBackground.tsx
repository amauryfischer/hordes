import React, { FunctionComponent, useEffect, useState } from "react";

const AppBackground: FunctionComponent<{}> = props => {
  const backgroundStyle = {
    backgroundImage: 'url("/content_bg.jpg")',
    backgroundPosition: "0px 155px",
    backgroundRepeat: "repeat",
    backgroundColor: "#7e4d2a",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    margin: "auto",
  };

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const resizeApp = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeApp);
    resizeApp();
    return () => {
      window.removeEventListener("resize", resizeApp);
    };
  });

  return (
    <div style={{ ...backgroundStyle, height, width }}>{props.children}</div>
  );
};

export default AppBackground;
