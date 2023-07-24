import React from "react";
import Head from "./Head";
import Card from "./Card";

const ProductSection = ({ title, products }) => {
  return (
    <div className="">
      <Head title={title} />

      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <ul className="grid md:grid-cols-4 min-[450px]:grid-cols-2  gap-4 sm:mx-2 mx-[30px]">
          {products.map(({ title, price, category, img, slug }) => (
            <li>
              <Card
                title={title}
                price={price}
                category={category}
                img={img}
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
