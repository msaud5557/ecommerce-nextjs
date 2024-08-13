import BgImage from "@/components/BgImage";
import NavLinks from "@/components/nav-links";
import ProductDetailCard from "@/components/productdetailcard";
import ProductDetailDesc from "@/components/productdetaildesc";
import ProductDetail from "@/components/productdetails";
import React from "react";

const ProductDetailPage = () => {
  return (
    <>
      <NavLinks />
      <ProductDetail />
      <ProductDetailDesc />
      <ProductDetailCard />
      <BgImage />
    </>
  );
};

export default ProductDetailPage;
