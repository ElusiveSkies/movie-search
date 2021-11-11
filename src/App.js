import Footer from "./components/Footer";
import React from "react";

import "./global.css";

import ContentContainer from "./components/ContentContainer";
import { makeStyles } from "@material-ui/core";

const contentStyles = makeStyles((theme) => ({
  content: {
    paddingTop: "45px",
    minHeight: "calc(100vh - 265px)",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "100px",
    },
  },
}));

export default function App() {
  const { content } = contentStyles();
  return (
    <>
      <div className={content}>
        <ContentContainer />
      </div>
      <Footer />
    </>
  );
}