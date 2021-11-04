import React from "react";

// Layout MUI resources
import makeStyles from "@mui/styles/makeStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// Custom components
import MenuButton from "../menu_button/MenuButton";

// Gatsby components
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Custom styles
import styles from "./styles";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <MenuButton />
        <Link to="/">
          <StaticImage
            src="../../../assets/images/logo.png"
            alt="Caffeine Logo"
            width={64}
            height={64}
            placeholder="blurred"
            layout="constrained"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className={classes.logo}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
