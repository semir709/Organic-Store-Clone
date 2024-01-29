import React, { useEffect, useState } from "react";
import ListNav from "./ListNav";
import { BsBasket2Fill } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { navData } from "../utils";
import { Link } from "react-router-dom";
import { useCart } from "../utils/context/CartContextCustom";

const Header = ({ setCartToggle, setMobileMenuToggle }) => {
  const { itemsCount, caculateFinalPrice } = useCart();

  let amount = itemsCount();
  let price = caculateFinalPrice();

  return (
    <div className="bg-transparent w-full h-[105px] px-[25px] py-[15px]">
      <div className="bg-transparent w-full h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="pe-[20px]">
            <span>
              <Link to={"/"} className="text-3xl">
                LOGO
              </Link>
            </span>
          </div>

          <nav className="hidden md:block">
            <ListNav arrayText={navData.mainNav} />
          </nav>
        </div>

        <div className="flex items-center">
          <nav className="hidden md:block">
            <ListNav arrayText={navData.infoNav} />
          </nav>

          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => setCartToggle((prev) => !prev)}
          >
            <span className="text-global-color-0 me-3">
              <span>€</span>
              {price}
            </span>

            <div className="relative">
              <div className="absolute top-[-10px] right-[-14px] text-[11px] font-bold bg-global-color-0 rounded-full px-[7px]">
                {amount}
              </div>
              <BsBasket2Fill />
            </div>
          </div>

          <div
            className="md:hidden block ms-[20px] hover:cursor-pointer"
            onClick={() => {
              setMobileMenuToggle((prev) => !prev);
            }}
          >
            <div className="p-3 bg-global-color-0">
              <GrMenu id="menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
