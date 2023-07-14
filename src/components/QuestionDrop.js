import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

const QuestionDrop = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="border-b-2   hover:cursor-pointer mb-[50px] "
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className="flex items-center justify-between mb-2 mx-[40px]">
        <div className="mb-2">
          <p className="text-lg font-bold">{question}</p>
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
          <p className="py-5  px-[40px]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionDrop;
