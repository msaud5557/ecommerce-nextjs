import fetchAllProducts from "@/actions";
import ProductCard from "../components/product-card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MainContext from "@/components/main";
import { Box } from "@mui/material";
import Shopex from "@/components/Shopex";
import TradingProducts from "@/components/tradingproducts";
import ProductCategory from "@/components/productcategory";
import DiscountItem from "@/components/discountItem";
import TopCategory from "@/components/TopCategories";
import BgImage from "@/components/BgImage";
import LatestBlog from "@/components/LatestBlog";
import EcomAccessory from "@/components/eccomerceAssesries";
import Footericons from "@/components/footericons";

export default async function Home() {
  const getAllProducts = await fetchAllProducts();
  

  return (
    <>
      <MainContext />

      <Container
        maxWidth="lg"
        sx={{
          padding: 3,
          textAlign: "center"
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            marginBottom: 4
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginTop: "90px"
            }}
          >
            Featured Products
          </Typography>
        </Typography>
        <div>
          {getAllProducts &&
          getAllProducts.data &&
          getAllProducts.data.length > 0 ? (
            <Grid container spacing={4}>
              {getAllProducts.data.map((productItem) => (
                <Grid item xs={12} sm={6} md={3} key={productItem.id}>
                  <ProductCard item={productItem} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography
              variant="h6"
              sx={{
                marginTop: 4,
                fontStyle: "italic"
              }}
            >
              No products available
            </Typography>
          )}
        </div>
      </Container>
      <Shopex />
      <TradingProducts />
      <ProductCategory />
      <DiscountItem />
      <TopCategory />
      <Footericons />
      <BgImage />
      <LatestBlog />
    </>
  );
}
