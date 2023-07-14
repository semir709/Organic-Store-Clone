import React from "react";
import { BiPhone } from "react-icons/bi";

const CardContact = () => {
  return (
    <div className="py-[50px] border-[1px] border-gray-300 w-full flex flex-col justify-center items-center">
      <div className="mb-2 text-global-color-0">
        <BiPhone fontSize={30} />
      </div>
      <div>
        <p>
          +123 456 7890 <br /> +123 456 7890
        </p>
      </div>
    </div>
  );
};

export default CardContact;
