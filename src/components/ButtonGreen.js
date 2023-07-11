import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ButtonGreen = ({ text, icon, iconLeft }) => {
  return (
    <button className="bg-global-color-1 w-fit flex items-center justify-center font-semibold py-3 px-5 rounded-md uppercase text-white tracking-tight  hover:bg-global-color-0 transition duration-300 my-2 ">
      {iconLeft === true && <div className="me-5">{icon}</div>}
      {text}
      {iconLeft === false && <div className="ms-5">{icon}</div>}
    </button>
  );
};

ButtonGreen.defaultProps = {
  iconLeft: true,
};

export default ButtonGreen;
