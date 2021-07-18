import { Box, Paper, makeStyles, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxPrinc: {
    height: 500,
    background: "inherit"
  },
  boxPrincModal: {
    height: "100vh",
    background: "inherit"
  },
  cardPrinc: {
    height: "500px",
    width: "100%"
  },
  cardPrincModal: {
    height: "75vh",
    width: "100%"
  },
  imgPrinc: {
    height: "500px",
    [theme.breakpoints.up("xs")]: {
      width: "250px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "500px"
    },
    [theme.breakpoints.up("md")]: {
      width: "500px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px"
    }
  },
  imgPrincModal: {
    height: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "100vw"
    },
    [theme.breakpoints.up("sm")]: {
      width: "500px"
    },
    [theme.breakpoints.up("md")]: {
      width: "500px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px"
    }
  }
}));

export default function CardCrSel(props) {
  const styles = useStyles();
  return (
    <Box className={props.isModal ? styles.boxPrincModal : styles.boxPrinc}>
      <Box
        height="inherit"
        display="flex"
        justifyContent="space-evenly"
        flexDirection="column"
        alignItems="center"
      >
        <Paper elevation={3} style={{ borderRadius: "36px" }}>
          <Card
            key={props.key}
            className={props.isModal ? styles.cardPrincModal : styles.cardPrinc}
            onClick={() => props.onShowModal()}
          >
            <CardMedia
              className={props.isModal ? styles.imgPrincModal : styles.imgPrinc}
              image={props.image}
            ></CardMedia>
          </Card>
        </Paper>
      </Box>
    </Box>
  );
}
