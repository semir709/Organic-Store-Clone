import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const CheckList = ({ list }) => {
  return (
    <ul>
      {list.map(({ text }, index) => (
        <li key={index} className="flex items-center mb-2">
          <span className="me-1">
            <BiCheckCircle className="text-global-color-1" size={25} />
          </span>
          <span className="text-lg">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
