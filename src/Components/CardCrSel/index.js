import { Star } from "@material-ui/icons";
import { Box, Paper, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxSit: {
    [theme.breakpoints.up("xs")]: {
      width: "190px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "200px"
    },
    [theme.breakpoints.up("md")]: {
      width: "350px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "350px"
    }
  }
}));

export default function CardCrSel(props) {
  const styles = useStyles();
  return (
    <Box style={{ background: "inherit" }} height={400}>
      <Box
        height="inherit"
        display="flex"
        justifyContent="space-evenly"
        flexDirection="column"
        alignItems="center"
        fontFamily={props.fontFamily}
      >
        <Paper elevation={3} style={{ borderRadius: "36px" }}>
          <Avatar
            style={{ height: 70, width: 70 }}
            alt="User"
            src={props.image}
          />
        </Paper>
        <Box
          fontSize="1.0625rem"
          lineHeight="1.55em"
          fontStyle="italic"
          fontWeight="300"
          color={"rgba(255, 255, 255, 0.76)"}
          className={styles.boxSit}
          textAlign="center"
        >
          "O que temos que ter sempre em mente é que o início da atividade geral
          de formação de atitudes representa uma abertura para a melhoria das
          diretrizes de desenvolvimento para o futuro."
        </Box>
        <Box
          width={"250px"}
          fontSize="1.125rem"
          textAlign="center"
          lineHeight="1.5em"
          fontWeight="700"
          color={"#FFF"}
        >
          Augusto da Silva
        </Box>
        <Box
          fontSize=".75rem"
          textTransform="uppercase"
          fontWeight="500"
          color="#6c757d"
          lineHeight="1.5em"
        >
          CEO @ Empresa X
        </Box>
        <Box display="flex">
          <Star style={{ color: "#ff9800" }} />
          <Star style={{ color: "#ff9800" }} />
          <Star style={{ color: "#ff9800" }} />
          <Star style={{ color: "#ff9800" }} />
          <Star style={{ color: "#ff9800" }} />
        </Box>
      </Box>
    </Box>
  );
}
