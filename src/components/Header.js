import React from "react";
import ListNav from "./ListNav";

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

        <div className="flex px-[10px]">
          {/* List */}
          <nav>
            <ListNav arrayText={navData.infoNav} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
