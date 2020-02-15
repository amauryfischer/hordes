import React, { FunctionComponent } from "react";
import NavigatorCard from "./NavigatorCard";

const Navigator: FunctionComponent<{}> = () => {
  const navigationItems = [
    {
      title: "Ma maison",
      image: "/maison.gif",
      link: "/maison/coffre",
    },
    {
      title: "Puit",
      image: "/puit.gif",
      link: "/puit",
    },
    {
      title: "Banque",
      image: "/banque.gif",
      link: "/banque",
    },
    {
      title: "Quartiers",
      image: "/citoyens.gif",
      link: "/quartier",
    },
    {
      title: "Chantier",
      image: "/chantiers.gif",
      link: "/chantier",
    },
    {
      title: "Extérieur",
      image: "/exterieur.gif",
      link: "/exterieur",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "298px" }}>
      {navigationItems.map(navigationItem => (
        <React.Fragment key={navigationItem.title}>
          <NavigatorCard item={navigationItem} />
        </React.Fragment>
      ))}
    </div>
  );
};
export default Navigator;
