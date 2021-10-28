import React, { useContext } from "react";

// Context
import { LayoutContext } from "../../../context";

// Layout MUI resources
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MenuButton = () => {
  const { dispatch } = useContext(LayoutContext);

  const openDrawer = () => {
    dispatch({ type: "openDrawer" });
  };

  return (
    <IconButton
      color="inherit"
      edge="start"
      aria-label="menu"
      onClick={openDrawer}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
