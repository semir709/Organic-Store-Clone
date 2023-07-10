import React from "react";

const ServiceCard = ({ title, text, icon }) => {
  return (
    <div className="w-full hover:cursor-pointer">
      <div className="bg-global-color-3  text-white px-[25px] py-[35px] flex rounded-md m-[10px] ">
        <div className="me-2 text-global-color-0">{icon}</div>
        <div>
          <h4 className="font-semibold text-2xl mb-2">{title}</h4>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
