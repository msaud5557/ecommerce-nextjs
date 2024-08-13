"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Box } from "@mui/material";
import Link from "next/link";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ProductCard({ item }) {
  return (
    <Card
      style={{
        maxWidth: 300,
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "visible" 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".hoverIcons").style.opacity = 1;
        e.currentTarget.querySelector(".detailsButton").style.opacity = 1;
        e.currentTarget.querySelector(".cardContent").style.backgroundColor =
          "#0000ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(".hoverIcons").style.opacity = 0;
        e.currentTarget.querySelector(".detailsButton").style.opacity = 0;
        e.currentTarget.querySelector(".cardContent").style.backgroundColor =
          "transparent";
      }}
    >
      <CardMedia
        component="img"
        alt={item.name}
        height="150"
        image={item.thumbnail}
      />
      <CardContent
        className="cardContent"
        style={{
          transition: "background-color 0.3s ease"
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2">{item.price}</Typography>
      </CardContent>
      <CardActions
        className="hoverIcons"
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}
      >
        <IconButton aria-label="add to cart" size="small">
          <ShoppingCartOutlinedIcon
            fontSize="small"
            style={{
              color: "#4634cb"
            }}
          />
        </IconButton>
        <IconButton aria-label="add to favorites" size="small">
          <FavoriteBorderOutlinedIcon
            fontSize="small"
            style={{
              color: "#18a0f2"
            }}
          />
        </IconButton>

        <IconButton aria-label="zoom in" size="small">
          <ZoomInIcon
            fontSize="small"
            style={{
              color: "#18a0f2"
            }}
          />
        </IconButton>
      </CardActions>
      <Box
        className="detailsButton"
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}
      >
        <Link href={`/${item.id}`} passHref>
          <Button
            size="small"
            style={{
              backgroundColor: "#08d15f",
              color: "white"
            }}
          >
            Details
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
