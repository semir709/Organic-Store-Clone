import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropFilter = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("Sort by latest");

  const onSelect = (e) => {
    const value = e.target.textContent;
    setSelected(value);

    setToggle(false);
  };
  return (
    <>
      <div className=" relative">
        <div
          className="px-5 py-3 flex justify-center items-center cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <span className="me-2 text-global-color-7 select-none">
            {selected}
          </span>
          <IoIosArrowDown fontSize={20} className="text-global-color-7 mt-1" />
        </div>
        <ul
          className={`bg-[#e5e4e4] rounded-md absolute top-full w-full  mt-2 py-3 text-global-color-7 cursor-pointer ${
            toggle ? "block" : "hidden"
          }`}
        >
          <li onClick={onSelect} className="px-5 hover:bg-white">
            Sort by latest
          </li>
          <li onClick={onSelect} className="px-5 hover:bg-white">
            Sort by oldest
          </li>
          <li onClick={onSelect} className="px-5 hover:bg-white">
            Sort by price: low to high
          </li>
          <li onClick={onSelect} className="px-5 hover:bg-white">
            Sort by price: high to low
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropFilter;
