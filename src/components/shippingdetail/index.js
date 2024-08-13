import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";
import Image from "next/image";
import img1 from "../imges/Rectangle 144.png";
import img2 from "../imges/Rectangle 145.png";
import img3 from "../imges/Rectangle 146.png";
import img4 from "../imges/Rectangle 147.png";
import img5 from "../imges/Rectangle 34.png";

const images = [img1, img2, img3, img4, img5]; // Store the images in an array

const ShippingDetail = () => {
  return (
    <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12} md={8}
            p={3}
            sx={{
              backgroundColor: "#BFC6E0"
            }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">Contact Information</Typography>
              <Typography>
                Already have an account? <a href="/login">Log in</a>
              </Typography>
            </Box>
            <Box mt={2}>
              <TextField
                variant="standard"
                fullWidth
                placeholder="Email or mobile phone number"
                InputProps={{ disableUnderline: true }}
                sx={{ borderBottom: "1px solid black", mt: 2 }}
              />
            </Box>
            <Box mt={2}>
              <FormControlLabel
                control={<Checkbox sx={{ color: "green" }} />}
                label="Keep me up to date on news and exclusive offers"
              />
            </Box>
            <Box mt={6}>
              <Typography variant="h5">Shipping Address</Typography>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="First Name"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: "1px solid black" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Last Name"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: "1px solid black" }}
                  />
                </Grid>
              </Grid>
              <Box mt={3}>
                <TextField
                  variant="standard"
                  fullWidth
                  placeholder="Address"
                  InputProps={{ disableUnderline: true }}
                  sx={{ borderBottom: "1px solid black" }}
                />
              </Box>
              <Box mt={3}>
                <TextField
                  variant="standard"
                  fullWidth
                  placeholder="City"
                  InputProps={{ disableUnderline: true }}
                  sx={{ borderBottom: "1px solid black" }}
                />
              </Box>
              <Grid container spacing={2} mt={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Country"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: "1px solid black" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Postal Code"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: "1px solid black" }}
                  />
                </Grid>
              </Grid>
              <Box
                mt={5}
                display="flex"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FB2E86",
                    "&:hover": {
                      backgroundColor: "#FB2E86"
                    }
                  }}
                >
                  Continue Shipping
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {images.map((image, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{ display: "flex", borderBottom: "1px solid black" }}
                  >
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                        marginLeft: "15px"
                      }}
                    >
                      <Image
                        src={image}
                        alt={`product image ${index + 1}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", ml: 2 }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h6">
                          Ut diam consequat
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Color: Brown
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Size: XL
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: "auto",
                        mr: 2
                      }}
                    >
                      <Typography variant="h6">$32.00</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Card sx={{ borderBottom: "1px solid black", mt: 5, p: 3 }}>
              <Grid
                container
                alignItems="center"
                sx={{ borderBottom: "1px solid black", mt: 2, p: 2 }}
              >
                <Grid item xs={6}>
                  <Typography variant="h5">Subtitle:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="right">
                    $219.00
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                sx={{ borderBottom: "1px solid black", mt: 4, p: 2 }}
              >
                <Grid item xs={6}>
                  <Typography variant="h5">Total:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" align="right">
                    $219.00
                  </Typography>
                </Grid>
              </Grid>
              <Box mt={4}>
                <FormControlLabel
                  control={<Checkbox sx={{ color: "green" }} size="small" />}
                  label="Shipping & taxes calculated at checkout"
                />
              </Box>
              <Box mt={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#19D16F",
                    "&:hover": {
                      backgroundColor: "#19D16F"
                    }
                  }}
                >
                  Proceed to checkout
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShippingDetail;
