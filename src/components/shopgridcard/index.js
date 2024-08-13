import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import img1 from "../imges/image 9.png";

const Shopgridcard = () => {
  return (
    <Container
      sx={{
        pt: 15, // Top padding of 150px
        pb: 15, // Bottom padding of 150px
        maxWidth: "lg" // Ensures the container does not exceed a certain width
      }}
    >
      <Grid container spacing={2}>
        {[...Array(12)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                backgroundColor: "gray",
                color: "white",
                position: "relative",
                overflow: "hidden", // Ensures content doesn't overflow
                "&:hover .hover-icons": {
                  display: "flex"
                }
              }}
            >
              <Box
                sx={{
                  border: "1px dashed gray",
                  height: "200px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <Image
                  src={img1}
                  alt="Product"
                  layout="fill"
                  objectFit="contain"
                  style={{
                    backgroundColor: "#f5f6f8"
                  }}
                />
                <Box
                  className="hover-icons"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    display: "none",
                    flexDirection: "column",
                    gap: "10px"
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "5px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "5px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <AddIcon sx={{ color: "white" }} />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "5px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <FavoriteIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  borderTop: "1px dashed gray", // Updated to border-top to keep design consistent
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Typography variant="body2">Product Title</Typography>
                <Typography variant="body2">Price</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shopgridcard;
