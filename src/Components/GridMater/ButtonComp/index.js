import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnPrinc: {
    borderRadius: 0,
    border: "1px solid black",
    height: 50,
    width: 150,
    fontWeight: 700,
    "&:hover": { backgroundColor: "#fff" }
  }
});

export default function ButtonComp(props) {
  const styles = useStyles();
  return (
    <Button onClick={() => props.onClick()} className={styles.btnPrinc}>
      {props.name ? props.name : "Explorar"}
    </Button>
  );
}
