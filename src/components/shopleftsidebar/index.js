import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Rating,
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment
} from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import SearchIcon from "@mui/icons-material/Search";
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
  },
  {
    id: 3,
    title: "Product Title 3",
    price: "$Price",
    description:
      "Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consectetur! Lorem ipsum dolor sit amet.",
    rating: 4,
    img: img1
  },
  {
    id: 4,
    title: "Product Title 4",
    price: "$Price",
    description:
      "Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consectetur! Lorem ipsum dolor sit amet.",
    rating: 4,
    img: img1
  },
  {
    id: 5,
    title: "Product Title 5",
    price: "$Price",
    description:
      "Product Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consectetur! Lorem ipsum dolor sit amet.",
    rating: 4,
    img: img1
  }
  // Add more product objects as needed
];

const ShopLeftSidebar = () => {
  const categories = [
    "Coaster Furniture",
    "Fusion Dot High Fashion",
    "Unique Furniture Restor",
    "Dream Furniture Flipping",
    "Young Repurposed",
    "Green DIY furniture"
  ];

  const discounts = ["20% Cashback", "5% Cashback Offer", "25% Discount Offer"];

  const ratings = ["(2341)", "(1726)", "(258)", "(25)"];

  const priceRanges = [
    "$0.00 - $150.00",
    "$150.00 - $350.00",
    "$150.00 - $504.00",
    "$450.00 +"
  ];

  const colors = [
    { name: "Blue", hex: "#0000FF" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Black", hex: "#000000" },
    { name: "Sky", hex: "#87CEEB" }
  ];

  return (
    <Container
      sx={{
        marginTop: "100px"
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, border: "1px solid gray" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Product Brand
            </Typography>
            {categories.map((category, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={category}
                sx={{ display: "block" }}
              />
            ))}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Discount Offer
            </Typography>
            {discounts.map((discount, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={discount}
                sx={{ display: "block" }}
              />
            ))}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Rating Item
            </Typography>
            {ratings.map((rating, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Checkbox />
                <Rating
                  name="read-only"
                  value={5} // Set to maximum rating to show full stars
                  readOnly
                  size="small"
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "yellow"
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "lightgray"
                    }
                  }}
                />
                <Typography sx={{ marginRight: 1 }}>{rating}</Typography>
              </Box>
            ))}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Price Filter
            </Typography>
            {priceRanges.map((range, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={range}
                sx={{ display: "block" }}
              />
            ))}
            <Box sx={{ mt: 4 }}>
              <TextField
                variant="outlined"
                placeholder="Enter price range"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                sx={{ borderRadius: 1 }}
              />
            </Box>

            {/* Color Filter Section */}
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
              Color Filter
            </Typography>
            {colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 1
                }}
              >
                <Checkbox />
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: color.hex,
                    borderRadius: "50%"
                  }}
                />
                <Typography>{color.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {products.map((product) => (
            <Grid
              key={product.id}
              container
              p={3}
              sx={{
                border: "1px solid red",
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
                  border: "1px dashed gray",
                  height: "100%",
                  display: "flex"
                }}
              >
                <Box
                  sx={{
                    border: "1px dashed gray",
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
                    border: "1px dashed gray",
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
                    <MoreHorizIcon sx={{ color: "blue", fontSize: "40px" }} />{" "}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h6">{product.price}</Typography>
                    <Rating
                      name="read-only"
                      value={product.rating}
                      readOnly
                      size="small"
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "yellow"
                        },
                        "& .MuiRating-iconEmpty": {
                          color: "lightgray"
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body1">
                      {product.description}
                    </Typography>
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
                      <ShoppingCartIcon
                        sx={{ color: "white", fontSize: "16px" }}
                      />
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShopLeftSidebar;
