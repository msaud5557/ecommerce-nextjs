import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import img1 from "../imges/image 1162.png";
import img2 from "../imges/image 1161.png";
import img3 from "../imges/image 19.png";
import img4 from "../imges/image 28.png";
import img5 from "../imges/image 30.png";

const ProductCategory = () => {
  return (
    <Container>
      <Grid container spacing={2} mt={3}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "#fff6fb",
            height: { xs: "auto", md: "300px" },
            position: "relative",
            padding: 2
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "black" }}>
              23% off on all products
            </Typography>
            <Typography>
              <Link href="/" passHref>
                <Typography
                  component="a"
                  sx={{ textDecoration: "none", color: "primary.main" }}
                >
                  Shop now
                </Typography>
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: { xs: "150px", md: "220px" },
              height: { xs: "100px", md: "150px" },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              margin: 2
            }}
          >
            <Image
              src={img1}
              alt="Placeholder Image"
              layout="fill"
              objectFit="contain"
              style={{
                backgroundColor: "white"
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "#808080",
            height: { xs: "auto", md: "300px" },
            position: "relative",
            padding: 2
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              23% off on all products
            </Typography>
            <Typography>
              <Link href="/" passHref>
                <Typography
                  component="a"
                  sx={{ textDecoration: "none", color: "primary.main" }}
                >
                  View Collection
                </Typography>
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: { xs: "150px", md: "220px" },
              height: { xs: "100px", md: "150px" },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              margin: 2
            }}
          >
            <Image
              src={img2}
              alt="Placeholder Image"
              layout="fill"
              objectFit="contain"
              style={{
                backgroundColor: "white"
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            padding: 2
          }}
        >
          {[img3, img4, img5].map((img, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: "70px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: 2
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "70px",
                  width: "100px",
                  flexShrink: 0
                }}
              >
                <Image
                  src={img}
                  alt={`Product Image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  style={{
                    backgroundColor: "#f5f6f8"
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: 2
                }}
              >
                <Typography variant="h6">Execute Seat Chair</Typography>
                <Typography variant="h6">Price $27</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCategory;
