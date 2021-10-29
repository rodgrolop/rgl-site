import React from "react";

// Layout MUI resources
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuButton from "../menu_button/MenuButton";

// Layout MUI dependencies
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <MenuButton />
        <StaticImage
          src="../../../assets/images/logo.png"
          alt="Caffeine Logo"
          width={64}
          height={64}
          placeholder="blurred"
          layout="fixed"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
