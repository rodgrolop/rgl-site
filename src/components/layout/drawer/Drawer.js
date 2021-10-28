import React, { useContext } from "react";

// Context
import { LayoutContext } from "../../../context";

// Layout MUI resources
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

const Drawer = () => {
  const { dispatch, layoutState } = useContext(LayoutContext);
  const { open, anchor, variant } = layoutState;

  const openDrawer = () => dispatch({ type: "openDrawer" });

  const closeDrawer = () => dispatch({ type: "closeDrawer" });

  return (
    <SwipeableDrawer
      anchor={anchor}
      variant={variant}
      open={open}
      onOpen={openDrawer}
      onClose={closeDrawer}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div
        role="presentation"
        onClick={() => closeDrawer()}
        onKeyDown={() => closeDrawer()}
      >
        <Typography variant="h6" color="inherit">
          Drawer Content
        </Typography>
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
