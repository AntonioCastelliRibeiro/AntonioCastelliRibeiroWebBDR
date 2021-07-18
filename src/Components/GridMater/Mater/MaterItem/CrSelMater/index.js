import React, { useState, useRef, useEffect } from "react";
import { Box, Tooltip, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./styles.css";

import C_TIME_FADE from "../../../../../Comum/Fade";

import clsx from "clsx";

import Carousel from "react-slick";
import CardCrlSel from "./CardCrSelMater";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  divCarrouselBase: {
    backgroundSize: "550% 450%"
  },
  divCarrousel: {
    padding: "40px",
    height: 500,
    background:
      "radial-gradient(at center center, rgb(228 228 228) 0px, rgb(116 116 116) 100%) 0% 0% / 550% 450% rgb(52, 52, 52)",
    backgroundColor: "#343434"
  },
  divCarrouselModal: {
    height: "100vh",
    padding: "0px 40px 0px 40px",
    background: "#343434",
    backgroundColor: "#343434"
  },
  crSelPrinc: {
    height: "500px"
  },
  crSelPrincModal: {
    height: "90vh"
  }
});

export default function SectionCarousel(props) {
  const styles = useStyles();
  const sliderRef = useRef(null);
  const [onNumberCarousel, setNumberCarousel] = useState(0);

  useEffect(() => {
    if (props.isModal) {
      sliderRef.current.slickGoTo(props.numberCarousel);
    }
  }, [props.isModal]);

  function setCloseModalProps() {
    setTimeout(() => {
      props.setCloseModal();
    }, C_TIME_FADE);
  }

  function retornarButtonClose() {
    if (props.isModal) {
      return (
        <Box
          display="flex"
          justifyContent="flex-end"
          width="100%"
          position="absolute"
        >
          <Tooltip title="Fechar">
            <IconButton
              onClick={() => setCloseModalProps()}
              style={{ color: "rgb(255 255 255)" }}
            >
              <Close></Close>
            </IconButton>
          </Tooltip>
        </Box>
      );
    } else return false;
  }

  return (
    <>
      {retornarButtonClose()}

      <div
        className={clsx(
          styles.divCarrouselBase,
          props.isModal ? styles.divCarrouselModal : styles.divCarrousel
        )}
      >
        <Carousel
          ref={sliderRef}
          className={props.isModal ? styles.crSelPrincModal : styles.crSelPrinc}
          centerPadding="60px"
          lazyLoad={"ondemand"}
          dotsClass="crSelPoint"
          arrows={true}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          fade={true}
          focusOnSelect={true}
          afterChange={(e) => setNumberCarousel(e)}
        >
          {props.dataPhoto.map((e, count) => {
            return (
              <CardCrlSel
                isModal={props.isModal}
                key={count}
                onShowModal={() => props.onShowModal(onNumberCarousel)}
                image={e}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
