import React, { useState } from "react";
import { useInterval } from "../utils";
import Skeleton from "react-loading-skeleton";

const NumberStat = (props) => {
  const [integer, setInteger] = useState(props.number - props.reduce);

  useInterval(() => {
    if (props.isNumVisiable && integer < props.number) {
      setInteger(integer + 1);
    }
  }, 10);

  console.log(props);

  return !props.number ? (
    <Skeleton className="py-[20px] px-[40px]" />
  ) : (
    <div className="text-center">
      <div>
        <span className="text-5xl font-semibold">
          <span>{integer}</span>
          <span>+</span>
        </span>
      </div>
      <div>
        <span className="font-semibold text-lg">{props.title}</span>
      </div>
    </div>
  );
};

export default NumberStat;
