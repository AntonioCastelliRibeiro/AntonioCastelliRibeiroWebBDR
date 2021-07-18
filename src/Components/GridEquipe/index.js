import { useEffect } from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";

import EquipeCapaApresent from "./EquipeCapaApresent";

import EquipeCapaPrinc from "../GridColab/ColabCapaPrinc";

import dataEquipe from "./data.js";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    paddingTop: "70px",
    // paddingBottom: "70px",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
    // [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "0px",
      paddingRight: "16px"
    }
    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: "0px",
    //   paddingRight: "8px"
    // }
  }
}));

const C_ABOUT_EQUIPE =
  "https://images.unsplash.com/photo-1476554123255-b0ff6b30dcd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";

export default function GridEquipe(props) {
  const styles = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        <EquipeCapaApresent
          fontFamily={props.fontFamily}
          img={C_ABOUT_EQUIPE}
          title={"NOSSA EQUIPE"}
          fontSize={"7vw"}
        />{" "}
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
              <Box
                textAlign="center"
                fontSize="30px"
                fontWeight={200}
                lineHeight="1.1667"
              >
                Nosso pessoal tem experiência, compromisso e conexões para
                ajudar empreendedores e fundadores a aumentar suas chances de
                sucesso
              </Box>
            </Box>
            <Grid
              container
              style={{
                margin: 0,
                width: "100%",
                paddingTop: "70px",
                paddingBottom: "70px"
              }}
            >
              {dataEquipe.map((e, key) => {
                return (
                  <Grid
                    key={key}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.gridItem}
                  >
                    <EquipeCapaPrinc
                      isProfile
                      // key={website.description}
                      fontFamily={props.fontFamily}
                      search={e.search}
                      hexa={e.hexa}
                      title={e.nome + " " + e.sobreNome}
                      description={e.cargo}
                      image={e.img}
                      // setarColabItem={() => onSetColabItem(e.search)}
                    />
                    {/* <EquipeCapa
                      fontFamily={props.fontFamily}
                      {...e}
                      src={e.img}
                    /> */}
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
