import { Link, useLocation } from "react-router-dom";

import {
  Box,
  CardActions,
  IconButton,
  CardActionArea,
  Paper,
  makeStyles,
  Tooltip
} from "@material-ui/core";

import LazyLoad from "react-lazyload";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  paperPrinc: {
    minHeight: "162px",
    maxHeight: 500,
    width: "100%",
    marginTop: "53px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 250ms ease-in-out",
    border: "1px solid #ffff",
    "&:hover": {
      border: "1px solid rgb(0 0 0 / 20%)",
      boxShadow:
        "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)"
    }
  },
  cardImage: {
    height: 108,
    width: 108,
    marginTop: "-43px",
    borderRadius: "150px",
    border: "1px solid #fff",
    backgroundColor: "rgb(0 0 0 / 10%)"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: "inherit",
    padding: "3px",
    transition: "all 250ms ease-in-out",
    "&:hover": {
      background: "rgb(0 0 0 / 20%)"
    }
  },
  lazyImage: {
    height: 108,
    width: 108,
    borderRadius: "150px"
  }
});

export default function ColabCapa(props) {
  const styles = useStyles();
  const location = useLocation();
  return (
    <div data-aos="fade-up" style={{ width: "100%" }}>
      <Box height="inherit" width="100%">
        <Paper elevation={3} className={styles.paperPrinc}>
          <Box display="flex" justifyContent="center">
            <Box>
              <Box width="100%" display="flex" justifyContent="center">
                <Tooltip title="Expandir" arrow>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={location.pathname + "/" + props.search}
                  >
                    <CardActionArea className={styles.cardImage}>
                      <LazyLoad offset={[-80, 0]} className={styles.lazyImage}>
                        <img
                          alt="imgEquip"
                          className={styles.image}
                          src={props.src}
                        />
                      </LazyLoad>
                    </CardActionArea>
                  </Link>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="1rem 0rem 1rem 1rem"
          >
            <Box letterSpacing=".3px" lineHeight="1.5">
              <Box fontWeight={700} fontSize="1.3rem">
                {props.nome + " " + props.sobreNome}
              </Box>
              <Box color="rgba(0, 0, 0, 0.54)" fontSize="1rem">
                {props.cargo}
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Box>
                <CardActions style={{ padding: "6px" }}>
                  <IconButton size="small">
                    <FacebookIcon style={{ height: "20px", width: "20px" }} />
                  </IconButton>
                  <IconButton size="small">
                    <InstagramIcon style={{ height: "20px", width: "20px" }} />
                  </IconButton>
                </CardActions>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
