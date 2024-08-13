import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import chr5 from "../imges/image 1174.png";

const Footericons = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            position: "relative",
            marginTop: "70px",
            marginBottom: "70px",
            height: { xs: "100px", sm: "150px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            src={chr5}
            alt="Placeholder Image"
            objectFit="contain"
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Footericons;
