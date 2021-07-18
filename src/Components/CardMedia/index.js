import React from "react";
import { Box, Card, CardActionArea, CardMedia, Paper } from "@material-ui/core";

import Aos from "aos";
import "aos/dist/aos.css";

import logo from "../../Image/logo.svg";

const img =
  "https://images.unsplash.com/photo-1621568493470-1167246afb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80";

export default function MyCard(props) {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Paper elevation={4} style={{ width: "100%" }}>
      <CardActionArea style={{ flexGrow: 1 }}>
        <Box display="flex">
          <Card
            style={{
              borderRadius: 0,
              height: "100vh",
              width: "100%",
              backgroundColor: "#e8h9z9"
              // minWidth: "300px"
            }}
          >
            <CardMedia image={img} style={{ height: "inherit" }}></CardMedia>

            <Box
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="6vw"
              position="relative"
              height="inherit"
              top="-100%"
            >
              <Box
                fontFamily={props.fontFamily}
                display="flex"
                height="100%"
                // alignContent="center"
                // textAlign="center"
                flexDirection="column"
              >
                <Box display="flex" height="15%" justifyContent="flex-end">
                  <img
                    data-aos="fade"
                    data-aos-delay="1500"
                    style={{ height: "10vw", width: "10vw" }}
                    src={logo}
                    alt="logo"
                  />
                </Box>
                <Box
                  padding="0px 13px 0px 13px"
                  data-aos-delay="1000"
                  height="85%"
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                >
                  <Box data-aos="fade-up">Todo Sábado 8h 30 na TV Sudoeste</Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </CardActionArea>
    </Paper>
  );
}
