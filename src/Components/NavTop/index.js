import React from "react";

import DrawerTop from "./DrawerTop";

import { AppBar, Container, Toolbar, IconButton } from "@material-ui/core";

import { Menu, Close } from "@material-ui/icons";

export default function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <React.Fragment key={"top"}>
        <AppBar
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            zIndex: 1400
          }}
        >
          <Container size="xl">
            <Toolbar>
              {/* <Paper elevation={6}> */}
              <IconButton
                style={{
                  transition: "background-color 0.8s ease-in-out",
                  backgroundColor: open ? "transparent" : "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
                }}
                edge="start"
                aria-label="open drawer"
                onClick={() =>
                  setTimeout(() => {
                    setOpen(!open);
                  }, 200)
                }
              >
                {open ? <Close style={{ color: "white" }} /> : <Menu />}
              </IconButton>
              {/* </Paper> */}
            </Toolbar>
          </Container>
        </AppBar>
        <DrawerTop
          fontFamily={props.fontFamily}
          open={open}
          onClose={() => setOpen(false)}
          toggleDrawer={(e) => toggleDrawer(e)}
        />
      </React.Fragment>
    </div>
  );
}
