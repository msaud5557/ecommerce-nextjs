"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import hekto from "../imges/Hekto.png";
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const TopNavbar = () => (
  <AppBar
    position="static"
    color="default"
    sx={{
      backgroundColor: "#7e33e0",
      boxShadow: "none",
      padding: "0 10px",
      minHeight: "30px",
      height: "40px"
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-around",
        minHeight: "30px",
        padding: "0 10px",
        paddingBottom: "20px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          color: "white"
        }}
      >
        <IconButton edge="start" color="inherit" size="small">
          <MailIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
          email@example.com
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          size="small"
          sx={{ marginLeft: 1 }}
        >
          <PhoneIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
          +1234567890
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          color: "white"
        }}
      >
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          English
        </Typography>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          USD
        </Typography>
        <IconButton edge="end" color="inherit" size="small">
          <FavoriteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid black",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    width: "auto"
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  flex: 1,
  padding: theme.spacing(1),
  transition: theme.transitions.create("width"),
  width: "100%",
  height: "30px"
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
  backgroundColor: "#fb2e86",
  color: "white",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: alpha("#fb2e86", 0.85)
  },
  height: "32px",
  marginLeft: "-1px" // Ensures no space between search bar and button
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#fb2e86"
  }
}));

const CustomExpandMore = styled(IconButton)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#fb2e86"
  }
}));

function ResponsiveAppBar() {
  return (
    <>
      <TopNavbar />
      <AppBar
        position="static"
        sx={{ minHeight: "40px", backgroundColor: "#ffffff" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-around",
            minHeight: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%"
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image src={hekto} alt="Placeholder Image" objectFit="contain" />
          </Box>
          <Tabs>
            <Link href="/">
              <CustomTab label="Product" />
            </Link>
            <Link href="/cart">
              <CustomTab label="Cart" />
            </Link>
          </Tabs>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search>
              <StyledInputBase
                sx={{
                  borderBottomLeftRadius: "0px"
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
