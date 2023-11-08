import React from "react";

import store from "../store/index";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: blue[200],
      },
    },
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default AppProviders;
