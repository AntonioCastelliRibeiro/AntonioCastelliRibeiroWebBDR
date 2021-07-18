import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Modal
} from "@material-ui/core";

import C_TIME_FADE from "../../../../Comum/Fade";

import ButtonComp from "../../ButtonComp";

import CrSelMater from "./CrSelMater";

import Slider from "./CrSelMater/Slider";

import objData from "../../data.js";

// import logo from "../../Image/logo.svg";

// const image =
//   "https://drive.google.com/uc?id=1NAgbyMQy8nhcvXpNCCT5JU__xjrMuB_D";

// const img1 = "https://drive.google.com/uc?id=1KVufi5yIvVQLa-XpEimzEX4vQGyTO_bV";
// // "https://demos.creative-tim.com/material-kit-pro-react/static/media/kendall.19201574.jpg";
// const img2 = "https://drive.google.com/uc?id=1n9mYBgENNF47LbUTNxuUb8Qhu5P2bK1n";

const useStyles = makeStyles((theme) => ({
  paperPrinc: {
    fontFamily: (props) => props.fontFamily,
    paddingTop: "70px",
    border: "none",
    display: "flex",
    // flexDirection: "row-reverse",
    // flexDirection: "column-reverse",
    justifyContent: "space-evenly",
    placeContent: "center space-evenly",
    alignItems: "center",

    width: "100%",
    backgroundColor: "transparent",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column-reverse",
      height: "750px",
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column-reverse",
      height: "750px",
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      height: "550px",
      flexDirection: "row-reverse"
    }
  },
  boxDescRoot: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "45%"
    }
  },
  boxDesc: {
    height: "188px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "4vw",
    [theme.breakpoints.up("sm")]: {
      height: "55%"
    },
    [theme.breakpoints.up("md")]: {
      height: "50%"
    }
  },
  boxImg: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  }
}));

// https://bobbyflay.com/
// https://munjoi.com/
// https://outofthevalley.co.uk/
// https://ester.co/
// https://www.neosoft.ch/en/search-rescue-solutions

export default function MaterItem(props) {
  const { id } = useParams();
  const data = objData;
  const history = useHistory();
  const styles = useStyles(props);
  const [onPlayMovie, setPlayMovie] = useState(false);
  const [onShowModal, setShowModal] = useState({
    open: false,
    numberCarousel: 0
  });

  const [dataMater, setDataMater] = useState({ open: false, data: null });

  useEffect(() => {
    window.scrollTo(0, 0);
    const state = retornarState();
    state !== null ? setDataMater(state) : history.push(props.pathName);
  }, []);

  function retornarState() {
    let dataReturn = null;
    for (let index = 0; index < data.length; index++) {
      if (data[index].search.toString() === id) {
        return (dataReturn = { open: true, data: data[index] });
      }
    }
    return dataReturn !== null ? dataReturn : null;
  }

  function setPlayMovieTime() {
    setTimeout(() => {
      setPlayMovie(true);
    }, C_TIME_FADE);
  }

  function retornarImgMovie() {
    if (onPlayMovie) {
      return (
        <iframe
          // allowfullscreen
          allow="fullscreen"
          title="movie"
          style={{ border: "none" }}
          width="100%"
          height="inherit"
          src={retornarLinkMovie()}
        ></iframe>
      );
    } else {
      return (
        <div style={{ height: "inherit", width: "100%" }} data-aos="fade-left">
          <CardActionArea
            onClick={() => setPlayMovieTime()}
            style={{ height: "100%", width: "100%" }}
          >
            <Card style={{ borderRadius: 0, height: "inherit", width: "100%" }}>
              <CardMedia
                style={{
                  height: "inherit",
                  width: "inherit"
                }}
                image={dataMater.data.image}
              ></CardMedia>
            </Card>
          </CardActionArea>
        </div>
      );
    }
  }

  function retornarLinkMovie() {
    return `https://www.youtube.com/embed/${
      dataMater.data.link
    }?mute=0&autoplay=${onPlayMovie ? "1" : "0"}`;
  }

  function retornarConteudo() {
    return (
      <>
        <header>
          <Modal
            style={{ top: "0vh", zIndex: 1401 }}
            open={onShowModal.open}
            onClose={(e) =>
              setShowModal({ open: false, ...onShowModal.numberCarousel })
            }
            children={
              <Slider
                onModal
                images={dataMater.data.slideImage}
                setCloseModal={() =>
                  setShowModal({ open: false, ...onShowModal.numberCarousel })
                }
              />
              // <CrSelMater
              //   isModal={true}
              //   numberCarousel={onShowModal.numberCarousel}
              //   dataPhoto={objPhoto}
              //   onShowModal={() => false}
              //   setCloseModal={() =>
              //     setShowModal({ open: false, ...onShowModal.numberCarousel })
              //   }
              // />
            }
          />

          <Paper elevation={0} className={styles.paperPrinc}>
            <Box className={styles.boxDescRoot}>
              <div style={{ width: "100%" }} data-aos="fade-up">
                <Box className={styles.boxDesc}>
                  <Box
                    fontWeight="700"
                    lineHeight="1"
                    letterSpacing="0"
                    fontSize={"46px"}
                  >
                    {dataMater.data.title}
                  </Box>

                  <Box display="flex" justifyContent="left" width="100%">
                    <Box
                      // padding="0vw 5vw 0vw 5vw"
                      fontSize="20px"
                      lineHeight="1.5"
                      fontWeight={"400"}
                      textAlign="left"
                    >
                      {dataMater.data.desc}
                    </Box>
                  </Box>
                  <Box>
                    <ButtonComp
                      name="Assistir"
                      onClick={() => setPlayMovieTime()}
                    />
                  </Box>
                </Box>
              </div>
            </Box>
            <Box className={styles.boxImg}>
              <Box
                display="flex"
                height="100%"
                justifyContent="center"
                width="100%"
              >
                {retornarImgMovie()}
              </Box>
            </Box>
          </Paper>
        </header>
        <article>
          <Box fontFamily={props.fontFamily} padding="9vw 9vw 8vw 9vw">
            <Box
              fontWeight={400}
              fontSize={"20px"}
              lineHeight="1.5"
              letterSpacing={0}
              marginBottom={"1.2em"}
            >
              <div
                style={{ height: "inherit", width: "100%" }}
                data-aos="fade-up"
              >
                Passei férias ao longo da costa de Amalfi e me apaixonei pelos
                proprietários e pela equipe da Lo Scoglio em Nerano. Eles me
                influenciaram de uma forma que parece muito mais substancial do
                que qualquer outro momento ou evento já me tocou.
              </div>
            </Box>
            <Box
              fontWeight={400}
              fontSize={"20px"}
              lineHeight="1.5"
              letterSpacing={0}
              marginBottom={"1.2em"}
            >
              <div
                style={{ height: "inherit", width: "100%" }}
                data-aos="fade-up"
              >
                Meus parceiros no Caesar's Palace me deram as ferramentas e os
                recursos para abrir Amalfi, então, como você pode imaginar,
                minha cabeça está enterrada em massa caseira e caldo de peixe
                com aroma de açafrão por enquanto. Quando eu subir para
                respirar, adoraria que você se juntasse a mim… o primeiro Aperol
                Spritz é por minha conta!
              </div>
            </Box>
            <Box
              fontWeight={400}
              fontSize={"20px"}
              lineHeight="1.5"
              letterSpacing={0}
              marginBottom={"1.2em"}
            >
              <div
                style={{ height: "inherit", width: "100%" }}
                data-aos="fade-up"
              >
                O Amalfi acaba de ser inaugurado em Las Vegas em maio de 2021.
                Fique ligado para mais detalhes sobre nossa incrível equipe de
                inauguração e o menu costeiro italiano.
              </div>
            </Box>
          </Box>
        </article>
        <article>
          <div style={{ height: "inherit", width: "100%" }} data-aos="fade-up">
            {/* <CrSelMater
              dataPhoto={dataMater.data.slideImage}
              onShowModal={(e) =>
                setShowModal({ open: true, numberCarousel: e })
              }
            /> */}
            <Slider
              onModal={false}
              images={dataMater.data.slideImage}
              onShowModal={(e) =>
                setShowModal({ open: true, numberCarousel: e })
              }
            />
          </div>
        </article>
      </>
    );
  }

  return dataMater.open ? retornarConteudo(dataMater.data) : false;
}
