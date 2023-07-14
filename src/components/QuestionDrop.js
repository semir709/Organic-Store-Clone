import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

const QuestionDrop = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="border-b-2   hover:cursor-pointer mb-[50px] "
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className="flex items-center justify-between mb-2 mx-[40px]">
        <div className="mb-2">
          <p className="text-lg font-bold">
            Pulvinar nostrud class cum facilis?
          </p>
        </div>
        <div className="ms-[40px]">
          {toggle ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
        </div>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-1000  ${
          toggle ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className=" overflow-hidden ">
          <p className="py-5  px-[40px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ratione expedita amet ullam voluptates sapiente eius provident
            fugiat voluptas, reiciendis qui quod quas magnam. Quidem, temporibus
            at. Voluptates, error doloremque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionDrop;
