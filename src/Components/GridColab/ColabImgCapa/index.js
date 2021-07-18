import { Box } from "@material-ui/core";
import ImageColab from "../../About/ImageAbout";

export default function ColabImgCapa(props) {
  return (
    <Box>
      <ImageColab
        fontFamily={props.fontFamily}
        img={props.img}
        title={props.title}
        fontSize={props.fontSize}
      />
      <Box height="100vh" />
    </Box>
  );
}
