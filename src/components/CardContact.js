import React from "react";

const CardContact = ({ icon, arrayText }) => {
  return (
    <div className="py-[50px] border-[1px] border-gray-300 w-full flex flex-col justify-center items-center text-center">
      <div className="mb-2 text-global-color-0">{icon}</div>
      <div>
        {arrayText.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default CardContact;
