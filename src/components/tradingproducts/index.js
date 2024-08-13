import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button
} from "@mui/material";
import Image from "next/image";
import img1 from "../imges/img1.png";
import chr4 from "../imges/chr4.png";
import chr3 from "../imges/chr3.png";
import chr2 from "../imges/chr2.png";
import chr1 from "../imges/chr1.png";

const Index = () => {
  return (
    <div>
      <Container
        sx={{
          mt: 10
        }}
      >
        <Grid container spacing={2} p={3} pt={5}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "550px",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src={img1}
                alt="Placeholder Image"
                layout="intrinsic"
                width={400}
                height={400}
                objectFit="contain"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <Box mb={2}>
              <Typography
                variant="h5"
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                Unique features of Trading Products
              </Typography>
            </Box>
            <Box mb={3} ml={1}>
              <List
                sx={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  "& .MuiListItem-root": { display: "list-item" }
                }}
              >
                <ListItem
                  sx={{ "&::marker": { color: "blue", fontSize: "1.5em" } }}
                >
                  <ListItemText
                    primary={
                      <Typography>Item 1: Lorem ipsum dolor sit</Typography>
                    }
                  />
                </ListItem>
                <ListItem
                  sx={{ "&::marker": { color: "blue", fontSize: "1.5em" } }}
                >
                  <ListItemText
                    primary={<Typography>Item 2: Sed do eiusmod</Typography>}
                  />
                </ListItem>
                <ListItem
                  sx={{ "&::marker": { color: "blue", fontSize: "1.5em" } }}
                >
                  <ListItemText
                    primary={
                      <Typography>
                        Item 3: Ut enim ad minim veniam, quis
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Button
                  sx={{
                    backgroundColor: "#fb2e86",
                    color: "white",
                    padding: "10px 15px",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "#d7236a"
                    }
                  }}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography variant="h6">B2B Italian Sofa</Typography>
                  <Typography variant="h6">$32</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Box mb={4}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 3
            }}
          >
            Trading Products
          </Typography>
        </Box>
        <Grid container spacing={2} p={3} pt={5}>
          {[chr4, chr3, chr2, chr1].map((imageSrc, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textAlign: "center",
                  width: "230px", // Set a fixed width for the square
                  height: "300px", // Set a fixed height for the square
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  paddingTop: "20px"
                }}
              >
                <Box
                  sx={{
                    width: "80%", // Adjust width to make the image smaller
                    height: "80%", // Adjust height to maintain aspect ratio
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "30px",
                    backgroundColor: "gray"
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Product ${index}`}
                    layout="responsive"
                    objectFit="contain"
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    textAlign: "center"
                  }}
                >
                  <Typography variant="h6">Product name</Typography>
                  <Typography variant="h6">$26</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
