import React from "react";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  InputAdornment
} from "@mui/material";
import { AccountCircle, Email, Comment } from "@mui/icons-material";

const BlogContact = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        margin: "0 auto",
        marginTop: "80px"
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="small" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          fullWidth
          label="Your Email"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email fontSize="small" />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <TextField
        fullWidth
        label="Write your comment"
        variant="outlined"
        multiline
        rows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Comment fontSize="small" />
            </InputAdornment>
          )
        }}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Save my name, email, and website in this browser for the next time I comment."
        sx={{ alignItems: "center", fontSize: "15px", marginRight: 0 }}
        componentsProps={{
          typography: { flexGrow: 1 },
          label: { flexDirection: "row-reverse" }
        }}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#FB2E86",
          color: "white",
          "&:hover": {
            backgroundColor: "#FB2E86"
          }
        }}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default BlogContact;
