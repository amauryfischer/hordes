import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { StyledLink } from "../../share/style/components/horde";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabContainer: FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledLink to="/maison/coffre">Coffres et Actions</StyledLink>
      <StyledLink to="/maison/echanges">Echanges</StyledLink>
      <StyledLink to="/maison/plaintes">Plaintes</StyledLink>
      <StyledLink to="/maison/travaux">Travaux</StyledLink>

      <Route path="/maison/coffre">Coffres et Actions</Route>
      <Route path="/maison/echanges">Echanges</Route>
      <Route path="/maison/plaintes">Plaintes</Route>
      <Route path="/maison/travaux">Travaux</Route>
    </div>
  );
};
export default TabContainer;
