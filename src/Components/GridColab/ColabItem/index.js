import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardActions,
  IconButton,
  Button,
  makeStyles
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowBack from "@material-ui/icons/ArrowBack";

// import data from "../data.js";

const useStyles = makeStyles((theme) => ({
  boxPrinc: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      height: "100vh"
    }
  },
  cardMedia: {
    borderRadius: 0,
    // marginLeft: "-4vw",
    // marginRight: "-4vw",
    overflow: "hidden",
    width: "calc(100%)",
    [theme.breakpoints.down("sm")]: {
      height: "inherit"
    },
    [theme.breakpoints.up("md")]: {
      height: "60vh"
    }
  },
  cardPrinc: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100vw"
    },
    [theme.breakpoints.up("md")]: {
      height: "60vh",
      display: "flex",
      alignItems: "center"
    }
  },
  boxImage: {
    height: "inherit",
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  }
}));
export default function ColabItem(props) {
  const data = props.data;
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();
  const [dataColab, setDataColab] = useState({ open: false, data: null });

  useEffect(() => {
    window.scrollTo(0, 0);
    const state = retornarState();
    state !== null ? setDataColab(state) : history.push(props.pathName);
  }, []);

  function retornarState() {
    let dataReturn = null;
    for (let index = 0; index < data.length; index++) {
      if (data[index].search.toString() === id) {
        dataReturn = { open: true, data: data[index] };
      }
    }
    return dataReturn !== null ? dataReturn : null;
  }

  function retornarConteudo(ADataColab) {
    return (
      <Container maxWidth="xl">
        <Box
          fontFamily={props.fontFamily}
          paddingTop={"70px"}
          paddingBottom={"70px"}
          display="flex"
          flexDirection="column"
        >
          <Box className={styles.boxPrinc}>
            <div data-aos="fade-left" style={{ width: "100%" }}>
              <Box height="inherit">
                <Box display="flex" paddingLeft="10px" marginBottom="24px">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={props.pathName}
                  >
                    <Button style={{ fontFamily: props.fontFamily }}>
                      <ArrowBack />
                      <Box margin="0px 9px 0px 9px">{props.descButton}</Box>
                    </Button>
                  </Link>
                </Box>
                <Box
                  style={{ textTransform: "uppercase" }}
                  marginBottom="20px"
                  color="#1a1b25"
                  lineHeight=".8885em"
                  fontSize="calc(1.625rem + 34 * ((100vw - 26.25rem) / 860))"
                >
                  {ADataColab.nome}
                </Box>
                <Box
                  style={{ textTransform: "uppercase" }}
                  marginBottom="20px"
                  color="#1a1b25"
                  lineHeight=".8885em"
                  fontSize="calc(1.625rem + 34 * ((100vw - 26.25rem) / 860))"
                >
                  {ADataColab.sobreNome}
                </Box>
                <Box height="50px" marginBottom="20px">
                  <CardActions style={{ padding: "6px" }}>
                    <IconButton
                      style={{ border: "1px solid rgb(0 0 0 / 20%)" }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      style={{ border: "1px solid rgb(0 0 0 / 20%)" }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </CardActions>
                </Box>
                <Box
                  fontSize="calc(1.125rem + 4 * ((100vw - 26.25rem) / 860))"
                  lineHeight="1.56em"
                  marginBottom="20px"
                >
                  {ADataColab.cargo}
                </Box>
                <Box
                  fontSize="calc(.875rem + 3 * ((100vw - 26.25rem) / 860))"
                  lineHeight="1.625em"
                  opacity=".7"
                  marginBottom="1.6em"
                >
                  {ADataColab.descricao1}
                </Box>
                <Box
                  fontSize="calc(.875rem + 3 * ((100vw - 26.25rem) / 860))"
                  lineHeight="1.625em"
                  opacity=".7"
                  marginBottom="1.6em"
                >
                  {ADataColab.descricao2}
                </Box>
              </Box>
            </div>

            <Box className={styles.boxImage}>
              <div data-aos="fade-up" style={{ width: "100%" }}>
                <Card className={styles.cardPrinc}>
                  <CardActionArea
                    style={{
                      height: "inherit",
                      width: "calc(100%)"
                    }}
                  >
                    {/* <CardMedia
                    className={styles.cardMedia}
                    image={ADataColab.img}
                  /> */}
                    <img
                      // onLoad={() => refSkeleton.current.remove()}
                      className={styles.cardMedia}
                      alt={"imgColab"}
                      key={props.key}
                      src={
                        ADataColab.imgItem ? ADataColab.imgItem : ADataColab.img
                      }
                    />
                  </CardActionArea>
                </Card>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  }

  return dataColab.open ? retornarConteudo(dataColab.data) : false;
  // <h1>Colaborador não encontrado </h1>
}
