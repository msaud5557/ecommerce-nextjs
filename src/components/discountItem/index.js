import React from "react";
import { Container, Box, Typography, Link, Grid, Button } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import img1 from "../imges/tortuga-01-b 1.png";

const DiscountItem = () => {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          mb: 4
        }}
      >
        <Typography variant="h4" gutterBottom>
          Discount Items
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap"
          }}
        >
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              "&:hover": {
                textDecoration: "underline",
                color: "pink"
              }
            }}
          >
            Link 1
          </Link>

          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "black"
            }}
          />

          <Link
            href="#"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              "&:hover": {
                textDecoration: "underline",
                color: "pink"
              }
            }}
          >
            Link 2
          </Link>

          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "black"
            }}
          />

          <Link
            href="#"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              "&:hover": {
                textDecoration: "underline",
                color: "pink"
              }
            }}
          >
            Link 3
          </Link>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        p={2}
        sx={{ boxShadow: "0px 4px 10px rgba(0.1, 0.1, 0.1, 0.1)" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: "auto",

            p: 2
          }}
        >
          <Box mb={2}>
            <Typography variant="h5">30% Off on All Products</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" mb={2}>
              Exam Sofa Compat
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box mb={3}>
            <Grid container spacing={1}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckIcon sx={{ color: "#fb2e86", marginRight: "10px" }} />
                    <Typography variant="body1">Option {index + 1}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Button
            sx={{
              backgroundColor: "#fb2e86",
              color: "white",
              padding: "10px 15px",
              width: "100%",
              maxWidth: "150px",
              height: "40px",
              mt: 2,
              "&:hover": {
                backgroundColor: "#d7236a"
              }
            }}
          >
            Add To Cart
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: "auto",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2
          }}
        >
          <Image
            src={img1}
            alt="Discount Image"
            layout="responsive"
            objectFit="contain"
            style={{
              maxWidth: "100%",
              height: "auto"
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DiscountItem;
