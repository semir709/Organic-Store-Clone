import React from "react";

const ListNav = ({ arrayText }) => {
  return (
    <ul className="md:flex md:px-[10px] block ">
      {arrayText.map(({ text, url }, index) => (
        <li
          key={index}
          className={`p-[20px] text-global-color-3 hover:text-global-color-0 hover:cursor-pointer transition duration-300 md:border-y-0 
          ${index === 0 ? "border-y-[1px]" : "border-b-[1px]"}`}
        >
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default ListNav;
