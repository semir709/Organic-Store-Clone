import React from "react";
import Skeleton from "react-loading-skeleton";
import { urlFor } from "../utils";

const AboutInfoSection = ({ data }) => {
  return (
    <section className="pt-[60px] pb-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center mx-5 lg:flex-row flex-col">
          <div className="flex-1 lg:py-[50px] lg:pe-[150px] mx-5 mb-[50px] w-full px-5">
            <h2 className="font-semibold sm:text-4xl text-2xl mb-5">
              {!data ? <Skeleton /> : data.title}
            </h2>
            <p className="sm:text-base text-sm ">
              {!data ? <Skeleton className="py-[100px] " /> : data.text}
            </p>
          </div>

          <div className="flex-1 w-full lg:p-0 px-5">
            {!data ? (
              <Skeleton className="py-[170px]" />
            ) : (
              <img
                src={urlFor(data.image).url()}
                alt={data.image.caption}
                className="object-cover w-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
