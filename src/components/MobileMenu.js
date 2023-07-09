import React from "react";
import BlackFilter from "./BlackFilter";

const MobileMenu = ({ mobileMenuToggle }) => {
  return (
    <div>
      <BlackFilter toggle={mobileMenuToggle} />
      <div
        className={`fixed w-1/3 h-full bg-white top-0 right-0  duration-300 border flex flex-col 
       ${mobileMenuToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        asd
      </div>
    </div>
  );
};

export default MobileMenu;
