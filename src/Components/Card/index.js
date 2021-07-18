import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";

import { useSpring, animated } from "react-spring";

const img1 =
  "https://images.unsplash.com/photo-1530844230930-8168b52d2d88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";

// import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
  princ: {
    // height: 550,
    // position: "absolute",
    // height: '300vh',
    display: "flex",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: (props) => props.paddingTop
  },
  root: {
    // maxWidth: 304,

    width: 300,
    margin: "auto",
    borderRadius: 0,
    position: "absolute"
  },
  content: {
    // padding: 24
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12
  },
  title: {
    color: "#fff",
    letterSpacing: "2px"
  },
  CardMedia: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    zIndex: "0",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    backgroundPosition: "center center"
  }
}));

export const MuiCard = React.memo(function MuiCard1(props) {
  const styles = useStyles(props);
  const stylesSpring = useSpring({
    // paddingLeft: props.isMobile ? (props.isTerImg ? '2%' : '3%') : props.isTerImg ? '20%' : '64%',
    // paddingLeft: "3%",
    // maxWidth: 304,
    margin: "auto",
    borderRadius: 0,
    // position: 'absolute',
    width: "100%"
    // config: config.molasses
  });
  return (
    <Grid item style={{ padding: 0 }} xs={12} sm={10} md={6} lg={6} xl={6}>
      <animated.div style={stylesSpring} className={styles.princ}>
        <Card className={styles.root}>
          <CardMedia
            className={styles.CardMedia}
            image={props.img ? props.img : img1}
          />
          <CardActionArea>
            <CardContent className={styles.content}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={360}
                color={"common.white"}
                textAlign={"center"}
              >
                <h1 className={styles.title}>
                  {props.tittle ? props.tittle : "Fazenda"}
                </h1>
                <p>O lugar onde tudo inicia no processo de produção.</p>
              </Box>
              <Typography className={styles.cta} variant={"overline"}>
                Explorar
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <Box
          position={"relative"}
          top={437}
          paddingLeft={28}
          // display="flex"
          height="100%"
          flexDirection="column"
          justifyContent="flex-end"
          textAlign={"left"}
        >
          <Box fontSize={25}>{props.tittle ? props.tittle : "Fazenda"}</Box>
          <Box>O lugar onde tudo inicia no processo de produção.</Box>
        </Box> */}
      </animated.div>
    </Grid>
  );
});

export default MuiCard;
