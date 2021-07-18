import styled from "styled-components";
import { motion } from "framer-motion";

const ContentImage = styled.div`
  /* padding-top: 15px; */
  top: 100;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImagePrinc = styled(motion.img)`
  background-color: #cecece;
  margin-top: -38px;
  z-index: 200;
  position: relative;
  scale: 1;
  padding-top: 0;
  border-radius: 150px;
  width: 108px;
  height: 108px;
  overflow: hidden;
  backface-visibility: hidden;
`;

const image = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 }
};

export default function ProfileImage(props) {
  return (
    <ContentImage
      children={
        <ImagePrinc
          src={props.image}
          drag
          dragElastic={0.03}
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          variants={image}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
          transition={{ type: "spring", duration: 1 }}
        />
      }
    />
  );
}
