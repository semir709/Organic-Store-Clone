import React from "react";
import { sponsorList } from "../utils";

const FeaturedBrandsSection = () => {
  return (
    <section className="bg-global-color-4 pb-[40px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between w-full px-2 min-[950px]:flex-row flex-col">
          <div className="flex-2 min-[950px]:me-5 m-0">
            <h4 className="text-2xl font-semibold">Featured Brands:</h4>
          </div>

          <div className="flex-1 grid min-[950px]:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-20 min-[950px]:pt-0 pt-[40px]">
            {sponsorList.map(({ svg }, index) => (
              <figure className="" key={index}>
                <div className="w-full">
                  <img src={svg} alt="" className="w-full object-cover" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrandsSection;
