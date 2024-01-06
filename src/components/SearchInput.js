import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SearchInput = ({ setInput }) => {
  const targetRef = useRef(null);
  const getData = () => {
    const target = targetRef.current;
    setInput(target.value);
  };
  return (
    <data action="" className="mb-[30px] flex w-full">
      <input
        type="text"
        className=" me-2 border px-2 py-2 flex-1 w-full"
        placeholder="Search products..."
        ref={targetRef}
      />
      <button
        onClick={getData}
        className="py-3 px-1 bg-global-color-1 hover:bg-global-color-0 text-white rounded-sm"
      >
        <IoIosArrowForward />
      </button>
    </data>
  );
};

export default SearchInput;
