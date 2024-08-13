import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import chr4 from "../imges/chr4.png";
import chr3 from "../imges/chr3.png";
import chr2 from "../imges/chr2.png";
import chr1 from "../imges/chr1.png";

const TopCategory = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4
        }}
      >
        Top Categories
      </Typography>

      <Grid container spacing={2} p={3} pt={5}>
        {[chr4, chr3, chr2, chr1].map((imageSrc, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              height: { xs: "250px", sm: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative"
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "150px", sm: "200px" },
                height: { xs: "150px", sm: "200px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#f6f7fb",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease"
              }}
            >
              <Image
                src={imageSrc}
                alt="Placeholder Image"
                objectFit="contain"
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderBottom: "7px solid green",
                      borderLeft: "7px solid green",
                      borderRadius: "50% 50% 50% 50%",
                      boxSizing: "border-box",
                      pointerEvents: "none"
                    }
                  }
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "green"
                    }
                  }}
                >
                  View Shop
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <Typography>Product name</Typography>
              <Typography>Price 26$</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopCategory;
