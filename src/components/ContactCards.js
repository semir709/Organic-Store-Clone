import React, { useEffect } from "react";

const ContactCards = ({
  select = false,
  handleClick,
  data,
  selectedData,
  notInteractive = true,
}) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        select ? "border-global-color-0" : ""
      } bg-white py-2 px-3 text-global-color-2 rounded-lg border-2 sm:min-w-[350px]  shadow-md ${
        notInteractive &&
        "hover:cursor-pointer hover:translate-y-[-10px] transition"
      }`}
    >
      <div className="w-full flex justify-center mb-5">
        <span>
          {data.firstName} {data.lastName}
        </span>
      </div>
      <div className="my-2">
        <div className="mb-3">
          <span className="block mb-1">Email: {data.email}</span>
          <span className="block mb-1">Phone Number: {data.phone}</span>
        </div>
        <div className="mb-3">
          <span className="block mb-1">Country: {data.country}</span>
          <span className="block mb-1">Post Code: {data.postCode}</span>
          <span className="block mb-1">Town/City: {data.townCity}</span>
        </div>
        <div>
          <span className="block mb-1">Address: {data.apartment}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
