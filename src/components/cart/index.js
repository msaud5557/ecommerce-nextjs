"use client";

import { useDispatch, useSelector } from "react-redux";
import NavLinks from "../nav-links";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Container,
  Box
} from "@mui/material";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  if (!cart.cartItems || cart.cartItems.length === 0)
    return <h1>Cart is Empty</h1>;

  function handleRemoveItem(currentID) {
    dispatch(removeFromCart(currentID));
  }

  useEffect(() => {
    setTotalAmount(
      cart.cartItems.reduce((acc, current) => acc + current.price, 0)
    );
  }, [cart.cartItems]);

  return (
    <>
      <NavLinks />
      <Container style={{ marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4
          }}
        >
          <Typography variant="h4">Shopping Cart</Typography>
          <Typography variant="h5">Total Amount: ${totalAmount}</Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {cart.cartItems.map((item) => (
            <Grid item xs={12} sm={12} md={8} key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "300px",
                  width: "700px"
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: "100%", objectFit: "cover" }}
                  image={item.thumbnail}
                  alt={item.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 2,
                    flex: 1,
                    justifyContent: "space-between",
                    p: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    marginRight: "10px"
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 1
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove from Cart
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
