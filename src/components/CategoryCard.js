import React from "react";
import ButtonGreen from "./ButtonGreen";
import { AiOutlineArrowRight } from "react-icons/ai";
import apple from "../img/apple.png";

const CategoryCard = ({ url, title, text }) => {
  return (
    <div className="p-[40px] pb-0 bg-white rounded-lg drop-shadow-md min-[450px]:text-start text-center ">
      <h3 className="text-3xl font-semibold mb-5">{title}</h3>
      <p className="text-global-color-2 mb-5">{text}</p>

      <div className="flex flex-col min-[450px]:justify-start justify-center ">
        <div className="w-fit min-[450px]:mx-0 mx-auto">
          <ButtonGreen
            text={"Shop now"}
            icon={<AiOutlineArrowRight fontSize={20} />}
            iconPosition={"right"}
            url={url}
          />
        </div>

        <div className="flex min-[450px]:justify-end justify-center flex-2 ">
          <div className="lg:w-2/3 w-[110px]">
            <img src={apple} alt="" className="object-cover w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
