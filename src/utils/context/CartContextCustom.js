import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

const CartContextCustom = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart"));
    setCart(local ? local : []);
  }, []);

  const saveCartContext = (local) => {
    setCart(local);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const itemsCount = () => {
    let amount = cart.reduce(
      (accumlator, currentValue) => accumlator + parseInt(currentValue.amount),
      0
    );

    return amount;
  };

  const caculateFinalPrice = () => {
    const amount = cart.reduce(
      (accumlator, currentValue) =>
        accumlator +
        parseFloat(currentValue.price * parseInt(currentValue.amount)),
      0
    );

    return amount;
  };

  const storage = {
    cart,
    saveCartContext,
    itemsCount,
    caculateFinalPrice,
    removeItem,
  };

  return (
    <CartContext.Provider value={storage}>{children}</CartContext.Provider>
  );
};

export default CartContextCustom;
