import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  Card,
  IconButton
} from "@mui/material";
import Image from "next/image";
import img from "../imges/Rectangle 144.png"; // Replace with the correct image path
import CloseIcon from "@mui/icons-material/Close";

const ShoppingcardCompo = () => {
  return (
    <Container sx={{ marginBottom: "100px", px: { xs: 1, sm: 2, md: 3 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                    Quantity
                  </TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ borderBottom: "1px solid black" }}>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 60, sm: 80 },
                        position: "relative",
                        marginRight: 2
                      }}
                    >
                      <Image
                        src={img}
                        alt="Product"
                        layout="fill"
                        objectFit="contain"
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          fontSize: { xs: "5px", sm: "7px" },
                          top: 0,
                          right: 0,
                          color: "white",
                          backgroundColor: "black",
                          "&:hover": {
                            backgroundColor: "black"
                          }
                        }}
                      >
                        <CloseIcon
                          sx={{ fontSize: { xs: "8px", sm: "10px" } }}
                        />
                      </IconButton>
                    </Box>
                    <Box>
                      <Typography variant="body2" noWrap>
                        Product Name
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Color: Brown
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Size: XL
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>$32.00</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Button>-</Button>
                      <Typography variant="body2" mx={1}>
                        1
                      </Typography>
                      <Button>+</Button>
                    </Box>
                  </TableCell>
                  <TableCell>$32.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ marginTop: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FB2E86",
                    minWidth: "100px",
                    "&:hover": {
                      backgroundColor: "#FB2E86"
                    }
                  }}
                >
                  Update Cart
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sm={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FB2E86",
                    display: "flex",
                    minWidth: "120px",
                    "&:hover": {
                      backgroundColor: "#FB2E86"
                    }
                  }}
                >
                  Clear Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: 2, sm: 4 }
            }}
          >
            <Typography variant="h6" noWrap>
              Cart Total
            </Typography>
          </Box>
          <Card sx={{ borderBottom: "1px solid black", mt: 3, p: 2 }}>
            <Grid
              container
              alignItems="center"
              sx={{ borderBottom: "1px solid black", p: 2 }}
            >
              <Grid item xs={6}>
                <Typography variant="body1">Subtotal:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  $219.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              sx={{ borderBottom: "1px solid black", mt: 2, p: 2 }}
            >
              <Grid item xs={6}>
                <Typography variant="body1">Total:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  $219.00
                </Typography>
              </Grid>
            </Grid>
            <Box mt={3} p={2}>
              <FormControlLabel
                control={<Checkbox sx={{ color: "green" }} size="small" />}
                label="Shipping & taxes calculated at checkout"
              />
            </Box>
            <Box mt={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#19D16F",
                  "&:hover": {
                    backgroundColor: "#19D16F"
                  }
                }}
              >
                Proceed to checkout
              </Button>
            </Box>
          </Card>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: 4, sm: 6 }
            }}
          >
            <Typography variant="h6" noWrap>
              Calculate Shipping
            </Typography>
          </Box>
          <Card sx={{ borderBottom: "1px solid black", mt: 3, p: 2 }}>
            <Grid
              container
              alignItems="center"
              sx={{ borderBottom: "1px solid black", mt: 2, p: 2 }}
            >
              <Typography>City</Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              sx={{ borderBottom: "1px solid black", mt: 2, p: 2 }}
            >
              <Typography>Postal Code</Typography>
            </Grid>
            <Grid
              container
              alignItems="center"
              sx={{ borderBottom: "1px solid black", mt: 2, p: 2 }}
            >
              <Typography>Country</Typography>
            </Grid>

            <Box mt={3}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#FB2E86",
                  "&:hover": {
                    backgroundColor: "#FB2E86"
                  }
                }}
              >
                Calculate Shipping
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingcardCompo;
