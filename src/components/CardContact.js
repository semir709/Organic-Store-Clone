import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardContact = (props) => {
  return !props.arrayText ? (
    <Skeleton containerClassName="flex-1" className="py-[100px]" />
  ) : (
    <div className="py-[50px] border-[1px] border-gray-300 w-full flex flex-col justify-center items-center text-center">
      <div className="mb-2 text-global-color-0">{props.icon}</div>
      <div>
        {props.arrayText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default CardContact;
