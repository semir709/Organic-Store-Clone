import React from "react";
import { ContactCards } from "../components/index";
import { FaPlus } from "react-icons/fa6";

const SelectContactInfoPage = () => {
  return (
    <div className="p-[100px] bg-global-color-4">
      <div className="w-full flex justify-center mb-[70px]">
        <h1 className="text-3xl">Select Contact Info</h1>
      </div>
      <div className="mx-[50px] flex flex-wrap gap-7 justify-center mb-[70px]">
        <ContactCards />
        <ContactCards />
        <ContactCards />
      </div>

      <div className="w-full flex flex-col items-center">
        <button className="border py-5 px-5 rounded-lg w-1/2 text-center bg-global-color-1 text-white uppercase text-lg font-medium hover:bg-global-color-0 hover:cursor-pointer mb-5">
          <span>Finish shopping</span>
        </button>
        <button className="flex items-center">
          <span className="uppercase font-medium  hover:text-global-color-0">
            Add contact
          </span>
        </button>
      </div>

      <div className="w-full flex justify-end">
        <button className="text-gray-500 hover:text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default SelectContactInfoPage;
