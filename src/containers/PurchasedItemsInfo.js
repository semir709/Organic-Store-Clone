import React from "react";
import { TableOfProducts } from "../components/index";

const PurchasedItemsInfo = () => {
  const products = JSON.parse(localStorage.getItem("cart"));
  return (
    <div>
      <TableOfProducts products={products || []} read={true} />
    </div>
  );
};

export default PurchasedItemsInfo;
