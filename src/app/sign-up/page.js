"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid
} from "@mui/material";

function SignUpPage() {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        padding: 0,
        "@media (min-width: 600px)": {
          padding: "0 0"
        }
      }}
    >
      <Container
        sx={{
          margin: "100px"
        }}
      >
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            width: "100%", // Ensure this takes full width as well
            maxWidth: 350, // Optionally set a max width for the form
            margin: "0 auto" // Center the form
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default SignUpPage;
