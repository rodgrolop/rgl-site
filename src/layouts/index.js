import React from "react";

// Layout MUI dependencies
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Context
import { LayoutContextProvider } from "../context";

// Utils
import theme from "../theme/theme";

const AppLayout = ({ children }) => (
  <LayoutContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </LayoutContextProvider>
);

export default AppLayout;
