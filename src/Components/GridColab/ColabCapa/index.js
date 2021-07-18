import { Link, useLocation } from "react-router-dom";

import {
  Box,
  CardActionArea,
  CardActions,
  IconButton,
  Tooltip,
  Paper,
  makeStyles
} from "@material-ui/core";

import LazyLoad from "react-lazyload";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  paperPrinc: {
    // cursor: "pointer",
    // height: "162px",
    // maxHeight: 500,
    // maxWidth: "350px",
    // width: "100%",
    // boxShadow: "rgb(0 0 0 / 20%) 0px 2px 10px 1px",
    // marginTop: "53px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    transition: "all 250ms ease-in-out",
    border: "1px solid #ffff",
    "&:hover": {
      border: "1px solid rgb(0 0 0 / 20%)",
      boxShadow:
        "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)"
      // "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)"
    }
  }
});

export default function ColabCapa(props) {
  const styles = useStyles();
  const location = useLocation();

  return (
    <div key={props.key} data-aos="fade-up" style={{ width: "100%" }}>
      <Box fontFamily={props.fontFamily} height="inherit" width="100%">
        <Paper elevation={3} className={styles.paperPrinc}>
          <Box
            style={{
              maxHeight: 500,
              width: "100%"
              // boxShadow: "rgb(0 0 0 / 20%) 1px 3px 10px 1px"
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={location.pathname + "/" + props.search}
            >
              <Tooltip title="Expandir" arrow>
                <CardActionArea>
                  <LazyLoad height={290} offset={[-200, 0]}>
                    <Box display="flex" justifyContent="center" width="100%">
                      <img
                        alt={"imgColab"}
                        style={{
                          height: 290,
                          width: "100%"
                          // padding: "0px 6vw 0px 6vw"
                        }}
                        src={props.src}
                      />
                    </Box>
                  </LazyLoad>
                </CardActionArea>
              </Tooltip>
            </Link>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              padding="1rem"
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
                      <InstagramIcon
                        style={{ height: "20px", width: "20px" }}
                      />
                    </IconButton>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
