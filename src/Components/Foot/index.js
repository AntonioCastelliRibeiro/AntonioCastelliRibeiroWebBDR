import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../../Image/logo.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Box,
  IconButton,
  Container,
  Divider,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: "center",
    color: palette.type === "dark" ? "#fff" : palette.text.secondary,
    position: "relative",
    [breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0
        }
      }
    }
  },
  newsletter: {
    fontSize: typography.caption.fontSize
  },
  navMenu: {
    flexWrap: "wrap"
  },
  boxNavManu: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  boxNavTermos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  itemSobre: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.54)",
    cursor: "pointer",
    display: "flex",
    padding: "8px 16px",
    transition: "all 0.2s ease-out 0s",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: "4px",
    textDecoration: "none"
  }
}));

const Foot = React.memo(function FootComp(props) {
  const classes = useStyles();
  // const history = useHistory();

  function setarRouter(AQueryParams) {
    // history.push(AQueryParams);
    // onClose({state: false, page: AQueryParams});
    // props.onSetarPageFoto(AQueryParams);
  }

  return (
    <Box
      // data-aos="fade"
      position="absolute"
      fontFamily={props.fontFamily}
      bgcolor={"#fff"}
      width={"100%"}
    >
      <Container>
        <Box pt={8} pb={1}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flexGrow: 2 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ paddingRight: 2 }}>
                  <Avatar style={{ height: 38, width: 38 }} src={logo} />
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <Typography
                    // style={{ fontFamily: "Amaranth, sans-serif" }}
                    variant={"h6"}
                    color={"textSecondary"}
                  >
                    Bom Dia Rural
                  </Typography>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Button className={classes.itemSobre} size="small">
                  Equipe
                </Button>
                <Button
                  className={classes.itemSobre}
                  onClick={() => setarRouter("/equipe")}
                  size="small"
                >
                  Colaboradores
                </Button>
                <Button className={classes.itemSobre} size="small">
                  Sobre
                </Button>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box textAlign={"center"} mt={{ xs: 2, md: 0 }} my={2}>
                <IconButton size="medium" children={<FacebookIcon />} />
                <IconButton size="medium" children={<InstagramIcon />} />
                <IconButton size="medium" children={<YouTubeIcon />} />
              </Box>
            </div>
          </div>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <div className={classes.boxNavTermos}>
            <div style={{ flexGrow: 1, flexShrink: 0, marginLeft: "-16px" }}>
              <div style={{ display: "flex" }}>
                <Box className={classes.boxNavManu} component="div">
                  <Button className={classes.itemSobre}>
                    Termos e Condições
                  </Button>
                  <Button className={classes.itemSobre}>
                    Politica de Privacidade
                  </Button>
                  <Button className={classes.itemSobre}>Acessibilidade</Button>
                  <Button className={classes.itemSobre}>Legal</Button>
                </Box>
              </div>
            </div>
            <div>
              <Box py={1} textAlign={{ xs: "center", md: "right" }}>
                <Typography
                  component={"p"}
                  variant={"caption"}
                  color={"textSecondary"}
                >
                  Designer Antonio Castelli © Tony Studios 2019-2021 Todos os
                  Direitos Reservados
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
});

export default Foot;
