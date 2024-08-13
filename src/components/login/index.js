import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from "@mui/material";
import React from "react";

const LoginPageCompo = () => {
  return (
    <>
      <Container
        sx={{
          height: "530px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            marginTop: "100px",
            width: "450px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Typography sx={{ fontWeight: "20px" }} variant="h4">
              Login
            </Typography>
          </Box>
          <Box
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Typography sx={{ fontWeight: "20px" }}>
              Please login using account detail below
            </Typography>
          </Box>
          <Box component="form" noValidate sx={{ mt: 1, ml: 5, mr: 5 }}>
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
          </Box>
          <Box sx={{ ml: 5 }}>
            <Link href="#" variant="body2">
              Forgot your password?
            </Link>
          </Box>
          <Box sx={{ ml: 5, mr: 5 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#FB2E86" }}
            >
              Sign In
            </Button>
          </Box>
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Typography sx={{ fontWeight: "20px" }}>
              Dont have an Account?Create account
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPageCompo;
