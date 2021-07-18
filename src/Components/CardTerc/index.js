import Styled from "styled-components";
import { motion } from "framer-motion";
import CardImage from "./CardImage";
import ButtonHoverComp from "./ButtonHover";
import data from "./data.js";
import { Box, Container } from "@material-ui/core";

const Content = Styled(motion.div)`
  width: 100%;
  display: flex;  
  flex-direction: ${(props) => props.flexDirection};
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  };
`;

const CotentTitle = Styled.div`
  font-size: 3.1em;
  display:flex;
  font-weight:400;
  line-height:1.334;
  letterSpacing: 0;
  padding-bottom: 0;
  justify-content: center;
  @media (max-width: 600px) {
    padding-bottom: 30px;
  };
`;

const CotentDesc = Styled.div`
  font-size: 1.3rem;
  margin: 1rem auto 2rem;
  max-width: 500px;
  text-align: center;
  /* font-size:20px; */
  width: 100%;
  font-wWeight: 400;
  line-height: 1.43;
  max-height: 500px;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  };
`;

const CotentCard = Styled(motion.div)`
  display: flex;
  width: 70%;
  padding: 0px;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    width: 100%;
  };
`;

const CotentDescPrinc = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 2;
  font-family: ${(props) => props.fontFamily};
  width: 70%;
  padding: 4vw;
  @media (max-width: 600px) {
    width: 100%;
  };
`;

const CotentPrinc = Styled.div`
  padding-bottom: 80px;
`;

export default function MyCard(props) {
  return (
    <Container maxWidth="xl">
      <Box>
        {data.map((data, key) => {
          return (
            <Box data-aos="fade-up">
              <CotentPrinc>
                <Box width="100%" display="flex" justifyContent="center">
                  <Content flexDirection={data.flexDirection}>
                    <CardImage image={data.img} />
                    <CotentCard>
                      <CotentDescPrinc fontFamily={props.fontFamily}>
                        <CotentTitle children={data.title} />
                        <CotentDesc children={data.descricao} />
                        <ButtonHoverComp>{data.descButton}</ButtonHoverComp>
                      </CotentDescPrinc>
                    </CotentCard>
                  </Content>
                </Box>
              </CotentPrinc>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
