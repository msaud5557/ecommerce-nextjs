import React from "react";
import { Box, Container, Grid, Typography, Rating } from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import img1 from "../imges/Rectangle 32 (6).png";

const products = [
  {
    id: 1,
    title: "Product Title 1",
    price: "$Price",
    description:
      "Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consectetur! Lorem ipsum dolor sit amet.",
    rating: 4,
    img: img1
  },
  {
    id: 2,
    title: "Product Title 2",
    price: "$Price",
    description:
      "Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consectetur! Lorem ipsum dolor sit amet.",
    rating: 5,
    img: img1
  }
  // Add more product objects as needed
];

const ShopListCard = () => {
  return (
    <Container>
      {products.map((product) => (
        <Grid
          key={product.id}
          container
          p={2}
          sx={{
           
            height: "300px",
            marginBottom: "20px", 
            flexDirection: "row" 
          }}
        >
          <Grid
            item
            xs={12}
            p={2}
            sx={{
             
              height: "100%",
              display: "flex"
            }}
          >
            <Box
              sx={{
               
                width: "30%",
                height: "100%",
                position: "relative"
              }}
            >
              <Image
                src={product.img}
                alt="Product"
                layout="fill"
                objectFit="cover" 
                style={{
                  backgroundColor: "#f5f6f8"
                }}
              />
            </Box>
            <Box
              sx={{
                
                width: "70%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 2
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold"
                  }}
                >
                  {product.title}
                </Typography>
                <MoreHorizIcon sx={{ color: "blue", fontSize: "40px" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h6">{product.price}</Typography>
                <Rating
                  name="read-only"
                  value={product.rating}
                  readOnly
                  size="small"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body1">{product.description}</Typography>
              </Box>
              <Box
                className="hover-icons"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "10px",
                  justifyContent: "flex-start" 
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px", 
                    height: "30px"
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "white", fontSize: "16px" }} />{" "}
                  
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px"
                  }}
                >
                  <ZoomInIcon sx={{ color: "white", fontSize: "16px" }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px"
                  }}
                >
                  <FavoriteIcon sx={{ color: "white", fontSize: "16px" }} />{" "}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default ShopListCard;
