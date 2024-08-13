import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../imges/Group 200.png";

const Aboutclient = () => {
  return (
    <>
      <Container>
        <Box
          p={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            textAlign: "center"
          }}
        >
          <Box>
            <Typography variant="h4">Our Clients</Typography>
          </Box>
          <Box
            m={2}
            sx={{
              width: "150px",
              height: "60px",
              marginTop: "40px"
            }}
          >
            <Image
              src={img1}
              alt="Contact Image"
              sx={{
                width: "150px",
                height: "60px"
              }}
              layout="responsive"
            />
          </Box>
          <Box>
            <Typography>Client Name</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "10px" }}>Client Name</Typography>
          </Box>
          <Box mt={2}>
            <Typography
              sx={{
                width: "600px"
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              fuga fugit numquam commodi omnis sint facere ea sunt esse. Unde
              incidunt libero officiis eos, mollitia, voluptates placeat
              consequuntur quasi totam, porro dicta. Culpa molestias natus eum
              perferendis aut similique in.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Aboutclient;
