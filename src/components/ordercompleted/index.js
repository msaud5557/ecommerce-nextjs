import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import img1 from "../imges/Vector 16.png";
import img2 from "../imges/Ellipse 70.png";
import Image from "next/image";
import img3 from "../imges/Vector 15.png";
import img4 from "../imges/checklist 1.png";
import img5 from "../imges/Group.png";

const OrderCompleted = () => {
  return (
    <Container
      sx={{
        height: "530px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <Box
        p={5}
        sx={{
          width: "550px",

          textAlign: "center",
          position: "relative",
          borderLeft: "1px dashed #000",
          borderBottom: "1px dashed #000"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-30px",
            width: "60px",
            height: "60px"
          }}
        >
          <Image
            src={img5}
            alt="Left Border Top Image"
            layout="fill"
            objectFit="contain"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-30px",
            right: "-30px",
            width: "60px",
            height: "60px"
          }}
        >
          <Image
            src={img4}
            alt="Bottom Border Right Image"
            layout="fill"
            objectFit="contain"
          />
        </Box>

        <Box
          sx={{
            width: "80px",
            height: "80px",
            position: "relative",
            margin: "0 auto"
          }}
        >
          <Image
            src={img1}
            alt="Placeholder Image"
            layout="fill"
            objectFit="contain"
          />
          <Box
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              top: "10px",
              left: "10px"
            }}
          >
            <Image
              src={img2}
              alt="Overlay Image"
              layout="fill"
              objectFit="contain"
            />
            <Box
              sx={{
                width: "45px",
                height: "45px",
                position: "absolute",
                top: "10px",
                left: "10px"
              }}
            >
              <Image
                src={img3}
                alt="Overlay Image"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ marginTop: "20px" }}>
          Your Order is Completed
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          Thank you for your purchase! Your order is being processed, and we
          will send you an update soon.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#FB2E86",
            marginTop: "40px",
            ":hover": {
              backgroundColor: "#FB2E86"
            }
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default OrderCompleted;
