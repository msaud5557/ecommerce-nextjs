"use server";

export default async function fetchAllProducts() {
  try {
    const apiresponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store"
    });

    const data = await apiresponse.json();
    return {
      success: true,
      data: data.products
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error fetching products"
    };
  }
}

// Fetch the detail product

export async function fetchDetailProducts(currentID) {
  try {
    const apiresponse = await fetch(
      `https://dummyjson.com/products/${currentID}`,
      {
        method: "GET",
        cache: "no-store"
      }
    );

    const data = await apiresponse.json();
    return data;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error fetching products"
    };
  }
}
