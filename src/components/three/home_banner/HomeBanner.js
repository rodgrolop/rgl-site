import React from "react";

// Layout MUI resources
import makeStyles from "@mui/styles/makeStyles";

import { Canvas } from "@react-three/fiber";

import BoxTest from "./BoxTest";

// Custom styles
import styles from "./styles";

const useStyles = makeStyles(styles);

const HomeBanner = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <BoxTest position={[-1.2, 0, 0]} />
        <BoxTest position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default HomeBanner;
