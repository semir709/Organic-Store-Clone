import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  cart,
  redirectPath = "/shop/products",
  children,
}) => {
  if (!cart || cart.length <= 0) return <Navigate to={redirectPath} replace />;
  return children;
};

export default ProtectedRoute;
