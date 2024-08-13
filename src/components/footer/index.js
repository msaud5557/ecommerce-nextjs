import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Hekto from "../imges/Hekto.png";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div class=" h-64 bg-[#eeeffb]">
        <Container sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eeeffb",
              padding: "20px 0" 
            }}
          >
            <Grid container spacing={2} p={5}>
              <Grid item xs={6} bgcolor="#eeeffb">
                <Box sx={{ position: "relative" }}>
                  <Image
                    src={Hekto}
                    alt="Placeholder Image"
                    objectFit="contain"
                  />
                </Box>
                <Grid container direction="row" pt={5} alignItems="center">
                  <Grid item xs={8}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      id=""
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        marginRight: "10px"
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      sx={{
                        backgroundColor: "#fb2e86",
                        color: "white",
                        padding: "10px 20px",
                        "&:hover": {
                          backgroundColor: "#fb2e86"
                        }
                      }}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
                <Box pt={2}>
                  <Typography variant="body1" color="black">
                    Contact info: example@example.com
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  color: "black"
                }}
              >
                <Typography variant="h5" color="black">
                  Categories
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ paddingTop: "15px" }}
                >
                  Category 1
                </Typography>
                <Typography variant="body1" color="black">
                  Category 2
                </Typography>
                <Typography variant="body1" color="black">
                  Category 3
                </Typography>
                <Typography variant="body1" color="black">
                  Category 4
                </Typography>
                <Typography variant="body1" color="black">
                  Category 5
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" color="black">
                  Customer Care
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ paddingTop: "15px" }}
                >
                  Help Center
                </Typography>
                <Typography variant="body1" color="black">
                  Contact Us
                </Typography>
                <Typography variant="body1" color="black">
                  Returns
                </Typography>
                <Typography variant="body1" color="black">
                  Shipping
                </Typography>
                <Typography variant="body1" color="black">
                  FAQs
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" color="black">
                  Pages
                </Typography>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ paddingTop: "15px" }}
                >
                  Home
                </Typography>
                <Typography variant="body1" color="black">
                  Shop
                </Typography>
                <Typography variant="body1" color="black">
                  About
                </Typography>
                <Typography variant="body1" color="black">
                  Contact
                </Typography>
                <Typography variant="body1" color="black">
                  Blog
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div className="w-full h-16 bg-[#e7e4f8]">
        <Container
          sx={{
            height: "60px"
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            <Grid item xs={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px"
                  }}
                >
                  <Typography variant="body2" color="white">
                    C
                  </Typography>
                </Box>
                <Typography color="black">
                  Webecy-All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "darkblue",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <IconButton color="inherit" href="#">
                    <FacebookIcon style={{ color: "white" }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "darkblue",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <IconButton color="inherit" href="#">
                    <TwitterIcon style={{ color: "white" }} />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "darkblue",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <IconButton color="inherit" href="#">
                    <InstagramIcon style={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
