import React from "react";
import leafDraw from "../img/leafDraw.png";

const Head = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="mb-[30px] text-4xl font-semibold text-center">
        Best Selling Products
      </h2>

      <img src={leafDraw} alt="" />
    </div>
  );
};

export default Head;
