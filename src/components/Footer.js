import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Image from 'material-ui-image';

import "../global.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    fontSize: "large",
    color: "white",
    fill: "white",
    padding: "20px 0px",
    marginTop: "36px",
    width: "100%",
    position: "absolute",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "10px",
    },
  },
  lowerLinks: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  footerButtons: {
    fontSize: "42px",
    color: "white",
    "&:hover": {
      color: "#b6b6b6",
    },
  },
  footerCopyright: {
    fontSize: "24px",
    textAlign: "center",
    paddingTop: "15px",
    [theme.breakpoints.down('sm')]: {
      paddingBottom: "10px",
    },
  },
}));

export default function Footer() {
  const { footer, lowerLinks, footerButtons, footerCopyright } = useStyles();
  return (
    <footer className={footer}>
      <Container>
        <div>
          <div className={lowerLinks}>
            <Link href="https://github.com/ElusiveSkies" target="_blank">
              <GitHubIcon fontSize="42px" className={footerButtons} />
            </Link>
            <Link href="mailto: elusiveskies@gmail.com" target="_blank">
              <EmailIcon fontSize="42px" className={footerButtons} />
            </Link>
          </div>
          <div className={footerCopyright}>
            <div>© 2021 Copyright Casey Twine</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}