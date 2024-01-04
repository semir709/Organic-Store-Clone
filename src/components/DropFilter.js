import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropFilter = ({ setValue }) => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("Sort by latest");

  const onSelect = (e) => {
    const target = e.target;
    const value = target.dataset.value;
    const text = target.textContent;
    setSelected(text);
    setToggle(false);

    setValue(value);
  };
  return (
    <>
      <div className="relative z-50">
        <div
          className="sm:px-5 pe-5 ps-2 py-3 flex sm:justify-center items-center cursor-pointer w-[250px]"
          onClick={() => setToggle(!toggle)}
        >
          <span className="me-2 text-global-color-7 select-none ">
            {selected}
          </span>
          {toggle === false ? (
            <IoIosArrowDown
              fontSize={20}
              className="text-global-color-7 mt-1"
            />
          ) : (
            <IoIosArrowUp fontSize={20} className="text-global-color-7 mt-1" />
          )}
        </div>
        <ul
          className={`bg-[#efeeee]  rounded-md absolute top-full w-full  mt-2 py-3 text-global-color-7 cursor-pointer ${
            toggle ? "block" : "hidden"
          }`}
        >
          <li
            onClick={onSelect}
            data-value={"latest"}
            className="sm:px-5 pe-5 ps-2 hover:bg-white"
          >
            Sort by latest
          </li>
          <li
            onClick={onSelect}
            data-value={"oldest"}
            className="sm:px-5 pe-5 ps-2 hover:bg-white"
          >
            Sort by oldest
          </li>
          <li
            onClick={onSelect}
            data-value={"lowToHigh"}
            className="sm:px-5 pe-5 ps-2 hover:bg-white"
          >
            Sort by price: low to high
          </li>
          <li
            onClick={onSelect}
            data-value={"highToLow"}
            className="sm:px-5 pe-5 ps-2 hover:bg-white"
          >
            Sort by price: high to low
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropFilter;
