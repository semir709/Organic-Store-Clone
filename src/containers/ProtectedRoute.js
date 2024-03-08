import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "../utils/context/CartContextCustom";

const ProtectedRoute = ({ isOpen = false, redirectPath, children }) => {
  if (!isOpen) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default ProtectedRoute;
