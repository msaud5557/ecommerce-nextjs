import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EastIcon from '@mui/icons-material/East';

const ProductDetailDesc = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F9F8FE" }}>
        <Container>
          <Box
            p={3}
            sx={{
              paddingTop: "60px",
              paddingBottom: "60px"
            }}
          >
            <Box sx={{ display: "flex", mb: 2 }}>
              <Typography
                variant="h5"
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { borderBottom: "2px solid", color: "black" },
                  ml: 0
                }}
              >
                Description
              </Typography>
              <Typography
                variant="h5"
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { borderBottom: "2px solid", color: "black" },
                  ml: 5
                }}
              >
                Additional Information
              </Typography>
              <Typography
                variant="h5"
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { borderBottom: "2px solid", color: "black" },
                  ml: 5
                }}
              >
                Review
              </Typography>
              <Typography
                variant="h5"
                component="a"
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { borderBottom: "2px solid", color: "black" },
                  ml: 5
                }}
              >
                Vedio
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ marginTop: "35px" }}>
              Varius Tempor
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "35px" }}>
              About More
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <EastIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                This is a single line paragraph about more details.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <EastIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                This is a single line paragraph about more details.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <EastIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                This is a single line paragraph about more details.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <EastIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                This is a single line paragraph about more details.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetailDesc;
