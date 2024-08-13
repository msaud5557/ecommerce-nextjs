import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { FaHeart, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img1 from "../imges/Rectangle 134.png";
import img2 from "../imges/Rectangle 136.png";
import img3 from "../imges/Rectangle 137.png";
import img4 from "../imges/Rectangle 138.png";

const ProductDetail = () => {
  const images = [img1, img2, img3, img4];

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Grid
        mt={5}
        container
        sx={{ boxShadow: 3, borderRadius: 2 }}
        spacing={{ xs: 2, md: 4 }} 
        p={{ xs: 2, md: 5 }} 
      >
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              {images.slice(0, 3).map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: 130,
                    position: "relative",
                    marginBottom: 1
                  }}
                >
                  <Image
                    src={img}
                    alt={`Product image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={9} pr={2}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  minHeight: { xs: 200, md: "auto" } 
                }}
              >
                <Image
                  src={images[3]}
                  alt="Main product image"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Product Title
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Box sx={{ color: "yellow", mr: 1 }}>★★★★★</Box>
            <Typography variant="body2">(100)</Typography>
          </Box>
          <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
            Price: <s>$129.99</s> $99.99
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Color: Red
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is the product description. It provides detailed information
            about the product, its features, and any other relevant details.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, color: "white", width: { xs: "100%", sm: "auto" } }} 
            endIcon={<FaHeart />}
          >
            Add to Cart
          </Button>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Categories: Electronics
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Tags: Gadgets, Tech
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }
            }}
          >
            <Typography variant="body1">Share:</Typography>
            <Box sx={{ display: "flex", ml: { sm: 2 }, mt: { xs: 1, sm: 0 } }}>
              <FaFacebook size={24} style={{ marginRight: 8 }} />
              <FaInstagram size={24} style={{ marginRight: 8 }} />
              <FaTwitter size={24} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
