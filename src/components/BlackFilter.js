import React from "react";

const BlackFilter = ({ toggle }) => {
  return (
    <div
      className={`fixed z-40 w-full h-full bg-black top-0 left-0 transition duration-300  ${
        toggle ? "opacity-50 visible" : "opacity-0 invisible"
      } `}
    ></div>
  );
};

export default BlackFilter;
