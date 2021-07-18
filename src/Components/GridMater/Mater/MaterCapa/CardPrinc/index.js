import { useEffect } from "react";
import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles
} from "@material-ui/core";

import ButtonComp from "../../../ButtonComp";

import aos from "aos";

const useStyles = makeStyles((theme) => ({
  boxDesc: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    },
    [theme.breakpoints.up("md")]: {
      width: "33%"
    }
  },
  boxImg: {
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    },
    [theme.breakpoints.up("md")]: {
      width: "67%"
    }
  }
}));

// https://bobbyflay.com/
// https://munjoi.com/
// https://outofthevalley.co.uk/
// https://ester.co/
// https://www.neosoft.ch/en/search-rescue-solutions

export default function Mater(props) {
  const styles = useStyles();

  useEffect(() => {
    aos.init({
      duration: 1000
    });
  }, []);

  function onSetMaterItemProps() {
    props.onSetMaterItem(props.search);
  }
  return (
    <>
      <div style={{ width: "100%" }} data-aos="fade-up">
        <Paper
          elevation={3}
          style={{
            fontFamily: props.fontFamily,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            placeContent: "center space-evenly",
            alignItems: "center",
            height: "490px",
            width: "100%",
            backgroundColor: "#d8caa5"
          }}
        >
          <Box className={styles.boxDesc}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              height="50%"
              padding="25px 25px 25px 25px"
            >
              {/* <Box lineHeight="1">Conteúdo</Box> */}
              <Box fontWeight="800" lineHeight="1" fontSize={25}>
                {props.title}
              </Box>

              <Box display="flex" justifyContent="center" width="100%">
                <Box
                  padding="0vw 5vw 0vw 5vw"
                  fontSize="18px"
                  fontWeight={100}
                  color={"black"}
                  textAlign="center"
                >
                  {props.desc}
                </Box>
              </Box>
              <Box>
                <ButtonComp onClick={() => onSetMaterItemProps()} />
              </Box>
            </Box>
          </Box>
          <Box className={styles.boxImg}>
            <Box
              display="flex"
              height="100%"
              justifyContent="center"
              width="100%"
            >
              <CardActionArea
                onClick={() => onSetMaterItemProps()}
                style={{ height: "100%", width: "100%" }}
              >
                <Card
                  onLoad={() => console.log("li")}
                  style={{ borderRadius: 0, height: "inherit", width: "100%" }}
                >
                  <CardMedia
                    style={{
                      height: "inherit",
                      width: "inherit"
                    }}
                    image={props.image}
                  ></CardMedia>
                </Card>
              </CardActionArea>
            </Box>
          </Box>
        </Paper>
      </div>
    </>
  );
}
