import { useEffect, memo } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { Box, Button, Grid, Container } from "@material-ui/core";

import ColabImgCapa from "./ColabImgCapa";

import ColabCapaPrinc from "./ColabCapaPrinc";

import dataColab from "./data.js";

import C_TIME_FADE from "../../Comum/Fade";

const C_ABOUT_COLAB =
  "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";
// "https://images.unsplash.com/photo-1533310266094-8898a03807dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

export default memo(function GridColab(props) {
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onSetColabItem(e) {
    setTimeout(() => {
      history.push(`${match.path}/${e}`);
    }, C_TIME_FADE);
  }

  return (
    <>
      <Box>
        <ColabImgCapa
          fontFamily={props.fontFamily}
          img={C_ABOUT_COLAB}
          title={"NOSSOS COLABORADORES"}
          fontSize={"7vw"}
        />
      </Box>
      <Box
        data-aos="fade-up"
        position="relative"
        style={{ backgroundColor: "#fff" }}
      >
        <Box
          fontFamily={props.fontFamily}
          paddingTop="40px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          data-aos="fade"
        >
          <Box fontSize="30px">"A sorte favorece a mente preparada"</Box>
          <Button
            style={{
              width: "180px",
              margin: "30px 0 100px",
              fontWeight: 700,
              border: "1px solid black"
            }}
          >
            Louis Pasteur
          </Button>
        </Box>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            style={{
              paddingBottom: "70px",
              width: "100%",
              margin: 0
            }}
          >
            {dataColab.map((e, key) => {
              return (
                <Grid
                  item
                  key={key + 1}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ColabCapaPrinc
                    // isProfile
                    // key={website.description}
                    fontFamily={props.fontFamily}
                    search={e.search}
                    hexa={e.hexa}
                    title={e.nome + " " + e.sobreNome}
                    description={e.cargo}
                    image={e.img}
                    setarColabItem={() => onSetColabItem(e.search)}
                  />
                  {/* <ColabCapa
                    fontFamily={props.fontFamily}
                    nome={e.nome}
                    sobreNome={e.sobreNome}
                    search={e.search}
                    cargo={e.cargo}
                    setarColabItem={() => onSetColabItem(e.search)}
                    src={e.img}
                  /> */}
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
});

// export default memo(GridColab());
