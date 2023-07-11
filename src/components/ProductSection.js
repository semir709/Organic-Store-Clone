import React from "react";
import Head from "./Head";
import Card from "./Card";

const ProductSection = () => {
  return (
    <div className="">
      <Head />

      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <ul className="grid md:grid-cols-4 min-[450px]:grid-cols-2  gap-4 sm:mx-2 mx-[30px]">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSection;
