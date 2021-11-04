import React, { useEffect, useRef } from "react";

// Layout MUI resources
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Custom components
import HomeBanner from "../components/three/home_banner/HomeBanner";
import Link from "../components/Link";
import Copyright from "../components/Copyright";

export default function Index() {
  useEffect(() => {}, []);

  return (
    <>
      <HomeBanner />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          RGL
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <Copyright />
      </Box>
    </>
  );
}
