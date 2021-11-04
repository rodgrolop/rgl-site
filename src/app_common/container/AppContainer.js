import React from "react";

// Layout MUI resources
import makeStyles from "@mui/styles/makeStyles";
import Container from "@mui/material/Container";

// Custom styles
import styles from "./styles";

const useStyles = makeStyles(styles);

const AppContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      {children}
    </Container>
  );
};

export default AppContainer;
