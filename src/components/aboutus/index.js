import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../imges/Group 73.png";
import Image from "next/image";

const AboutUS = () => {
  return (
    <>
      <Container>
        <Grid container p={2} mt={5} mb={5}>
          <Grid item xs={6} p={2}>
            <Box m={2}>
              <Image src={img1} alt="Contact Image" layout="responsive" />
            </Box>
          </Grid>
          <Grid item xs={6} pt={5} pl={3} sx={{ border: "1px dased gary" }}>
            <Box pt={2} sx={{ border: "1px dashed gary" }}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "bold"
                  }}
                >
                  Lorem ipsum dolor sit
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere mollitia, placeat maiores perspiciatis culpa non
                  obcaecati. Nam voluptates provident commod Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Alias perspiciatis
                  modi deserunt, sunt nihil quo illum facere non necessitatibus
                  debitis eveniet dicta pariatur iste distinctio tempore
                  architecto odio qui atque!
                </Typography>
              </Box>
              <Box sx={{ marginTop: "46px" }}>
                <Button
                  sx={{
                    backgroundColor: "#fb2e86",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#fb2e86"
                    },
                    padding: { xs: "8px 16px", sm: "10px 20px" },
                    fontSize: { xs: "0.75rem", sm: "1rem" }
                  }}
                >
                  Contact US
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUS;
