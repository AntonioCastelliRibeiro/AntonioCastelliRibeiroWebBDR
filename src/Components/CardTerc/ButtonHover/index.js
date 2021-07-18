import Styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const CotentButton = Styled.div`
  height: 3em;
  display: flex;
  justify-content: center;
`;

const ButtonHover = Styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 3em;
  border: 1px solid #E4E8E2;
  border-radius: 50px;
  /* left: -150%; */
  cursor: pointer;
  margin-top: -13px;
  background-color: #E4E8E2;
  /* margin-left: -102px; */
`;

const DescButton = Styled(motion.div)`
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const transition = {
  duration: 0.5,
  ease: [0.04, 0.62, 0.23, 0.98]
  // delay: 1.3,
  // type: "spring",
  // bounce: 0.25,
  // damping: 300,
  // transitionEnd: { display: "none" }
};

export default function ButtonHoverComp(props) {
  const buttonControls = useAnimation();

  const sequenceUp = () => {
    return buttonControls.start({
      width: "150px",
      transition: { transition }
    });
  };

  const sequenceDown = () => {
    return buttonControls.start({
      width: "100px",
      transition: { transition }
    });
  };

  return (
    <CotentButton>
      <DescButton
        // layout
        onHoverStart={sequenceUp}
        onHoverEnd={sequenceDown}
        transition={transition}
        onTapStart={() => buttonControls.start({ scale: 0.95 })}
        onTap={() => buttonControls.start({ scale: 1 })}
      >
        Visitar
      </DescButton>
      <ButtonHover
        initial={sequenceDown}
        onHoverStart={sequenceUp}
        onHoverEnd={sequenceDown}
        animate={buttonControls}
        whileTap={{ scale: 0.98 }}
      >
        {/* Visitar */}
      </ButtonHover>
    </CotentButton>
  );
}
