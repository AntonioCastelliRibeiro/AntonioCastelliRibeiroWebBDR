import { useHistory, useRouteMatch } from "react-router-dom";

import { useEffect } from "react";

import { Box, Container, Grid, Hidden } from "@material-ui/core";

import objMater from "./data.js";

// import CardPrinc from "../../Components/Mater/CardPrinc";
// import Mater from "../../Components/Mater";

import CardPrinc from "./Mater/MaterCapa/CardPrinc";
import CardSec from "./Mater/MaterCapa/CardSec";

import MaterCapaApresent from "./MaterCapaApresent";

import C_TIME_FADE from "../../Comum/Fade";

export default function GridMater(props) {
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onSetMaterItem(e) {
    setTimeout(() => {
      history.push(`${match.path}/${e}`);
    }, C_TIME_FADE);
  }

  function retornarPrinc(e) {
    return (
      <>
        <Hidden xsDown>
          <CardPrinc
            fontFamily={props.fontFamily}
            image={e.image}
            desc={e.desc}
            title={e.title}
            search={e.search}
            onSetMaterItem={(e) => onSetMaterItem(e)}
          />
        </Hidden>
        <Hidden smUp>{retornarSec(e)}</Hidden>
      </>
    );
  }

  function retornarSec(e) {
    return (
      <CardSec
        fontFamily={props.fontFamily}
        image={e.image}
        desc={e.desc}
        title={e.title}
        search={e.search}
        onSetMaterItem={(e) => onSetMaterItem(e)}
      />
    );
  }

  return (
    <>
      <MaterCapaApresent
        fontFamily={props.fontFamily}
        img={
          "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        }
        title={"MATÉRIAS"}
        fontSize={"7vw"}
      />
      <Box
        data-aos="fade-up"
        position="relative"
        style={{ backgroundColor: "#fff" }}
      >
        <Container maxWidth="xl">
          <Box
            fontFamily={props.fontFamily}
            paddingTop="40px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            data-aos="fade"
          >
            <Box fontSize="30px" textAlign="center">
              Fique por dentro sobre as novidades do agronegócio na região do
              Sudoeste do Paraná
            </Box>
          </Box>

          <Grid container spacing={2} style={{ paddingTop: "70px" }}>
            {objMater.map((e, count) => (
              <Grid
                key={count + 1}
                item
                xs={12}
                sm={count === 0 ? 12 : 6}
                md={count === 0 ? 12 : 4}
                lg={count === 0 ? 12 : 4}
                xl={count === 0 ? 12 : 4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {count === 0 ? retornarPrinc(e) : retornarSec(e)}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
