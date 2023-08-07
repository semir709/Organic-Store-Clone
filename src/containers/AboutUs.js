import React, { useEffect, useState } from "react";
import SectionMessage from "../components/SectionMessage";
import LeafCenter from "../components/LeafCenter";
import fruit from "../img/fruit.jpg";
import NumberStat from "../components/NumberStat";
import PersonInfo from "../components/PersonInfo";
import drawLeaf from "../img/leafDraw.png";
import { BiCheckCircle } from "react-icons/bi";
import CheckList from "../components/CheckList";
import { checkListData, getAbout, urlFor } from "../utils";
import { checkListData2 } from "../utils";
import ButtonGreen from "../components/ButtonGreen";
import { HiShoppingCart } from "react-icons/hi";
import bigLeaf from "../img/BigLeaf.png";
import BgLeaf from "../components/BgLeaf";
import sanityClient from "../client";

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    sanityClient.fetch(getAbout).then((data) => setData(data[0]));
  }, []);

  if (!data) return <p>Loading...</p>;

  console.log(data);
  return (
    <div>
      <SectionMessage title={"About Us"} />
      <section className="bg-global-color-4">
        <LeafCenter />
      </section>

      <section className="pt-[60px] pb-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center mx-5 lg:flex-row flex-col">
            <div className="flex-1 lg:py-[50px] lg:pe-[150px] mx-5 mb-[50px]">
              <h2 className="font-semibold sm:text-4xl text-2xl mb-5">
                {data.sectionInfo.title}
              </h2>
              <p className="sm:text-base text-sm">{data.sectionInfo.text}</p>
            </div>

            <div className="flex-1 w-full lg:p-0 px-5">
              <img
                src={urlFor(data.sectionInfo.image).url()}
                alt={data.sectionInfo.image.caption}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] bg-global-color-6 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center min-[700px]:justify-between px-5 flex-wrap-reverse min-[700px]:flex-nowrap w-full sm:flex-row flex-col">
            <div className="w-fit min-[700px]:order-none order-1  mb-5 min-[700px]:mb-0">
              <h4 className="text-2xl font-semibold text-center">
                Numbers Speak For <br /> Themselves!
              </h4>
            </div>
            <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-2 my-5">
              <NumberStat
                number={data.sectionNumber.productsCategory}
                title={"Products Category"}
                reduce={100}
              />
            </div>
            <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-3 my-5">
              <NumberStat
                number={data.sectionNumber.createdProducts}
                title={"Created Products"}
                reduce={100}
              />
            </div>
            <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-4 my-5">
              <NumberStat
                number={data.sectionNumber.happyCustomers}
                title={"Happy Customers"}
                reduce={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative">
        <BgLeaf />
        <div className="max-w-[1200px] mx-auto relative">
          <div className="flex md:flex-row flex-col mx-5 items-center">
            <div className="sm:p-[70px] flex-1 ">
              <div className="bg-global-color-4 px-[70px] rounded-md">
                <div className="w-full rounded-md translate-y-[-50px]">
                  <img
                    className="object-cover w-full rounded-md"
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center flex-col text-center">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam exercitationem quasi blanditiis amet tempora quibusdam
                    odit ducimus minus nulla perferendis.
                  </p>
                  <div className="my-[40px]">
                    <PersonInfo />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 md:px-0  sm:px-[70px]">
              <div className="py-[70px]">
                <div className="flex items-center mb-[40px] md:flex-row flex-col">
                  <div className="lg:w-[35%] md:w-[75%] w-[35%]">
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
                      Click edit button to change this text. Lorem ipsum dolor
                      sit amet
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
