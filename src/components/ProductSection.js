import React, { useEffect } from "react";
import Head from "./Head";
import Card from "./Card";
import { urlFor } from "../utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSection = ({ title, products }) => {
  return (
    <div className="">
      <Head title={title} />

      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <ul className="grid md:grid-cols-4 min-[450px]:grid-cols-2  gap-4 sm:mx-2 mx-[30px]">
          {!products
            ? [1, 2, 3, 4].map(() => <Skeleton className="py-[100px]" />)
            : products.map(({ title, price, category, image, slug }) => (
                <li>
                  <Card
                    title={title}
                    price={price}
                    category={category}
                    img={urlFor(image)}
                    slug={slug}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSection;
