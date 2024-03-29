import React, { useEffect } from "react";
import Head from "./Head";
import Card from "./Card";
import { urlFor } from "../utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSection = ({ title, products }) => {
  return (
    <section className="pt-[140px] pb-[100px]">
      <Head title={title} />

      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <ul className="grid md:grid-cols-4 min-[450px]:grid-cols-2  gap-4 sm:mx-2 mx-[30px]">
          {!products
            ? [1, 2, 3, 4].map((index) => (
                <Skeleton key={index} className="py-[100px]" />
              ))
            : products.map((data, index) => (
                <li key={index}>
                  <Card data={data} />
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSection;
