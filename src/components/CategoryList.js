import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const CategoryList = ({ data }) => {
  return (
    <ul>
      {!data
        ? [1, 2].map(() => <Skeleton />)
        : data.map(({ name, count }) => (
            <li>
              <Link
                to={"/"}
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
