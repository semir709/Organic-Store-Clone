import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

const CartContextCustom = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [hasProducts, setHasProducts] = useState(
    !!JSON.parse(localStorage.getItem("cart"))
  );

  console.log("context initial");

  const [hasContactInfo, setHasContactInfo] = useState(
    !!JSON.parse(localStorage.getItem("contactInfo"))
  );

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart"));
    setCart(local ? local : []);
  }, []);

  const saveCartContext = (local) => {
    setCart(local);
  };

  const updateQuantity = (id, newAmount) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, amount: newAmount };
      } else return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    if (updatedCart.length === 0) localStorage.removeItem("cart");
    else localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeAllItems = () => {
    setCart([]);
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
    removeAllItems,
    saveCartContext,
    itemsCount,
    caculateFinalPrice,
    removeItem,
    updateQuantity,
    hasProducts,
    setHasProducts,
    hasContactInfo,
    setHasContactInfo,
  };

  return (
    <CartContext.Provider value={storage}>{children}</CartContext.Provider>
  );
};

export default CartContextCustom;
