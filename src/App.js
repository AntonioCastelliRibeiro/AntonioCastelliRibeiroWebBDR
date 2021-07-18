import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactRouter from "./Router";

import NavTop from "./Components/NavTop";
import Foot from "./Components/Foot";

import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css"; // You can also use <link> for styles

const font = "'ABeeZee', sans-serif";

export default function App(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <NavTop fontFamily={font} />
      <ReactRouter fontFamily={font} />
      <Foot fontFamily={props.fontFamily} />
    </BrowserRouter>
  );
}
