import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Container, Grid, Typography } from "@mui/material";
import Contactusdetails from "../contactusdetails";

const Contactus = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5} p={{ xs: 2, md: 5 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box>
                <Typography variant="h5" component="h2">
                  Information About us
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  cumque molestias neque architecto atque incidunt laboriosam
                  ipsa eum, dolorem, dolore quam quo doloribus eius! Quaerat.
                </Typography>
              </Box>
              <Box
                pt={2}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 1
                }}
              >
                <FiberManualRecordIcon color="primary" />
                <FiberManualRecordIcon color="secondary" />
                <FiberManualRecordIcon style={{ color: "purple" }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box>
                <Typography variant="h5" component="h2">
                  Contact Way
                </Typography>
              </Box>
              <Box pt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: 40, mr: 1, color: "blue" }}
                      />
                      <Box>
                        <Typography>Tel: 0312345670</Typography>
                        <Typography>email: msaud@gmail.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: 40, mr: 1, color: "green" }}
                      />
                      <Box>
                        <Typography>Tel: 0312345670</Typography>
                        <Typography>email: msaud@gmail.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: 40, mr: 1, color: "purple" }}
                      />
                      <Box>
                        <Typography>Tel: 0312345670</Typography>
                        <Typography>email: msaud@gmail.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: 40, mr: 1, color: "orange" }}
                      />
                      <Box>
                        <Typography>Tel: 0312345670</Typography>
                        <Typography>email: msaud@gmail.com</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Contactusdetails />
      </Container>
    </>
  );
};

export default Contactus;
