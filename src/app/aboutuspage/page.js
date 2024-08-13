import Aboutclient from "@/components/aboutclients";
import AboutUS from "@/components/aboutus";
import Aboutusfeatures from "@/components/aboutusfeatures";
import Footericons from "@/components/footericons";
import NavLinks from "@/components/nav-links";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <NavLinks />
      <AboutUS />
      <Aboutusfeatures />
      <Aboutclient/>

      <Footericons />
    </>
  );
};

export default AboutUsPage;
