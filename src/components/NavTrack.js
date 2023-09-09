import React from "react";
import { useLocation } from "react-router-dom";

const NavTrack = () => {
  const location = useLocation();

  const string = location.pathname.slice(1).split("/");

  let newString = string.map((el) => el.charAt(0).toUpperCase() + el.slice(1));

  let text = "";

  newString.forEach((el, index) => {
    if (index === 0) text += el;
    else text += " / " + el;
  });

  return (
    <nav className="opacity-70 ">
      <span className="text-lg">{text}</span>
    </nav>
  );
};

export default NavTrack;
