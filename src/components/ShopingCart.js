import React from "react";
import { GrFormClose } from "react-icons/gr";

const ShopingCart = ({ setCartToggle, cartToggle }) => {
  return (
    <div className="">
      <div
        className={`fixed w-full h-full bg-black top-0 left-0 transition duration-300  ${
          cartToggle ? "opacity-50 visible" : "opacity-0 invisible"
        } `}
      ></div>
      <div
        className={`fixed w-1/3 h-full bg-white top-0 right-0  duration-300 border flex flex-col 
       ${cartToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        <div className="flex justify-between p-5 items-center border-b-2 flex-1">
          <span>Shopping Cart</span>
          <button onClick={() => setCartToggle((prev) => !prev)}>
            <GrFormClose fontSize={30} />
          </button>
        </div>

        <div className=" h-full w-full flex-2 relative">
          <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            No products in chart.
          </p>
        </div>

        <div className="flex-1 mx-5 my-5">
          <button className="bg-global-color-1 w-full py-3 rounded-md uppercase text-white tracking-tight font-medium hover:bg-global-color-0 transition duration-300">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
