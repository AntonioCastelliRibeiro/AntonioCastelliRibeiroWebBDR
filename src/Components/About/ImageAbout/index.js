import { memo } from "react";
import { Box } from "@material-ui/core";

import styled from "styled-components";

// import { useScroll } from "react-use-gesture";
// import { useSpring, animated } from "react-spring";

// const image =
//   // "https://images.unsplash.com/photo-1624557446444-74a041ea28ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
//   "https://images.ctfassets.net/wds1hqrprqxb/1NT0z1bHV51RXreYBZiCBp/0fe6cce2525c937cf333ebd0e26bca63/f41c99227efbb995de1ccad2c66d841a29582a11.png?w=1900&h=1267&q=95&fm=webp";

const transition = "all 0.45s ease";

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  transition: ${transition};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(${(props) => props.scale});
`;

const DescImage = styled.div`
  opacity: 1;
  transition: ${transition};
  position: fixed;
  color: #fff;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "9vw")};
  z-index: 1;
  &:hover {
    transform: scale(1.04);
  }
  /* transform: translateY(-102px); */
`;

const DescScroll = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  width: 100%;
  opacity: 1;
  transition: ${transition};
  position: fixed;
  color: #fff;
  font-size: "3vw";
  z-index: 1;
  padding-left: 40px;
`;

export default memo(function ImageAbout(props) {
  // const isMobile = useMediaQuery("(max-width:600px)");
  // const [{ y }, setY] = useSpring(() => ({ y: "0%" }));
  // const [scale, setScale] = useState(1);
  // useScroll(
  //   ({ offset: [x, y] }) => {
  //     // if (isMobile) {
  //     //   setScale(`1.0`);
  //     // } else if (y <= 800) {
  //     //   setScale(`1.0${y}`);
  //     // }
  //   },
  //   {
  //     domTarget: window
  //   }
  // );

  return (
    <div>
      <Box
        fontFamily={props.fontFamily}
        height="100vh"
        width="100%"
        position="fixed"
      >
        <Box position="absolute" width="100%">
          <Box display="flex" height="100vh" width="100%">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <DescImage
                fontSize={props.fontSize}
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                <Box>{props.title}</Box>
              </DescImage>
            </Box>
          </Box>
        </Box>
        <Box position="absolute" height="100vh" width="100%">
          <DescScroll data-aos="fade-down" data-aos-delay="1000">
            <Box paddingBottom="35px">Rolar para Baixo</Box>
          </DescScroll>
        </Box>
        <Box height="100vh" width="100%">
          <BgImage img={props.img} /*scale={scale}*/ />
        </Box>
      </Box>
    </div>
  );
});
