"use client";

import { Box, Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
import img from "../imges/img1.png";

const MainContext = () => {
  return (
    <Box
      sx={{
        width: "100%", 
        backgroundColor: "#f2f0ff",
        padding: "16px", 
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto", 
        }}
      >
        <Grid
          container
          spacing={2} 
          sx={{
            height: "auto", 
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            alignItems: "center",
            justifyContent: "center", 
          }}
        >
          <Grid
            item
            xs={12} 
            md={6}  
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", 
              color: "black",
            }}
          >
            <Box>
              <Typography variant="h6" component="h1"> 
                Best Furniture For Your Castle
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, 
                  marginTop: "8px",
                }}
              >
                New Furniture Collection Trend In 2020
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "16px",
                  fontSize: { xs: "0.875rem", sm: "1rem" }, 
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
                quo!
              </Typography>
              <Box sx={{ marginTop: "16px" }}>
                <Button
                  sx={{
                    backgroundColor: "#fb2e86",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#fb2e86",
                    },
                    padding: { xs: "8px 16px", sm: "10px 20px" }, 
                    fontSize: { xs: "0.75rem", sm: "1rem" }, 
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12} 
            md={6}  
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: { xs: "300px", sm: "350px", md: "400px" }, 
                width: { xs: "100%", sm: "90%", md: "450px" }, 
                position: "relative",
              }}
            >
              <Image
                src={img}
                alt="Placeholder Image"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainContext;
