import React from "react";

const CardContact = ({ icon, text1, text2 }) => {
  return (
    <div className="py-[50px] border-[1px] border-gray-300 w-full flex flex-col justify-center items-center text-center">
      <div className="mb-2 text-global-color-0">{icon}</div>
      <div>
        <p>
          {text1} <br /> {text2}
        </p>
      </div>
    </div>
  );
};

export default CardContact;
