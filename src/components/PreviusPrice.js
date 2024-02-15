import React from "react";

const PreviusPrice = ({ price }) => {
  return (
    <>
      {price && (
        <span className="me-2 line-through text-gray-400">${price}</span>
      )}
    </>
  );
};

export default PreviusPrice;
