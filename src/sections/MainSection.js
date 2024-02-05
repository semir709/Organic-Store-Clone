import React, { useState } from "react";
import BgLeaf from "../components/BgLeaf";
import Skeleton from "react-loading-skeleton";
import { HiShoppingCart } from "react-icons/hi";
import ButtonGreen from "../components/ButtonGreen";
import { urlFor } from "../utils";
import leafDraw from "../img/leafDraw.png";

const MainSection = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="bg-global-color-4 w-full py-[120px] relative">
      <BgLeaf />
      <div className="flex sm:flex-row max-w-[1200px] mx-auto items-center flex-col relative">
        <div className="sm:w-1/2 w-full sm:order-1 order-2 sm:mt-0 mt-5 px-5">
          <div>
            {imageLoaded ? null : (
              <Skeleton
                className={`py-[200px] ${imageLoaded ? "hidden" : "block"} `}
              />
            )}
            <img
              style={imageLoaded ? {} : { display: "none" }}
              src={data ? urlFor(data.mainSection.image).url() : {}}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        <div className="sm:w-1/2 w-full h-full sm:ps-[40px] px-5 sm:order-2 order-1 flex flex-col items-center sm:items-start">
          <div className="mb-[30px] w-fit">
            <img src={leafDraw} alt="" />
          </div>

          <h5 className="mb-[30px] text-global-color-2 font-bold text-lg w-fit">
            Best Quality Products
          </h5>

          <h1 className="mb-[30px] text-4xl  font-bold selection:bg-global-color-0 md:text-5xl sm:text-left text-center w-full">
            {data?.mainSection.title || <Skeleton />}
          </h1>

          <p className="mb-[30px] text-global-color-2 w-full sm:text-left text-center">
            {data?.mainSection.text || <Skeleton className="py-5" />}
          </p>

          <div className="w-[200px]">
            {!data ? (
              <Skeleton className="py-4" />
            ) : (
              <ButtonGreen
                text={"Shop now"}
                icon={<HiShoppingCart fontSize={20} />}
                iconPosition={"left"}
                url={"/shop/products"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
