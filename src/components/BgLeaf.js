import React from "react";
import bigLeaf from "../img/BigLeaf.png";

const BgLeaf = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-right-bottom opacity-25 "
      style={{
        backgroundImage: `url(${bigLeaf})`,
        backgroundSize: "28% auto",
      }}
    ></div>
  );
};

export default BgLeaf;
