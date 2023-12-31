import React, { useEffect, useState } from "react";
import fruit from "../img/fruit.png";
import leafDraw from "../img/leafDraw.png";
import bigLeaf from "../img/BigLeaf.png";
import newFruit from "../img/newFruit.png";
import ButtonGreen from "../components/ButtonGreen";
import { HiShoppingCart } from "react-icons/hi";
import ServiceCard from "../components/ServiceCard";
import { getHomePage, serviceCardList, urlFor } from "../utils";
import ProductSection from "../components/ProductSection";
import leafImg from "../img/imageLeaf.png";
import CategoryCard from "../components/CategoryCard";
import { BsFacebook, BsFillTriangleFill } from "react-icons/bs";
import Head from "../components/Head";
import RecCard from "../components/RecCard";
import pap from "../img/pap.jpg";
import {
  AiFillTwitterCircle,
  AiOutlineArrowRight,
  AiOutlineInstagram,
} from "react-icons/ai";
import bigLeaf2 from "../img/leaf2.png";
import { sponsorList } from "../utils";
import { siteLinksfooter } from "../utils";
import { quickLinks } from "../utils";
import { quickLinks2 } from "../utils";
import googlePlay from "../img/googlePlay.png";
import appStore from "../img/app-store.png";
import LeafCenter from "../components/LeafCenter";
import BgLeaf from "../components/BgLeaf";
import { dataProducts } from "../utils";
import sanityClient from "../client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    setHomeData(null);
    sanityClient.fetch(getHomePage).then((data) => setHomeData(data[0]));
  }, []);

  return (
    <main>
      <div>
        <section className="bg-global-color-4 w-full py-[120px] relative">
          <BgLeaf />
          <div className="flex sm:flex-row max-w-[1200px] mx-auto items-center flex-col relative">
            <div className="sm:w-1/2 w-full sm:order-1 order-2 sm:mt-0 mt-5 px-5">
              {!homeData ? (
                <Skeleton className=" py-[200px] " />
              ) : (
                <img
                  src={urlFor(homeData.mainSection.image).url()}
                  alt={homeData.mainSection.image.caption}
                  className="w-full object-cover"
                />
              )}
            </div>

            <div className="sm:w-1/2 w-full h-full sm:ps-[40px] px-5 sm:order-2 order-1 flex flex-col items-center sm:items-start">
              <div className="mb-[30px] w-fit">
                <img src={leafDraw} alt="" />
              </div>

              <h5 className="mb-[30px] text-global-color-2 font-bold text-lg w-fit">
                Best Quality Products
              </h5>

              <h1 className="mb-[30px] text-4xl  font-bold selection:bg-global-color-0 md:text-5xl sm:text-left text-center w-full">
                {homeData?.mainSection.title || <Skeleton />}
              </h1>

              <p className="mb-[30px] text-global-color-2 w-full sm:text-left text-center">
                {homeData?.mainSection.text || <Skeleton className="py-5" />}
              </p>

              <div className="w-[200px]">
                {!homeData ? (
                  <Skeleton className="py-4" />
                ) : (
                  <ButtonGreen
                    text={"Shop now"}
                    icon={<HiShoppingCart fontSize={20} />}
                    iconPosition={"left"}
                    url={"/shop"}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-global-color-2 w-full py-[30px]">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {serviceCardList.map(({ text, title, icon }, index) => (
              <ServiceCard key={index} title={title} text={text} icon={icon} />
            ))}
          </div>
        </section>
        <section className="pt-[140px] pb-[100px]">
          <ProductSection
            title={"Best Selling Products"}
            products={homeData?.bestSellingProducts.products}
          />
        </section>
        <LeafCenter />
        <section className="bg-global-color-4 py-[100px]">
          <div className="max-w-[1200px] mx-auto flex lg:items-center justify-between gap-6 px-2 min-[820px]:flex-row flex-col">
            {!homeData
              ? [1, 2, 3, 4].map((el, index) => (
                  <Skeleton
                    key={index}
                    containerClassName="flex-1"
                    className="py-[100px] "
                  />
                ))
              : homeData.categorySection.category.map(
                  ({ title, text, image }, index) => (
                    <CategoryCard
                      key={index}
                      title={title}
                      text={text}
                      image={urlFor(image).url()}
                    />
                  )
                )}
          </div>
        </section>
        <section className="py-[60px] bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-around sm:flex-row flex-col">
              <h2 className="text-global-color-5 lg:text-4xl text-2xl  font-semibold mb-5 sm:mb-0 text-center ">
                Get 25% Off On Your First Purchase!
              </h2>

              <div className="m-0">
                <ButtonGreen
                  text={"Shop now"}
                  icon={<HiShoppingCart fontSize={20} />}
                  iconPosition={"left"}
                  url={"/shop"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-global-color-4 ">
          <div className="w-full flex justify-center">
            <div className="rotate-180 translate-y-[-4px]">
              <BsFillTriangleFill fontSize={20} />
            </div>
          </div>
          <div className="w-full text-center py-5 pb-[40px]">
            <h3 className="text-2xl font-semibold">
              Try It For Free. No Registration Needed.
            </h3>
          </div>
        </section>
        <section className="pt-[120px] pb-[61px]">
          <ProductSection
            title={"Trending Products"}
            products={homeData?.trendingProducts.products}
          />
        </section>
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
                {!homeData ? (
                  <Skeleton className="h-full py-[100px]" />
                ) : (
                  <RecCard
                    text={homeData?.custumerReviews?.reviewsList[0].text}
                    name={homeData?.custumerReviews?.reviewsList[0].name}
                    image={urlFor(
                      homeData?.custumerReviews?.reviewsList[0].image
                    )}
                    alt={
                      homeData?.custumerReviews?.reviewsList[0].image.caption
                    }
                  />
                )}
              </div>
              <div className="flex-1 ">
                <div className="drop-shadow-[0px_0px_3px_rgba(0,0,0,0.15)] w-full h-full">
                  {!homeData ? (
                    <Skeleton className="py-[200px]" />
                  ) : (
                    <div
                      className=" w-full h-full bg-no-repeat bg-cover hover:cursor-pointer group"
                      style={{
                        backgroundImage: `url('${
                          homeData
                            ? urlFor(
                                homeData?.custumerReviews.imageReviewsSection
                                  .imageReviews
                              )
                            : "none"
                        }')`,
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 group-hover:opacity-80  transition duration-300"></div>
                      <div className="relative w-full h-full p-[45px] text-white text-center flex flex-col justify-between items-center">
                        <div className="">
                          <h2 className="sm:text-4xl font-semibold mb-5 text-2xl">
                            {
                              homeData?.custumerReviews.imageReviewsSection
                                .titleReviews
                            }
                          </h2>
                          <p className="sm:text-base text-sm ">
                            {
                              homeData?.custumerReviews.imageReviewsSection
                                .textReviews
                            }
                          </p>
                        </div>

                        <div className="">
                          <ButtonGreen
                            text={"Shop now"}
                            icon={<AiOutlineArrowRight />}
                            iconPosition={"right"}
                            url={"/shop"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 min-[950px]:mt-[70px]">
                {!homeData ? (
                  <Skeleton className="h-full py-[100px]" />
                ) : (
                  <RecCard
                    text={homeData?.custumerReviews?.reviewsList[1].text}
                    name={homeData?.custumerReviews?.reviewsList[1].name}
                    image={urlFor(
                      homeData?.custumerReviews?.reviewsList[1].image
                    )}
                    alt={
                      homeData?.custumerReviews?.reviewsList[1].image.caption
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </section>
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
      </div>
    </main>
  );
};

export default Home;
