import { useEffect } from "react";
import { Box, Grid, Paper, Avatar } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

import Aspas from "../../Image/quote.svg";
import lelyLogo from "../../Image/lelylogo.svg";

const logoCresol =
  "https://pbs.twimg.com/profile_images/1375141501785767954/leBMaRF9_400x400.jpg";

const bgImage =
  "https://images.unsplash.com/photo-1620931688541-605e52dc27ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

export default function Patroc(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box
      style={{
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundColor: "#34343",
        backgroundImage: `url(${bgImage})`
      }}
      fontFamily={props.fontFamily}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box padding={"79px 0px 79px 0px"} display="flex" flexDirection="column">
        <Box
          data-aos="fade-up"
          color="#fff"
          fontSize="2.25rem"
          fontWeight="700"
          padding={2}
          textAlign="center"
        >
          Nossos Colaboradores
        </Box>
        <Box
          data-aos="fade-up"
          fontSize="1.0625rem"
          lineHeight={"1.55em"}
          padding={2}
          textAlign="center"
          color="rgba(255, 255, 255, 0.76)"
        >
          Somos gratos pelo trabalho árduo dos nossos colaboradores
          profissionais e experientes no ramo agrícola.
        </Box>
      </Box>

      <Grid
        style={{
          display: "flex",
          textAlign: "center",
          width: "100%",
          paddingLeft: "20px"
        }}
        container
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box data-aos="fade-up" display="flex" flexDirection="column">
            <Paper style={{ height: 350, backgroundColor: "#ffff" }}>
              <Box
                display="flex"
                flexDirection="column"
                height="83%"
                justifyContent="space-around"
                alignItems="center"
              >
                <img
                  src={Aspas}
                  style={{ height: 30, width: 30 }}
                  alt="aspas"
                />
                <Box
                  fontStyle="italic"
                  fontSize="1.0625rem"
                  lineHeight="1.55em"
                  padding="0.9375rem 1.875rem"
                >
                  Fornecendo soluções financeiras com excelência por meio do
                  relacionamento. Mais de 200 mil famílias cooperadas em dez
                  estados brasileiros.
                </Box>
                <Box color="#3C4858" fontWeight="700" fontSize="1.125rem">
                  Cresol - Cooperativa de Crédito
                </Box>
                <Box
                  color="#999"
                  fontSize=".75rem"
                  style={{ textTransform: "uppercase" }}
                  fontWeight="500"
                >
                  @CresolTradição
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            data-aos="fade"
            display="flex"
            justifyContent="center"
            position="relative"
            top="-68px"
          >
            <Paper
              elevation={3}
              style={{ height: 100, width: 100, borderRadius: "50%" }}
            >
              <Avatar
                src={logoCresol}
                style={{ height: "inherit", width: "inherit" }}
              >
                <Box style={{ backgroundColor: "#8f8f8f" }}></Box>
              </Avatar>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box data-aos="fade-up" display="flex" flexDirection="column">
            <Paper style={{ height: 350, backgroundColor: "#ffff" }}>
              <Box
                display="flex"
                flexDirection="column"
                height="83%"
                justifyContent="space-around"
                alignItems="center"
              >
                <img
                  src={Aspas}
                  style={{ height: 30, width: 30 }}
                  alt="aspas"
                />
                <Box
                  fontStyle="italic"
                  fontSize="1.0625rem"
                  lineHeight="1.55em"
                  padding="0.9375rem 1.875rem"
                >
                  Produtores de leite de mais de 60 países em todo o mundo
                  escolhem os nossos produtos e serviços.
                </Box>
                <Box color="#3C4858" fontWeight="700" fontSize="1.125rem">
                  Lely
                </Box>
                <Box
                  color="#999"
                  fontSize=".75rem"
                  style={{ textTransform: "uppercase" }}
                  fontWeight="500"
                >
                  @LelynoBrasil
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            data-aos="fade"
            display="flex"
            justifyContent="center"
            position="relative"
            top="-68px"
          >
            <Paper
              elevation={3}
              style={{
                height: 100,
                width: 159,
                borderRadius: "50%",
                backgroundColor: "#c30a14"
              }}
            >
              <Avatar
                src={lelyLogo}
                style={{ height: "inherit", width: "inherit" }}
              >
                {/* <Box style={{ backgroundColor: "#c30a14" }}></Box> */}
              </Avatar>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box data-aos="fade-up" display="flex" flexDirection="column">
            <Paper style={{ height: 350, backgroundColor: "#ffff" }}>
              <Box
                display="flex"
                flexDirection="column"
                height="83%"
                justifyContent="space-around"
                alignItems="center"
              >
                <img
                  src={Aspas}
                  style={{ height: 30, width: 30 }}
                  alt="aspas"
                />
                <Box
                  fontStyle="italic"
                  fontSize="1.0625rem"
                  lineHeight="1.55em"
                  padding="0.9375rem 1.875rem"
                >
                  Seus produtos, todos os kits que eu baixei do seu site e com
                  os quais trabalhei são tão legais! Adoro as misturas de cores,
                  os cartões ... tudo. Continue com o ótimo trabalho!
                </Box>
                <Box color="#3C4858" fontWeight="700" fontSize="1.125rem">
                  Banco Cresol
                </Box>
                <Box
                  color="#999"
                  fontSize=".75rem"
                  style={{ textTransform: "uppercase" }}
                  fontWeight="500"
                >
                  @CresolTradição
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            data-aos="fade"
            display="flex"
            justifyContent="center"
            position="relative"
            top="-68px"
          >
            <Paper
              elevation={3}
              style={{ height: 100, width: 100, borderRadius: "50%" }}
            >
              <Avatar
                src={logoCresol}
                style={{ height: "inherit", width: "inherit" }}
              >
                <Box style={{ backgroundColor: "#8f8f8f" }}></Box>
              </Avatar>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
