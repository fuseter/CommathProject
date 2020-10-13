import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "./routes";
import GlobalStyles from "../src/components/GlobalStyles";

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
