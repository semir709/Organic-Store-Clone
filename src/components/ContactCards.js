import React from "react";

const ContactCards = ({ select, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        select ? "border-global-color-0" : ""
      } bg-white py-2 px-3 text-global-color-2 rounded-lg border-2 min-w-[350px] shadow-md hover:cursor-pointer hover:translate-y-[-10px] transition`}
    >
      <div className="w-full flex justify-center mb-5">
        <span>Semir Selman</span>
      </div>
      <div className="my-2">
        <div className="mb-3">
          <span className="block mb-1">Email: selman@hotmail.com</span>
          <span className="block mb-1">Phone Number: 000-123-456</span>
        </div>
        <div className="mb-3">
          <span className="block mb-1">Country: Bosnia and Herzegovina</span>
          <span className="block mb-1">Post Code: 0000001</span>
          <span className="block mb-1">Town/City: Travnik</span>
        </div>
        <div>
          <span className="block mb-1">Address: hula hopla bb</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
