import React from "react";
import ListNav from "./ListNav";
import { BsBasket2Fill } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";

import { navData } from "../utils";

const Header = ({ setCartToggle, setMobileMenuToggle }) => {
  return (
    <div className="bg-white w-full h-[105px] px-[25px] py-[15px]">
      <div className="bg-transparent w-full h-full flex justify-between items-center">
        <div className="flex items-center">
          {/*Logo*/}
          <div className="px-[20px]">
            <span>
              <a href="/" className="text-3xl">
                LOGO
              </a>
            </span>
          </div>
          {/* List */}
          <nav className="hidden md:block">
            <ListNav arrayText={navData.mainNav} />
          </nav>
        </div>

        <div className="flex items-center">
          {/* List */}
          <nav className="hidden md:block">
            <ListNav arrayText={navData.infoNav} />
          </nav>

          {/*Card*/}
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => setCartToggle((prev) => !prev)}
          >
            <span className="text-global-color-0 me-3">
              <span>€</span>
              0.00
            </span>

            <div className="relative">
              <div className="after:content-['0'] after:absolute after:top-[-10px] after:right-[-14px] after:text-[11px] after:font-bold after:bg-global-color-0 after:rounded-full after:px-[7px] ">
                <BsBasket2Fill />
              </div>
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
