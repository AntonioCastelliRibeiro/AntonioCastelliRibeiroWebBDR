import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  gridRoot: {
    overflow: "hidden",
    // position: "absolute",
    [theme.breakpoints.up("xs")]: { flexDirection: "column" },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
    [theme.breakpoints.up("lg")]: { flexDirection: "row" },
    [theme.breakpoints.up("xl")]: { flexDirection: "row" }
  },
  boxPaddingB: {
    paddingBottom: 24
  },
  boxTitle: {}
}));
