import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
// import { images } from "./data.js";

import { IconButton, Tooltip } from "@material-ui/core";

import IconExpand from "@material-ui/icons/AspectRatio";
import IconArrowRight from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";

const BoxPrinc = styled.div`
  width: ${(props) => (props.onModal ? "100vw" : "inherit")};
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /*body*/
  background: #151515;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSlider = styled(motion.img)`
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  position: absolute;
  max-width: 100vw;
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const ButtonIcon = styled(IconButton)`
  top: calc(50% - 20px);
  position: absolute;
  width: 30px;
  height: 30px;
  user-select: none;
  z-index: 2;
`;

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Slider(props) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, props.images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <BoxPrinc>
      <AnimatePresence initial={false} custom={direction}>
        <ImgSlider
          draggable={false}
          whileDrag={{
            cursor: "grabbing",
            cursor: "-moz-grabbing,",
            cursor: "-webkit-grabbing"
          }}
          key={page}
          src={props.images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <ButtonIcon
        style={{ position: "absolute", right: "20px" }}
        children={
          <Tooltip
            arrow
            title={"Próximo"}
            children={
              <IconArrowRight
                style={{ color: "#fff" }}
                onClick={() => paginate(1)}
              />
            }
          />
        }
      />
      <ButtonIcon
        style={{ position: "absolute", left: "10px", transform: "scale(-1)" }}
        disableRipple={true}
        children={
          <Tooltip
            arrow
            title={"Anterior"}
            children={
              <IconArrowRight
                style={{ color: "#fff" }}
                onClick={() => paginate(-1)}
              />
            }
          />
        }
      />
      <ButtonIcon
        style={{ position: "absolute", right: "20px", top: "10px" }}
        children={
          <Tooltip
            arrow
            title={props.onModal ? "Fechar" : "Expandir"}
            children={
              props.onModal ? (
                <CloseIcon
                  style={{ color: "#fff" }}
                  onClick={() => props.setCloseModal()}
                />
              ) : (
                <IconExpand
                  style={{ color: "#fff" }}
                  onClick={() => props.onShowModal()}
                />
              )
            }
          />
        }
      />
    </BoxPrinc>
  );
}
