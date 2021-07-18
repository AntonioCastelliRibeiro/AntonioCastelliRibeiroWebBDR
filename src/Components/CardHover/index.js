import { useState, useEffect } from "react";
import { Container, Hidden } from "@material-ui/core";
import Styled from "styled-components";
import data from "./data.js";

import CardUp from "./CardUp";
import ImageComp from "./Image";
import DescPrinc from "./DescPrinc";

const Content = Styled.div`
  display: flex;
  height: 450px;
  /* max-height: 1140px;  */
  border-radius: 15px;
  background-color: #b3b3b3;
`;

const ContentPrinc = Styled.div`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  /* max-height: 100vh;  */
  height: 100%;
  widht: 100%;
  background-color: ${(props) =>
    props.image === data.image[0] ? "#8b582f" : "#766517"};
  -web-kit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
`;

const ContainerPrinc = Styled(Container)`
  /* max-height: 100vh; */
  padding-top: 30px;
  padding-bottom: 130px;
`;

export default function CardHover(props) {
  const [onLoad, setOnLoad] = useState(false);
  const [image, setImage] = useState(data.image[0]);

  useEffect(() => {
    const imagesPreload = data.image;
    imagesPreload.forEach((image) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
    setOnLoad(true);
  }, []);

  const setImageChange = (e) => {
    return setImage(e === 1 ? data.image[0] : data.image[1]);
  };

  function retornarComp() {
    if (!onLoad) {
      return <div>Carregando</div>;
    } else {
      return (
        <ContentPrinc fontFamily={props.fontFamily} image={image}>
          <ContainerPrinc maxWidth="lg">
            <DescPrinc descFirst={data.descFirst} descSec={data.descSec} />
            <Hidden xsDown>
              <Content>
                <CardUp
                  left
                  setImage={setImageChange}
                  borderRight
                  title={data.titleLeft}
                  desc={data.descLeft}
                  btnDesc={data.btnLeft}
                  pathName={data.pathNameLeft}
                />
                <CardUp
                  setImage={setImageChange}
                  title={data.titleRight}
                  desc={data.descRight}
                  btnDesc={data.btnRight}
                  pathName={data.pathNameRight}
                />
              </Content>
              <ImageComp image={image} />
            </Hidden>
            <Hidden smUp>
              <Content>
                <CardUp
                  mobile
                  setImage={setImageChange}
                  title={data.titleLeft}
                  desc={data.descLeft}
                  btnDesc={data.btnLeft}
                />
              </Content>
              <ImageComp mobile image={data.image[0]} />
              <div style={{ padding: 10 }} />
              <Content>
                <CardUp
                  mobile
                  setImage={setImageChange}
                  title={data.titleRight}
                  desc={data.descRight}
                  btnDesc={data.btnRight}
                />
              </Content>
              <ImageComp image={data.image[1]} />
            </Hidden>
          </ContainerPrinc>
        </ContentPrinc>
      );
    }
  }

  return retornarComp();
}
