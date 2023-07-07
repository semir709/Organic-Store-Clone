import React from "react";

const ListNav = ({ arrayText }) => {
  return (
    <ul className="flex px-[10px]">
      {arrayText.map(({ text, url }, index) => (
        <li
          key={index}
          className="p-[20px] text-global-color-3 hover:text-global-color-0 hover:cursor-pointer transition duration-300"
        >
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default ListNav;
