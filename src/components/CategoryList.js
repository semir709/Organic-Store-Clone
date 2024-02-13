import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const CategoryList = ({ data }) => {
  return (
    <ul>
      {!data
        ? [1, 2].map((el, index) => <Skeleton key={index} />)
        : data.map(({ name, count, slug }) => (
            <li key={slug}>
              <Link
                to={`/shop/category/${slug}`}
                className="text-global-color-0 hover:text-global-color-1"
              >
                {name}({count})
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default CategoryList;
