import { useEffect } from "react";
import { Box, Hidden } from "@material-ui/core";

import data from "./data.js";

import ImageAbout from "./ImageAbout";

import ImageText from "./ImageText";
import ImageTextSticky from "./ImageTextSticky";
import TextCenter from "./TextCenter";
import TextLast from "./TextLast";

export default function AboutComp(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box position="fixed">
        <ImageAbout
          fontFamily={props.fontFamily}
          title={data.aboutTitle}
          img={data.aboutImage}
        />
      </Box>
      <Box height="100vh"></Box>
      <Box position="relative" style={{ backgroundColor: "#fff" }}>
        <Box>
          <TextCenter
            fontFamily={props.fontFamily}
            desc={data.firstDesc}
            padding="40px 0px 103px 0px"
            fontSize="30px"
            fontWeight={200}
          />
        </Box>
        <Box>
          <Hidden mdUp>
            <ImageText
              fontFamily={props.fontFamily}
              title={data.secDescTitle}
              desc={data.secDesc}
              img={data.secImg}
            />
          </Hidden>
          <Hidden smDown>
            <ImageTextSticky
              fontFamily={props.fontFamily}
              title={data.secDescTitle}
              desc={data.secDesc}
              img={data.secImg}
            />
          </Hidden>
        </Box>
        <Box>
          <TextCenter
            fontFamily={props.fontFamily}
            desc={data.thirDesc}
            padding="103px 0px 103px 0px"
            fontSize="26px"
            lineHeight="1.43"
          />
        </Box>
        <Box>
          <TextLast
            fontFamily={props.fontFamily}
            desc={data.fourDesc}
            name={data.fourName}
          />
        </Box>
      </Box>
    </Box>
  );
}
