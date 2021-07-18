import { Box, Container } from "@material-ui/core";

export default function TextCenter(props) {
  function retornarTitle() {
    if (props.title) {
      return (
        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          textAlign="center"
          paddingBottom={"12px"}
          fontSize={"23px"}
          fontWeight={500}
          style={{ color: "#1F1F1F" }}
        >
          {props.title}
        </Box>
      );
    } else return false;
  }

  return (
    <Box>
      <Container size="xl">
        <Box
          fontFamily={props.fontFamily}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          padding={props.padding}
        >
          {retornarTitle()}
          <Box
            data-aos="fade-up"
            data-aos-delay="200"
            textAlign="center"
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            lineHeight={props.lineHeight ? props.lineHeight : "1.1667"}
            style={{ color: props.color ? props.color : "#1F1F1F" }}
          >
            {props.desc}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
