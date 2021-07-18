import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  Hidden,
  makeStyles
} from "@material-ui/core";

import ButtonComp from "../../../ButtonComp";

const useStyles = makeStyles({
  paperPrinc: {
    fontFamily: (props) => props.fontFamily,
    padding: "25px 0px 25px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    placeContent: "center space-evenly",
    alignItems: "center",
    height: "450px",
    width: "100%",
    backgroundColor: "#d8caa5"
  },
  divImgPrinc: {
    borderRadius: 0,
    height: 200,
    width: "100%",
    maxWidth: "250px",
    filter: "grayscale(0)",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "translate(-10px,-10px)"
      // filter: "grayscale(0)"
    }
  }
});

// https://bobbyflay.com/
// https://munjoi.com/
// https://outofthevalley.co.uk/
// https://ester.co/
// https://www.neosoft.ch/en/search-rescue-solutions
// https://andyhardy.co/motion
// https://girlculture.com/photography/
// https://omegafunds.impression.studio/team
// https://www.fern.team/allies
// https://www.henamo-stefanshof.be/geschichte/
// https://bac.eeq.ca/en/series

// https://drive.google.com/uc?id= // + ID da imagem compartilhada

export default function CardSec(props) {
  const styles = useStyles(props);

  function onSetMaterItemProps(ACount) {
    props.onSetMaterItem(props.search);
  }

  return (
    <>
      <div style={{ width: "100%" }} data-aos="fade-up">
        <Paper elevation={3} className={styles.paperPrinc}>
          {/* <Box lineHeight="1" fontSize="14px">
            Conteúdo
          </Box> */}
          <Box
            fontWeight="700"
            lineHeight="1.2"
            fontSize="25px"
            fontStyle="normal"
            letterSpacing="-.05em"
          >
            {props.title}
          </Box>
          <Box display="flex" justifyContent="center" width="inherit">
            <Hidden>
              <CardActionArea
                onClick={() => onSetMaterItemProps()}
                className={styles.divImgPrinc}
              >
                <Card
                  style={{
                    borderRadius: 0,
                    height: "inherit",
                    width: "inherit"
                  }}
                >
                  <CardMedia
                    style={{ height: "inherit", width: "inherit" }}
                    image={props.image}
                  ></CardMedia>
                </Card>
              </CardActionArea>
            </Hidden>
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
        </Paper>
      </div>
    </>
  );
}
