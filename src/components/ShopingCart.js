import React from "react";

const ShopingCart = ({ setCartToggle, cartToggle }) => {
  return (
    <div className="">
      <div
        className={`fixed w-full h-full bg-black top-0 left-0 transition duration-300  ${
          cartToggle ? "opacity-50 visible" : "opacity-0 invisible"
        } `}
      ></div>
      <div
        className={`fixed w-1/3 h-full bg-white top-0 right-0  duration-300 border
       ${cartToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        <button onClick={() => setCartToggle(false)}>Close</button>
      </div>
    </div>
  );
};

export default ShopingCart;
