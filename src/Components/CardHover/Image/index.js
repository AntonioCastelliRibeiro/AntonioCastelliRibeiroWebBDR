import { motion } from "framer-motion";
import Styled from "styled-components";

const Content = Styled.div`
  margin-top: -450px;
  position: relative;
  height: 450px;
  width: 100%;
`;

const ImageLeft = Styled(motion.figure)`  
  margin: 0;
  height: 450px;
  width: 100%;
  /* border: 0; */
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: background-image 300ms linear;
  transition-property: background-image;
  transition-duration: 300ms;
  transition-timing-function: linear;
  transition-delay: 0s;
  filter: brightness(50%);
`;

export default function Image(props) {
  return (
    <Content>
      <ImageLeft image={props.image} />
    </Content>
  );
}
