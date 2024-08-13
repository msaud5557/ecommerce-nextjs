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

function LoginPage() {
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
            width: "100%",
            maxWidth: 350,
            margin: "0 auto"
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
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
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default LoginPage;
