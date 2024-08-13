import OrderCompleted from "@/components/ordercompleted";
import React from "react";
import BgImage from "@/components/BgImage";
import NavLinks from "@/components/nav-links";

const OrderCompletedPage = () => {
  return (
    <>
      <NavLinks />
      <OrderCompleted />
      <BgImage />
    </>
  );
};

export default OrderCompletedPage;
