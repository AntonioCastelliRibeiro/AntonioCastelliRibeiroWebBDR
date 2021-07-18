import { Box } from "@material-ui/core";

import { StickyContainer, Sticky } from "react-sticky";

// const image =
//   "https://images.ctfassets.net/wds1hqrprqxb/3LhjzvlhPE8kwH0eEokA0M/951ae4c0e4a5f2e3a9ea2f4796c67758/2aa16a626623f8bf13a52618267ee97067ec5835.jpg?w=1395&h=1500&q=95&fm=webp";
// "https://images.unsplash.com/photo-1624555700555-40084d2586c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
// "https://images.unsplash.com/photo-1597767856622-8dd15a35a27b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

export default function ImageTextSticky(props) {
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
    <>
      <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
            but certain styles can break the positioning logic used. */}
        <Sticky bottomOffset={-80}>
          {({
            style

            // the following are also available but unused in this example
            // isSticky,
            // wasSticky,
            // distanceFromTop,
            // distanceFromBottom,
            // calculatedHeight
          }) => (
            <header style={style}>
              <Box display="flex" width="100%">
                <Box
                  fontFamily={props.fontFamily}
                  width="50%"
                  textAlign="center"
                  fontSize="18px"
                  fontWeight={300}
                  paddingLeft="2vw"
                  paddingBottom="103px"
                  paddingTop="103px"
                  lineHeight="1.1333"
                  style={{ color: "#484848" }}
                >
                  {retornarTitle()}
                  <Box data-aos="fade-up" data-aos-delay="200">
                    {props.desc}
                  </Box>
                </Box>
                <Box width="50%"></Box>
              </Box>
            </header>
          )}
        </Sticky>
        <Box
          display="flex"
          width="100%"
          justifyContent="flex-end"
          marginTop="-177px"
        >
          <Box data-aos="fade-up" data-aos-delay="200">
            <img
              src={props.img}
              style={{ height: "44vw", width: "44vw" }}
              alt="imgTxtSticky"
            />
          </Box>
        </Box>
      </StickyContainer>
    </>
  );
}
