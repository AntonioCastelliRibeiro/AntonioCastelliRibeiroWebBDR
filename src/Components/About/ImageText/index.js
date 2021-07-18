import { Box } from "@material-ui/core";

import TextCenter from "../TextCenter";

// const image =
//   "https://images.ctfassets.net/wds1hqrprqxb/3LhjzvlhPE8kwH0eEokA0M/951ae4c0e4a5f2e3a9ea2f4796c67758/2aa16a626623f8bf13a52618267ee97067ec5835.jpg?w=1395&h=1500&q=95&fm=webp";
// "https://images.unsplash.com/photo-1624555700555-40084d2586c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

export default function ImageText(props) {
  return (
    <>
      <TextCenter
        fontFamily={props.fontFamily}
        title={props.title}
        desc={props.desc}
        padding="20px 0px 28px 0px"
        fontSize="18px"
        color="#484848"
      />
      <Box data-aos="fade-up" data-aos-delay="200">
        <img
          src={props.img}
          style={{ height: 550, width: "100%" }}
          alt="imageText"
        />
      </Box>
    </>
  );
}
