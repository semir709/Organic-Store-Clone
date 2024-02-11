import React from "react";
import Skeleton from "react-loading-skeleton";
import { CategoryCard } from "../components";
import { urlFor } from "../utils";

const CategorySection = ({ data }) => {
  return (
    <section className="bg-global-color-4 py-[100px]">
      <div className="max-w-[1200px] mx-auto flex lg:items-center justify-between gap-6 px-2 min-[820px]:flex-row flex-col">
        {!data
          ? [1, 2, 3, 4].map((el, index) => (
              <Skeleton
                key={index}
                containerClassName="flex-1"
                className="py-[100px] "
              />
            ))
          : data.category.map(({ title, text, image }, index) => (
              <CategoryCard
                key={index}
                title={title}
                text={text}
                image={image}
              />
            ))}
      </div>
    </section>
  );
};

export default CategorySection;
