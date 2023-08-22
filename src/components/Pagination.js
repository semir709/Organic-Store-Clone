import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages }) => {
  const pages = new Array(totalPages).fill(null);
  return (
    <div className="flex items-center h-11">
      {pages.map((el, index) => (
        <Link
          key={index}
          className="mx-3 py-2 px-4 border border-global-color-0 text-global-color-0 hover:text-white hover:bg-global-color-0"
          to={`/shop/all/${index + 1}`}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
