import { fetchDetailProducts } from "@/actions";
import AddToCartButton from "@/components/add-to-cart";
import NavLinks from "@/components/nav-links";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  CardActions
} from "@mui/material";

export default async function DetailPage({ params }) {
  const getDetailProduct = await fetchDetailProducts(params.details);
  

  return (
    <>
    <NavLinks/>

<Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Product Details
        </Typography>
      </Box>
      { getDetailProduct && (
        <Card
          sx={{
            display: "flex",
            border: "1px solid #ddd",
            boxShadow: 3,
            width: "700px"
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={getDetailProduct.thumbnail}
            alt={getDetailProduct.title}
            sx={{ width: "auto", maxHeight: "300px", margin: "0 auto" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              p: 2
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {getDetailProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {getDetailProduct.description}
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                Price: ${getDetailProduct.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <AddToCartButton productItem={getDetailProduct} />
            </CardActions>
          </Box>
        </Card>
      )}
    </Container>
    
    </>
  );
}
