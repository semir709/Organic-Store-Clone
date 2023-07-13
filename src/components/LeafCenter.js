import React from "react";
import leafImg from "../img/imageLeaf.png";

const LeafCenter = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-center">
      <div className="translate-y-[58%] lg:w-[15%] md:w-[20%] sm:w-[25%]  min-[450px]:w-[30%] w-[50%]">
        <img src={leafImg} alt="" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default LeafCenter;
