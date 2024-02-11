import React from "react";
import BgLeaf from "../components/BgLeaf";
import Skeleton from "react-loading-skeleton";
import { ButtonGreen, CheckList, SwiperCom } from "../components";
import { HiShoppingCart } from "react-icons/hi";
import { checkListData, checkListData2, urlFor } from "../utils";
import PersonInfo from "../components/PersonInfo";
import drawLeaf from "../img/leafDraw.png";

const CertifedSection = ({ data }) => {
  return (
    <section className="py-[100px] relative">
      <BgLeaf />
      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex md:flex-row flex-col  mx-5 items-center  gap-x-20 ">
          <div className=" md:w-[50%] w-[90%]">
            <div className="bg-global-color-4  rounded-md flex flex-col items-center px-[70px] ">
              <div className="bg-white w-full translate-y-[-50px] ">
                {!data ? (
                  <Skeleton className="py-[170px]" />
                ) : (
                  <SwiperCom array={data.slideImages} />
                )}
              </div>

              <div className="flex items-center flex-col text-center mt-[-30px]">
                <p>
                  {!data ? (
                    <Skeleton className="py-[30px] px-[100px] " />
                  ) : (
                    data.rewiew.text
                  )}
                </p>
                <div className="my-[40px]">
                  {!data ? (
                    <Skeleton />
                  ) : (
                    <PersonInfo
                      image={urlFor(data.rewiew.image).url()}
                      alt={data.rewiew.image.caption}
                      name={data.rewiew.name}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  md:px-0  sm:px-[70px] md:w-[50%] w-[90%]">
            <div className="py-[70px]">
              <div className="flex items-center mb-[40px] md:flex-row flex-col">
                <div className=" lg:w-[35%] md:w-[60%]">
                  <figure className="w-full">
                    <img
                      className="w-full object-cover"
                      src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="ms-5 md:text-left text-center md:mt-0 mt-5">
                  <h3 className="text-2xl font-semibold mb-3">
                    Certified Products
                  </h3>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet
                  </p>
                </div>
              </div>

              <div className="mb-[30px] md:text-left text-center">
                <h2 className="text-3xl font-semibold">
                  We Deal With Various Quality Organic Products!
                </h2>
              </div>

              <div className="mb-[30px] w-fit mx-auto md:mx-0">
                <img src={drawLeaf} alt="" className="object-cover " />
              </div>

              <section className="flex items-center justify-between md:w-6/7 mb-[40px] min-[450px]:flex-row flex-col">
                <div className="mb-5 min-[450px]:mb-0 md:me-5">
                  <CheckList list={checkListData} />
                </div>
                <div className="">
                  <CheckList list={checkListData2} />
                </div>
              </section>

              <div className="w-fit mx-auto md:mx-0">
                <ButtonGreen
                  text={"Start shopping"}
                  icon={<HiShoppingCart fontSize={20} />}
                  url="/shop/products"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifedSection;
