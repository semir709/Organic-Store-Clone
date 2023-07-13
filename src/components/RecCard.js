import React from "react";
import person from "../img/person.jpg";
import PersonInfo from "./PersonInfo";

const RecCard = () => {
  return (
    <div className="bg-white p-[45px] drop-shadow-[0px_0px_3px_rgba(0,0,0,0.15)]  text-center rounded-sm ">
      <div className="w-fit mx-auto mb-5">star</div>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero beatae
        omnis corporis repudiandae laboriosam, praesentium sint officia,
        delectus eligendi quasi corrupti sunt, illo adipisci veritatis quae.
        Rerum culpa suscipit mollitia?
      </p>

      <PersonInfo />
    </div>
  );
};

export default RecCard;
