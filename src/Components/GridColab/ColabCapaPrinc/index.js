import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion";
// import { Frame } from "framer";

import ProfileImage from "./ProfileImage";

const cardWidth = "100%";
const borderRadius = 8;
const transition = "all 0.45s ease";

const DivScreenshot = styled.div`
  display: flex;
  justify-content: center;
`;

const Screenshot = styled.img`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 260px;
  max-width: 290px;
  /* background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  background-position: center; */
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;

const ScreenshotProfile = styled.img`
  margin-top: -30px;
  z-index: 200;
  position: relative;
  padding-top: 0;
  border-radius: 150px;
  width: 108px;
  height: 108px;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};
`;

const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Style = styled.button`
  font-style: ${(props) => props.fontSize};
  padding: 0;
  border: 0;
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth};
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    ${ScreenshotProfile} {
      transform: translateY(8px) scale(0.98);
    }

  }
`;

function retornarStyle(props, location) {
  return (
    <Style data-aos="fade-up">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={location.pathname + "/" + props.search}
      >
        {props.isProfile ? (
          <ProfileImage image={props.image} />
        ) : (
          <DivScreenshot
            children={
              <Screenshot
                draggable={false}
                alt="patrocImage"
                src={props.image}
              />
            }
          />
        )}

        <Content>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <BottomBar background={props.hexa} />
        </Content>
      </Link>
    </Style>
  );
}

function retornarProfile(props, location) {
  return retornarStyle(props, location);
}
function retornarPatroc(props, location) {
  return (
    <motion.div
      style={{ width: "100%", paddingTop: 10 }}
      drag
      dragElastic={0.03}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      transition={{ type: "spring", duration: 1 }}
    >
      {retornarStyle(props, location)}
    </motion.div>
  );
}

export default function Card(props) {
  const location = useLocation();
  return props.isProfile
    ? retornarProfile(props, location)
    : retornarPatroc(props, location);
}
