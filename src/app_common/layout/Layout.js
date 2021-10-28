import React, { Fragment } from "react";
import Header from "../../components/layout/header/Header";
import Drawer from "../../components/layout/drawer/Drawer";
// import Footer from "./footer";
import Container from "@mui/material/Container";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Drawer />
    <Container style={{ paddingTop: 60 }} maxWidth="lg">
      {children}
    </Container>
  </Fragment>
);

export default Layout;
