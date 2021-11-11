import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MovieContainer from './MovieContainer';

// import "../../global.css";

const aboutStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#2c3531",
    borderRadius: "20px",
    minHeight: "72vh",
    backgroundColor: "#313533",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    minWidth: "75%",
  },
  gridContent: {
    padding: "20px",
    fontSize: "200%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
    },
  },
  initials: {
    fontSize: "260%",
    backgroundColor: "#313533",
    color: "#fff",
    paddingTop: "5px",
  },
}));

export default function Movie() {
  const { mainGrid, container, content, initials, gridContent } = aboutStyles();
  return (
    <Grid className={mainGrid}>
      <div sm={12} className={container}>
        <Box>
          <Grid container xs={12} className={gridContent}>
            <div xs className={content}>
              <span className={initials}>Movies
              <MovieContainer /></span>
            </div>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}