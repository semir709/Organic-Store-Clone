import React from "react";
import fruit from "../img/fruit.png";
import leafDraw from "../img/leafDraw.png";
import bigLeaf from "../img/BigLeaf.png";
import newFruit from "../img/newFruit.png";
import ButtonGreen from "../components/ButtonGreen";
import { HiShoppingCart } from "react-icons/hi";

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
        <div className="flex sm:flex-row xl:w-[1200px] w-full mx-auto items-center flex-col relative">
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
    </div>
  );
};

export default Home;
