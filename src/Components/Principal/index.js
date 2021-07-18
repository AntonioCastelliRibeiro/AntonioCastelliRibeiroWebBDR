import { useEffect } from "react";

import useStyles from "./useStyles.js";

import { Box, Grid } from "@material-ui/core";

import CardTerc from "../../Components/CardTerc";
import CardMedia from "../../Components/CardMedia";
import Patroc from "../../Components/Patroc";
import CrSel from "../../Components/CrSel";
import Foot from "../../Components/Foot";

import Movie from "../../Components/Movie";
import CardHover from "../CardHover";

const imgPrinc =
  "https://images.unsplash.com/photo-1620548473886-eb53c0402440?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

export default function Principal(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = useStyles(props);
  return (
    <>
      <Movie />
      <Box
        data-aos="fade-down"
        data-aos-delay="1000"
        fontSize={"10vw"}
        fontWeight={800}
        fontFamily={props.fontFamily}
        color={"white"}
        display="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          "&:hover": { backgroundColor: "blue" }
        }}
        height="100vh"
        width={"100%"}
        position="fixed"
      >
        Bom Dia Rural
      </Box>

      <Box width={"100%"}>
        <div style={{ height: "100vh" }}></div>

        <Box
          data-aos="fade-up"
          // padding="30px"
          margin={"0 auto"}
          position="relative"
          overflow="hidden"
          style={{ zIndex: 2, backgroundColor: "#ffffff" }}
        >
          <Box
            data-aos="fade"
            data-aos-delay="200"
            fontSize={"30px"}
            fontWeight={500}
            fontFamily={props.fontFamily}
            color={"black"}
            display="flex"
            textAlign={"center"}
            // margin={"0 auto"}
            style={{
              zIndex: 2,
              lineHeight: 2,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
            // height="240px"
            width={"100%"}
            paddingTop={5}
            paddingBottom={10}
          >
            Ainda assim, existem dúvidas a respeito de como a revolução dos
            costumes assume importantes posições no estabelecimento de
            alternativas às soluções ortodoxas.
          </Box>
          <CardTerc fontFamily={props.fontFamily} flexDirection="row" />
          <Box
            // className="item1"
            data-aos="fade-up"
            // display="flex"
            // justifyContent="center"
            data-aos-delay="300"
          >
            <CardHover fontFamily={props.fontFamily} />
            {/* <CardMedia
              fontFamily={props.fontFamily}
              img={imgPrinc}
              tittle={"Estações"}
              isSM={false}
              isTerImg={true}
            /> */}
          </Box>

          <div data-aos="fade-up" data-aos-delay="300">
            <Patroc fontFamily={props.fontFamily} />
          </div>

          <div data-aos="fade-up">
            <CrSel fontFamily={props.fontFamily} />
          </div>
          {/*
          <div className="item" data-aos="slide-up">
            7
          </div>

          <div className="item" data-aos="flip-up">
            8
          </div>
          <div className="item" data-aos="flip-down">
            9
          </div>
          <div className="item" data-aos="flip-right">
            10
          </div>
          <div className="item" data-aos="flip-left">
            11
          </div> */}
        </Box>
      </Box>
    </>
  );
}
