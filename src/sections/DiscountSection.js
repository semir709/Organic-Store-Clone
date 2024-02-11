import React from "react";
import { ButtonGreen } from "../components";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillTriangleFill } from "react-icons/bs";

const DiscountSection = () => {
  return (
    <>
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
                url={"/shop/products"}
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
    </>
  );
};

export default DiscountSection;
