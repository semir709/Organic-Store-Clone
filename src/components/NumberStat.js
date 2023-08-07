import React, { useEffect, useState } from "react";
import { useInterval } from "../utils";

const NumberStat = ({ number, title, reduce }) => {
  const [integer, setInteger] = useState(number - reduce);

  useInterval(() => {
    if (integer < number) {
      setInteger(integer + 1);
    }
  }, 10);

  return (
    <div className="text-center">
      <div>
        <span className="text-5xl font-semibold">
          <span>{integer}</span>
          <span>+</span>
        </span>
      </div>
      <div>
        <span className="font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
};

export default NumberStat;
