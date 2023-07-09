import React from "react";

const ButtonGreen = ({ text }) => {
  return (
    <button className="bg-global-color-1 w-full py-3 rounded-md uppercase text-white tracking-tight font-medium hover:bg-global-color-0 transition duration-300 my-2 ">
      {text}
    </button>
  );
};

export default ButtonGreen;
