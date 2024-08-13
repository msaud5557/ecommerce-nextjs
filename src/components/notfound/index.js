import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../imges/Group 197.png";

const NotFound = () => {
  return (
    <>
      <Container
        sx={{
          height: "530px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box p={2} sx={{ height: "400px", width: "550px" }}>
          <Box
            sx={{
              width: "500px",
              height: "300px",
              position: "relative"
            }}
          >
            <Image
              src={img1}
              alt="Placeholder Image"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "bold",
              flexDirection: "column"
            }}
          >
            <Typography>OOp! The page you requested was not found!</Typography>
            <Button
              href="/"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#FB2E86",
                ":hover": {
                  backgroundColor: "#FB2E86"
                }
              }}
            >
              Go to Home
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
