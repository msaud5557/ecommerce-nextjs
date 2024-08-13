import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import img1 from "../imges/Group 124.png";

const Contactusdetails = () => {
  return (
    <>
      <Grid container p={{ xs: 2, sm: 3, md: 5 }} spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { xs: 2, md: 3 },
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Get in Touch
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              cumque molestias neque architecto atque incidunt laboriosam ipsa
              eum, dolorem, dolore quam quo doloribus eius! Quaerat.
            </Typography>
          </Box>
          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white", borderRadius: "7px" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white", borderRadius: "7px" }}
                />
              </Grid>
            </Grid>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                mt: 2,
                backgroundColor: "white",
                borderRadius: "7px",
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2, backgroundColor: "white", borderRadius: "7px" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#FB2E86",
                ":hover": {
                  backgroundColor: "#FB2E86",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { xs: 2, md: 3 },
          }}
        >
          <Box m={{ xs: 0, sm: 2 }}>
            <Image src={img1} alt="Contact Image" layout="responsive" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contactusdetails;
