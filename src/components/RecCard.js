import React from "react";
import PersonInfo from "./PersonInfo";

const RecCard = ({ text, image, alt, name }) => {
  return (
    <div className="bg-white p-[45px] drop-shadow-[0px_0px_3px_rgba(0,0,0,0.15)]  text-center rounded-sm ">
      <p className="mb-5">{text}</p>

      <PersonInfo image={image} alt={alt} name={name} />
    </div>
  );
};

export default RecCard;
