import { Box, Button } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PaginationComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ color: "white", textTransform: "none" }}
      >
        Previous Post
      </Button>
      <Button
        endIcon={<KeyboardArrowRightIcon />}
        sx={{ color: "white", textTransform: "none" }}
      >
        Next Post
      </Button>
    </Box>
  );
};

export default PaginationComponent;
