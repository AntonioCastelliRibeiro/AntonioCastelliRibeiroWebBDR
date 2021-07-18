import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  firstText: {
    width: "560px",
    padding: "48px 0px",
    fontWeight: 200,
    [theme.breakpoints.up("xs")]: {
      fontSize: "5vw",
      width: "58vw"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "38px",
      width: "460px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "38px",
      width: "560px"
    }
  }
}));

export default function TextLast(props) {
  const styles = useStyles();
  return (
    <Box
      fontFamily={props.fontFamily}
      data-aos="fade-up"
      data-aos-delay="200"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      alignItems="center"
      widht="100%"
      style={{ backgroundColor: "rgb(68 133 69)" }}
      color="#fff"
    >
      <Box data-aos="fade-up" data-aos-delay="200" className={styles.firstText}>
        {props.desc}
      </Box>
      <Box data-aos="fade-up" data-aos-delay="200" width="100%" fontSize="16px">
        {props.name}
      </Box>
    </Box>
  );
}
