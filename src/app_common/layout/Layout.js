import React, { Fragment } from "react";

// Custom components
import Header from "../../components/layout/header/Header";
import Drawer from "../../components/layout/drawer/Drawer";
// import Footer from "./footer";.

// Layout MUI resources
import AppContainer from "../container/AppContainer";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Drawer />
    {children}
  </Fragment>
);

export default Layout;
