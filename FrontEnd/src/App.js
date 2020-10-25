import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import GlobalStyles from "../src/components/GlobalStyles";
import theme from '../src/theme/index'

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
