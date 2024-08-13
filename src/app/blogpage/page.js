import BlogpageComponent from "@/components/blogpage";
import Footericons from "@/components/footericons";
import NavLinks from "@/components/nav-links";
import React from "react";

const Blogpage = () => {
  return (
    <>
      <NavLinks />
      <BlogpageComponent />
      <Footericons />
    </>
  );
};

export default Blogpage;
