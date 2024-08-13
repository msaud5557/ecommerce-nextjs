import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../imges/free-delivery1.png";
import Image from "next/image";
import img2 from "../imges/24-hours-support 1.png";
import img3 from "../imges/premium-quality 1.png";

const Shopex = () => {
  return (
    <Box py={4}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4
          }}
        >
          <Typography variant="h3" align="center">
            What's Shopex Offer!
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px"
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px"
                }}
              >
                <Image
                  src={img1}
                  alt="Free Delivery"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  pt: 2,
                  textAlign: "center"
                }}
              >
                Free Delivery
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 1,
                  px: 2
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                porro praesentium iusto, sed odit quae?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px"
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px"
                }}
              >
                <Image
                  src={img2}
                  alt="24/7 Support"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  pt: 2,
                  textAlign: "center"
                }}
              >
                24/7 Support
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 1,
                  px: 2
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                porro praesentium iusto, sed odit quae?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px"
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px"
                }}
              >
                <Image
                  src={img3}
                  alt="Premium Quality"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  pt: 2,
                  textAlign: "center"
                }}
              >
                Premium Quality
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 1,
                  px: 2
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                porro praesentium iusto, sed odit quae?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Shopex;
