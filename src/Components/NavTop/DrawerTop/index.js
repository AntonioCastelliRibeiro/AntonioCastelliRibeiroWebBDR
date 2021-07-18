import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Box, Drawer, makeStyles } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const myMakeStyles = makeStyles({
  boxBase: {
    borderBottom: "0.01px solid transparent",
    transition: "border-bottom 0.4s ease-in",
    transitionTimingFunction: "linear",
    "&:hover, &:focus ": {
      cursor: "pointer",
      borderBottom: "0.01px solid white"
    }
  },
  boxTitte: {
    fontSize: "4.6976vw"
  },
  boxSubTitte: {
    fontSize: "3.74976vw"
  },
  boxSocial: {
    fontSize: "1.50272vw",
    textTransform: "uppercase",
    letterSpacing: ".1em"
  }
});

const imagePadrao =
  "https://images.unsplash.com/photo-1594487605754-89b1b20298ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80";
const imageTitle1 =
  "https://images.unsplash.com/photo-1542836712-ba67e93bf8e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1918&q=80";

const imageTitle2 =
  "https://images.unsplash.com/photo-1618435268978-52267a0a2875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80";

const imageTitle3 =
  "https://images.unsplash.com/photo-1572002821845-39b11fee263d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80";

const imageTitle4 =
  "https://images.unsplash.com/photo-1542214970-beb9fc929948?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80";

export default function DrawerTop(props) {
  const history = useHistory();
  const styles = myMakeStyles();
  const [onMouseHover, setMouseHover] = useState({
    image: imagePadrao
  });

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (props.open) setMouseHover({ image: imagePadrao });
  }, [props.open]);

  function onCloseProps(APatch) {
    history.push(APatch);
    props.onClose();
  }

  return (
    <Drawer
      elevation={3}
      transitionDuration={{ appear: 800, enter: 800, exit: 200 }}
      anchor={"top"}
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <Box
        fontFamily={props.fontFamily}
        style={{
          overflow: "hidden",
          width: "100%",
          transition: "background-image 1s ease-in-out",
          transitionDelay: "0.3s",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundImage: `url(${onMouseHover.image})`,
          backgroundRepeat: "round"
        }}
        color="white"
        onKeyDown={props.toggleDrawer(false)}
        display="flex"
        height="100vh"
      >
        <Box
          data-aos="fade-up"
          data-aos-delay="800"
          heihgt="inherit"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            onClick={() => onCloseProps("/")}
            fontWeight={800}
            letterSpacing={2.5}
            heihgt="inherit"
            className={clsx(styles.boxBase, styles.boxTitte)}
            onMouseOver={() =>
              setMouseHover({
                image: imageTitle1
              })
            }
          >
            Bom Dia Rural
          </Box>
          <Box
            onClick={() => onCloseProps("/materias")}
            className={clsx(styles.boxBase, styles.boxSubTitte)}
            heihgt="inherit"
            onMouseOver={() =>
              setMouseHover({
                image: imageTitle2
              })
            }
            // onMouseOut={() =>
            //   setTimeout(() => {
            //     setMouseHover({ image: imagePadrao });
            //   }, 200)
            // }
          >
            Matérias
          </Box>
          <Box
            onClick={() => onCloseProps("/colaboradores")}
            className={clsx(styles.boxBase, styles.boxSubTitte)}
            heihgt="inherit"
            onMouseOver={() =>
              setMouseHover({
                image: imageTitle3
              })
            }
          >
            Colaboradores
          </Box>
          <Box
            onClick={() => onCloseProps("/equipe")}
            className={clsx(styles.boxBase, styles.boxSubTitte)}
            heihgt="inherit"
            onMouseOver={() =>
              setMouseHover({
                image: imageTitle4
              })
            }
          >
            Equipe
          </Box>
          <Box
            onClick={() => onCloseProps("/sobre")}
            className={clsx(styles.boxBase, styles.boxSubTitte)}
            heihgt="inherit"
            onMouseOver={() =>
              setMouseHover({
                image: imagePadrao
              })
            }
          >
            Sobre
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-evenly"
            flexDirection="row"
          >
            <Box
              fontSize=".90272vw"
              style={{ textTransform: "uppercase" }}
              letterSpacing=".1em"
              className={clsx(styles.boxBase, styles.boxSocial)}
            >
              Facebook
            </Box>
            <Box
              fontSize=".90272vw"
              style={{ textTransform: "uppercase" }}
              letterSpacing=".1em"
              className={clsx(styles.boxBase, styles.boxSocial)}
            >
              Instagram
            </Box>
            <Box className={clsx(styles.boxBase, styles.boxSocial)}>
              Youtube
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
