import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ totalAmount, perPage }) => {
  const length = Math.ceil(totalAmount / perPage);

  const pages = Array.from({ length: length });
  const { current = 1 } = useParams();

  return (
    <div className="flex items-center h-11">
      {current > 1 && (
        <Link
          key={0}
          className="mx-3 h-full  px-4 border border-global-color-0 text-global-color-0 hover:text-white hover:bg-global-color-0 flex items-center"
          to={`/shop/all/${current - 1}`}
        >
          <BsArrowLeft />
        </Link>
      )}

      {pages.map((el, index) => {
        return (
          <Link
            key={index + 1}
            className="mx-3 h-full  px-4 border border-global-color-0 text-global-color-0 hover:text-white hover:bg-global-color-0 flex items-center"
            to={`/shop/all/${index + 1}`}
          >
            {index + 1}
          </Link>
        );
      })}

      {current < pages.length && (
        <Link
          key={0}
          className=" h-full mx-3  px-4 border border-global-color-0 text-global-color-0 hover:text-white hover:bg-global-color-0 flex items-center"
          to={`/shop/all/${parseInt(current) + 1}`}
        >
          <BsArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
