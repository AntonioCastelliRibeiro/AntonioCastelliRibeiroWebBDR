import Styled from "styled-components";
import { motion } from "framer-motion";

const CardBase = Styled(motion.div)`
  /* max-height: 490px; */
  width: 70%;
  background-color: "#e8h9z9";
  min-width: 260px;
  border: none;
  overflow: hidden;  
  @media (max-width: 600px) {
    width: 100%;
  };
`;

const Image = Styled(motion.figure)`  
  margin: 0;
  height: 58vh;
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

  transition: all 300ms ease;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

const transition = {
  duration: 0.1
  // ease: [0.04, 0.62, 0.23, 0.98]
};

export default function CardImage(props) {
  return (
    <CardBase>
      <Image
        animate={{ scale: 0.98 }}
        flexDirection={props.flexDirection}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        image={props.image}
        transition={transition}
      />
    </CardBase>
  );
}
