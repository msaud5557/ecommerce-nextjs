import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../imges/Rectangle 128.png";
import img2 from "../imges/Rectangle 130.png";
import img3 from "../imges/Rectangle 131.png";
import img4 from "../imges/Rectangle 133.png";
import Image from "next/image";

const ProductDetailCard = () => {
  return (
    <Container sx={{ marginTop: "90px", marginBottom: "100px" }}>
      <Box sx={{ marginBottom: "20px", paddingLeft: { xs: "15px", md: "45px" } }}>
        <Typography variant="h5">Related Products</Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box>
              <Box
                sx={{
                  height: { xs: "200px", md: "290px" },
                  position: "relative",
                }}
              >
                <Image
                  src={img}
                  alt={`Product ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mt: 1,
                  alignItems: "center",
                }}
              >
                <Box sx={{ flexGrow: 1, marginLeft: "20px" }}>
                  <Typography>Product Name</Typography>
                  <Typography>$32.00</Typography>
                </Box>
                <Box sx={{ color: "yellow", marginRight: "20px" }}>★★★★★</Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductDetailCard;
