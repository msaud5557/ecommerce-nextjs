import BgImage from "@/components/BgImage";
import Footericons from "@/components/footericons";
import LoginPageCompo from "@/components/login";
import NavLinks from "@/components/nav-links";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <NavLinks />
      <LoginPageCompo />

      <Footericons />
    </>
  );
};

export default LoginPage;
