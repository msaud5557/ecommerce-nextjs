import { Container, Grid, Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../imges/image1.png";
import img2 from "../imges/image2.png";
import img3 from "../imges/image3.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const LatestBlog = () => {
  const images = [img1, img2, img3];

  return (
    <Container
      sx={{
        textAlign: "center", // Center align the content
        padding: { xs: "10px", md: "20px" }
      }}
    >
      <Box mb={3}>
        <Typography variant="h4" sx={{ fontSize: "bold" }}>
          Latest Blog
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "20px", marginBottom: "50px" }}
      >
        {images.map((img, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              height: "400px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: "330px",
                height: "400px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0.1, 0.1, 0.1, 0.1)"
              }}
            >
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  key={index}
                  src={img1}
                  alt={`Placeholder Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px"
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                  paddingTop: "5px"
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CreateOutlinedIcon />
                  <Typography sx={{ marginLeft: "5px", marginRight: "5px" }}>
                    Saber Ali
                  </Typography>
                  <CalendarMonthOutlinedIcon />
                  <Typography sx={{ marginLeft: "5px" }}>Saber</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  flexDirection: "column"
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ display: "flex", justifyContent: "flex-left" }}
                >
                  Top Essential Trends
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit kasc iauscvc iuasas
                </Typography>
                <Link sx={{ marginTop: "20px", display: "block" }}>
                  <Typography sx={{ textAlign: "left", marginleft: "20px" }}>
                    Read More
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestBlog;
