import React from "react";
import { IoMdAdd } from "react-icons/io";
import person from "../img/person.jpg";
const PersonInfo = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" w-[55px] h-[55px] rounded-full">
        <img
          src={person}
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="ms-5">
        <span>Mila Kunus</span>
      </div>
    </div>
  );
};

export default PersonInfo;
