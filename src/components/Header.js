import React from "react";
import ListNav from "./ListNav";
import { BsBasket2Fill } from "react-icons/bs";

const navData = {
  mainNav: [
    { text: "Everything", url: "/" },
    { text: "Groceries", url: "/" },
    { text: "Juice", url: "/" },
  ],
  infoNav: [
    { text: "About", url: "/" },
    { text: "Contact", url: "/" },
  ],
};

const Header = () => {
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
          <nav>
            <ListNav arrayText={navData.mainNav} />
          </nav>
        </div>

        <div className="flex items-center">
          {/* List */}
          <nav>
            <ListNav arrayText={navData.infoNav} />
          </nav>

          {/*Card*/}
          <div className="flex items-center hover:cursor-pointer">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
