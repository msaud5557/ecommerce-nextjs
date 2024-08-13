import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button
} from "@mui/material";
import React from "react";

const FaqFile = () => {
  return (
    <Container>
      <Grid
        container
        p={5}
        sx={{
          height: { xs: "auto", md: "500px" }
        }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
          p={2}
          sx={{
            height: { xs: "auto", md: "450px" }
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold"
              }}
            >
              General Information
            </Typography>
            <Box>
              <Box mt={3}>
                <Typography
                  sx={{
                    fontWeight: "bold"
                  }}
                  variant="body1"
                >
                  This is Faq file?
                </Typography>
                <Typography pt={1} variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                  ipsum, dolor sit amet consectetur adipisicing.
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography
                  sx={{
                    fontWeight: "bold"
                  }}
                  variant="body1"
                >
                  This is Faq file?
                </Typography>
                <Typography pt={1} variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                  ipsum, dolor sit amet consectetur adipisicing.
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography
                  sx={{
                    fontWeight: "bold"
                  }}
                  variant="body1"
                >
                  This is Faq file?
                </Typography>
                <Typography pt={1} variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                  ipsum, dolor sit amet consectetur adipisicing.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          p={5}
          sx={{
            height: { xs: "auto", md: "450px" },
            backgroundColor: "lightgray",
            borderRadius: "7px"
          }}
        >
          <Box
            sx={{
              height: "100%"
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px dashed gray",
                pb: 2
              }}
            >
              Ask a Question
            </Typography>
            <Box mt={3}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "7px" }}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "7px" }}
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
                    backgroundColor: "#FB2E86"
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FaqFile;
