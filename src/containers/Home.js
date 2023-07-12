import React from "react";
import fruit from "../img/fruit.png";
import leafDraw from "../img/leafDraw.png";
import bigLeaf from "../img/BigLeaf.png";
import newFruit from "../img/newFruit.png";
import ButtonGreen from "../components/ButtonGreen";
import { HiShoppingCart } from "react-icons/hi";
import ServiceCard from "../components/ServiceCard";
import { serviceCardList } from "../utils";
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

const Home = () => {
  return (
    <div>
      <section className="bg-global-color-4 w-full py-[120px] relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-right-bottom opacity-25 "
          style={{
            backgroundImage: `url(${bigLeaf})`,
            backgroundSize: "28% auto",
          }}
        ></div>
        <div className="flex sm:flex-row max-w-[1200px] mx-auto items-center flex-col relative">
          <div className="sm:w-1/2 w-full sm:order-1 order-2 sm:mt-0 mt-5">
            <img src={newFruit} alt="" className="w-full object-cover" />
          </div>

          <div className="sm:w-1/2 w-full h-full sm:ps-[40px] px-5 sm:order-2 order-1 flex flex-col items-center sm:items-start">
            <div className="mb-[30px] w-fit">
              <img src={leafDraw} alt="" />
            </div>

            <h5 className="mb-[30px] text-global-color-2 font-bold text-lg w-fit">
              Best Quality Products
            </h5>

            <h1 className="mb-[30px] text-4xl  font-bold selection:bg-global-color-0 md:text-5xl w-fit sm:text-left text-center">
              Join The Organic Movement!
            </h1>

            <p className="mb-[30px] text-global-color-2 w-ft sm:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              vitae, deserunt atque corporis odio porro?
            </p>

            <div className="w-[200px]">
              <ButtonGreen
                text={"Shop now"}
                icon={<HiShoppingCart fontSize={20} />}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-global-color-2 w-full py-[30px]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {serviceCardList.map(({ text, title, icon }) => (
            <ServiceCard title={title} text={text} icon={icon} />
          ))}
        </div>
      </section>

      <section className="pt-[140px] pb-[100px]">
        <ProductSection title={"Best Selling Products"} />
      </section>

      <div className="max-w-[1200px] mx-auto flex justify-center">
        <div className="translate-y-[58%] lg:w-[15%] md:w-[20%] sm:w-[25%]  min-[450px]:w-[30%] w-[50%]">
          <img src={leafImg} alt="" className="object-cover w-full" />
        </div>
      </div>

      <section className="bg-global-color-4 py-[100px]">
        <div className="max-w-[1200px] mx-auto flex lg:items-center justify-between gap-6 px-2 min-[820px]:flex-row flex-col">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
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
        <ProductSection title={"Trending Products"} />
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
              <RecCard />
            </div>
            <div className="flex-1 ">
              <div className="drop-shadow-[0px_0px_3px_rgba(0,0,0,0.15)] w-full h-full">
                <div
                  className=" w-full h-full bg-no-repeat bg-cover hover:cursor-pointer group"
                  style={{ backgroundImage: `url('${pap}')` }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 group-hover:opacity-80  transition duration-300"></div>
                  <div className="relative w-full h-full p-[45px] text-white text-center flex flex-col justify-between items-center">
                    <div className="">
                      <h2 className="sm:text-4xl font-semibold mb-5 text-2xl">
                        Deal Of The Day 15% Off On All Vegetables!
                      </h2>
                      <p className="sm:text-base text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero!
                      </p>
                    </div>

                    <div className="">
                      <ButtonGreen
                        text={"Shop now"}
                        icon={<AiOutlineArrowRight />}
                        iconLeft={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-[950px]:mt-[70px]">
              <RecCard />
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
              {sponsorList.map(({ svg }) => (
                <figure className="">
                  <div className="w-full">
                    <img src={svg} alt="" className="w-full object-cover" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-[75px] bg-global-color-6 ">
        <div className="max-w-[1200px] mx-auto text-white px-2 pb-[50px]">
          <div className="grid sm:grid-cols-4 sm:justify-items-start justify-items-center text-center">
            <div className="w-[70%] sm:col-span-2 ">
              <aside className="">
                <section className="mb-[50px]">
                  <a href="/" className="text-4xl ">
                    LOGO
                  </a>
                </section>
                <section>
                  <p>
                    <strong>
                      <em className="opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id neque aspernatur maiores optio saepe. Aut ipsum
                        ipsam, vero accusantium sapiente saepe nobis voluptatem
                        quas fuga consequuntur a corporis nulla. Modi.
                      </em>
                    </strong>
                  </p>
                </section>
              </aside>
            </div>
            <div>
              <aside className="mt-5 sm:mt-0">
                <section className="mb-[40px]">
                  <h4 className="text-2xl font-semibold">Quick Links</h4>
                </section>
                <section className="mb-[40px]">
                  <ul>
                    {quickLinks.map(({ text, url }) => (
                      <li className="mb-1">
                        <a
                          href={url}
                          className=" opacity-70 hover:opacity-100 transition duration-300"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold mb-[40px]">
                    Site Links
                  </h2>
                  <nav className=" ">
                    <ul>
                      {siteLinksfooter.map(({ text, url }) => (
                        <li className="mb-1">
                          <a
                            href={url}
                            className=" opacity-70 hover:opacity-100 transition duration-300"
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </section>
              </aside>
            </div>
            <div>
              <aside className="mt-5 sm:mt-0">
                <section className="mb-[40px]">
                  <h2 className="text-2xl font-semibold mb-[40px]">
                    Download Our Mobile App
                  </h2>
                  <div>
                    <p className="opacity-70">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dignissimos fugiat cumque eius in fugit harum voluptatem,
                      esse iste quis consectetur laudantium porro temporibus
                      aspernatur omnis est dolorem culpa, illum ipsa.
                    </p>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold mb-[40px]">
                    Quick Links
                  </h2>
                  <nav className=" ">
                    <ul>
                      {quickLinks2.map(({ text, url }) => (
                        <li className="mb-1">
                          <a
                            href={url}
                            className=" opacity-100 hover:opacity-70 transition duration-300 text-global-color-0"
                          >
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </section>

                <div className="mt-5">
                  <section className="flex items-center justify-between gap-6 sm:mx-0 mx-[60px]">
                    <figure className=" sm:w-[70%] ">
                      <div>
                        <img
                          src={googlePlay}
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                    </figure>
                    <figure className="sm:w-[70%] ">
                      <div>
                        <img
                          src={appStore}
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                    </figure>
                  </section>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="py-[25px] border-t-[1px] border-gray-700 ">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-center px-2 sm:flex-row flex-col">
              <div className="sm:mb-0 mb-5">
                <p className="opacity-70 text-white">
                  Copyright © 2023 | Organic Store
                </p>
              </div>
              <div className="flex items-center">
                <a href="/" className="mx-2">
                  <BsFacebook color="white" opacity={"0.7"} fontSize={20} />
                </a>
                <a href="/" className="mx-2">
                  <AiFillTwitterCircle
                    color="white"
                    opacity={"0.7"}
                    fontSize={25}
                  />
                </a>
                <a href="/" className="mx-2">
                  <AiOutlineInstagram
                    color="white"
                    opacity={"0.7"}
                    fontSize={25}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
