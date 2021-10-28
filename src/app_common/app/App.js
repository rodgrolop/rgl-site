import React from "react";

// Layout MUI resources
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Layout custom components
import Layout from "../layout/Layout";

// Context
import { LayoutContextProvider } from "../../context";

// Utils
import theme from "../../theme/theme";

const AppLayout = ({ children }) => (
  <LayoutContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>{children}</Layout>
    </ThemeProvider>
  </LayoutContextProvider>
);

export default AppLayout;
