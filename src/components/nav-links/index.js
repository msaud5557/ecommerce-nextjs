"use-client";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid
} from "@mui/material";

function NavLinks() {
  return (
    <div className="nav-links">
      <Box
        height="200px"
        bgcolor="#f6f5ff"
        sx={{
          display: "flex",

          //   justifyContent: "center",
          //   alignItems: "center",

          padding: 5,
          width: "100%",
          flexDirection: "column"
        }}
      >
        <Container>
          <Box
            sx={{
              marginLeft: "20px"
            }}
          >
            <Typography variant="h4" justifyContent="flex-start">
              Product Details
            </Typography>
            <Typography variant="h6">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "5px",
                  textDecoration: "none"
                }}
              >
                
                <Link
                  sx={{
                    textDecoration: "none"
                  }}
                  href="/cart"
                >
                  Cart
                </Link>
                .
                <Link
                  sx={{
                    textDecoration: "none"
                  }}
                  href="#"
                >
                  ProductDetails
                </Link>
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default NavLinks;
