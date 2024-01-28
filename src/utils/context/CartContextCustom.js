import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

const CartContextCustom = ({ children }) => {
  const [cart, setCart] = useState([]);

  const saveCartContext = () => {
    const local = JSON.parse(localStorage.getItem("cart"));
    setCart(local);
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart"));
    setCart(local);
  }, []);

  const storage = { cart, saveCartContext };

  return (
    <CartContext.Provider value={storage}>{children}</CartContext.Provider>
  );
};

export default CartContextCustom;
