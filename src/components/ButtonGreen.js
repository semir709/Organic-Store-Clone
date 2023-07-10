import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ButtonGreen = ({ text, icon }) => {
  return (
    <button className="bg-global-color-1 flex items-center justify-center w-full font-semibold py-3 rounded-md uppercase text-white tracking-tight font-medium hover:bg-global-color-0 transition duration-300 my-2 ">
      <div className="me-5">{icon}</div>
      {text}
    </button>
  );
};

export default ButtonGreen;
