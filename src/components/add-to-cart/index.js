"use client";

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "@/store/slices/cart-slice";

export default function AddToCartButton({ productItem }) {
  const { cart } = useSelector((state) => state); 
  
  const dispatch = useDispatch();

  function handleRemovefromCart() {
    dispatch(removeFromCart(productItem.id));
  }

  function handleAddtoCart() {
    dispatch(addToCart(productItem));
  }

  return (
    <div>
      <Button
      type="button"
        variant="contained"
        onClick={
          cart.cartItems.some((item) => item.id === productItem.id)
            ? handleRemovefromCart
            : handleAddtoCart
        }
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from Cart"
          : "Add to Cart"}
      </Button>
    </div>
  );
}
