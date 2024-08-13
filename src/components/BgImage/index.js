import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../imges/markus-spiske-Nph1oyRsHm4-unsplash.jpg";

const BgImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden"
      }}
    >
      <Image
        src={img1}
        alt="Placeholder Image"
        layout="fill"
        objectFit="cover"
        style={{
          width: "100%",
          height: "100%"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white"
        }}
      >
        <Typography variant="h5" sx={{
            color:"white"
        }} gutterBottom>
          Get Latest Updated by Subscribe
        </Typography>
        <Button
          sx={{
            backgroundColor: "#fb2e86",
            color: "white",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#fb2e86"
            }
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default BgImage;
