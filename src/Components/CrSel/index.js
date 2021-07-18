import React from "react";
import "./styles.css";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardCrlSel from "../CardCrSel";

const imgAvatar1 =
  "https://demos.creative-tim.com/material-kit-pro-react/static/media/kendall.19201574.jpg";

const imgAvatar2 =
  "https://demos.creative-tim.com/material-kit-pro-react/static/media/christian.3dc80c1d.jpg";

export default function SectionCarousel(props) {
  return (
    <div
      style={{
        height: 400,
        padding: "40px",
        background: "radial-gradient(ellipse at center,#585858 0,#232323 100%)",
        backgroundColor: "#343434",
        backgroundSize: "550% 450%"
      }}
    >
      <Carousel
        dots={true}
        speed={500}
        infinite={true}
        autoplay={true}
        autoplaySpeed={4500}
        className={"crSelPrinc"}
        lazyLoad={"ondemand"}
        dotsClass="crSelPoint"
        arrows={true}
        adaptiveHeight={true}
        slidesToShow={1}
        slidesToScroll={1}
        slide={2}
      >
        <CardCrlSel fontFamily={props.fontFamily} image={imgAvatar1} />
        <CardCrlSel fontFamily={props.fontFamily} image={imgAvatar2} />
      </Carousel>
    </div>
  );
}
