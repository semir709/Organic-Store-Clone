import { useState } from "react";
import { useCart } from "../utils/context/CartContextCustom";
import CreateContactInfoPage from "./CreateContactInfoPage";
import SelectContactInfoPage from "./SelectContactInfoPage";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute, PurchasedItemsInfo } from "../containers/index";

const CheckoutPage = () => {
  const { hasProducts, hasContactInfo } = useCart();

  return (
    <>
      <Routes>
        <Route path="/*" element={<>Wrong url path</>} />
        <Route
          path="/createContactInfo"
          element={
            <ProtectedRoute
              isOpen={hasProducts}
              redirectPath={"/shop/products"}
            >
              <CreateContactInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/selectContactInfo"
          element={
            <ProtectedRoute
              isOpen={hasContactInfo && hasProducts}
              redirectPath="/checkout/createContactInfo"
            >
              <SelectContactInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchasedItemsInfo"
          element={
            <ProtectedRoute
              isOpen={hasContactInfo && hasProducts}
              redirectPath="/checkout/createContactInfo"
            >
              <PurchasedItemsInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default CheckoutPage;
