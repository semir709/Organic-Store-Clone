import React from "react";
import Head from "../components/Head";
import Skeleton from "react-loading-skeleton";
import { ButtonGreen, RecCard } from "../components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { urlFor } from "../utils";
import bigLeaf2 from "../img/leaf2.png";

const ReviewsSection = ({ data }) => {
  return (
    <section className="py-[80px] relative bg-gradient-to-b from-global-color-5 to-global-color-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left-top opacity-25 "
        style={{
          backgroundImage: `url(${bigLeaf2})`,
          backgroundSize: "38% auto",
        }}
      ></div>

      <Head title={"Customers Reviews"} />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex justify-center mt-[40px] gap-6 min-[950px]:mx-2 flex-col min-[950px]:flex-row mx-[40px]">
          <div className="flex-1 mt-[70px]">
            {!data ? (
              <Skeleton className="h-full py-[100px]" />
            ) : (
              <RecCard
                text={data?.reviewsList[0].text}
                name={data?.reviewsList[0].name}
                image={urlFor(data?.reviewsList[0].image)}
                alt={data?.reviewsList[0].image.caption}
              />
            )}
          </div>
          <div className="flex-1 ">
            <div className="drop-shadow-[0px_0px_3px_rgba(0,0,0,0.15)] w-full h-full">
              {!data ? (
                <Skeleton className="py-[200px]" />
              ) : (
                <div
                  className=" w-full h-full bg-no-repeat bg-cover hover:cursor-pointer group"
                  style={{
                    backgroundImage: `url('${
                      data
                        ? urlFor(data.imageReviewsSection.imageReviews)
                        : "none"
                    }')`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 group-hover:opacity-80  transition duration-300"></div>
                  <div className="relative w-full h-full p-[45px] text-white text-center flex flex-col justify-between items-center">
                    <div className="">
                      <h2 className="sm:text-4xl font-semibold mb-5 text-2xl">
                        {data.imageReviewsSection.titleReviews}
                      </h2>
                      <p className="sm:text-base text-sm ">
                        {data.imageReviewsSection.textReviews}
                      </p>
                    </div>

                    <div className="">
                      <ButtonGreen
                        text={"Shop now"}
                        icon={<AiOutlineArrowRight />}
                        iconPosition={"right"}
                        url={"/shop/products"}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 min-[950px]:mt-[70px]">
            {!data ? (
              <Skeleton className="h-full py-[100px]" />
            ) : (
              <RecCard
                text={data?.reviewsList[1].text}
                name={data?.reviewsList[1].name}
                image={urlFor(data?.reviewsList[1].image)}
                alt={data?.reviewsList[1].image.caption}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
