import React from "react";
import BlackFilter from "./BlackFilter";
import { GrFormClose } from "react-icons/gr";
import ListNav from "./ListNav";
import { navData } from "../utils";

const MobileMenu = ({ mobileMenuToggle, setMobileMenuToggle }) => {
  return (
    <div>
      <BlackFilter toggle={mobileMenuToggle} />
      <div
        className={`fixed w-4/5 h-full bg-white top-0 right-0  duration-300 border flex flex-col 
       ${mobileMenuToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        <div className="w-full flex flex-row-reverse p-4">
          <button onClick={() => setMobileMenuToggle(false)}>
            <GrFormClose fontSize={30} />
          </button>
        </div>

        <div className="my-4 w-full">
          <nav>
            <ListNav arrayText={navData.allNav} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
