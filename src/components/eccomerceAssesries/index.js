"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const EcomAccessory = () => {
  const [sortBy, setSortBy] = useState("best_match");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h5">
              Eccomerce Accessories & Fashion item
            </Typography>
            <Typography>About 9,629 results (10.62 seconds)</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          container
          spacing={1}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <Grid item>
            <Typography>Per Page:</Typography>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              size="small"
              type="number"
              defaultValue={10}
              inputProps={{ min: 1, style: { width: "60px" } }}
            />
          </Grid>
          <Grid item>
            <Typography>Sort By:</Typography>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                onChange={handleSortChange}
                label="Sort By"
              >
                <MenuItem value="best_match">Best Match</MenuItem>
                <MenuItem value="price_low_to_high">
                  Price: Low to High
                </MenuItem>
                <MenuItem value="price_high_to_low">
                  Price: High to Low
                </MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Typography>View:</Typography>
          </Grid>
          <Grid item>
            <IconButton size="small">
              <FormatListBulletedIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              size="small"
              type="text"
              placeholder="View Option"
              inputProps={{ style: { width: "80px" } }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EcomAccessory;
