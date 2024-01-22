import React, { useEffect, useState } from "react";

const InputRange = ({
  min,
  max,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const [minNumberRange, setMinNumberRange] = useState(minValue);
  const [maxNumberRange, setMaxNumberRange] = useState(maxValue);

  useEffect(() => {
    setMinNumberRange(minValue);
  }, [minValue]);

  useEffect(() => {
    setMaxNumberRange(maxValue);
  }, [maxValue]);

  const inputTypeMin = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);

    const finalValue = value < min ? min : value;
    setMinNumberRange(finalValue);
    setMinValue(finalValue);
  };

  const inputTypeMax = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);

    const finalValue = value < max ? value : max;
    setMaxNumberRange(finalValue);
    setMaxValue(finalValue);
  };
  return (
    <div className="flex justify-end">
      <div className="flex items-center border bg-white p-2 text-gray-500">
        <div className="">$</div>
        <div className="w-[40px]">
          <input
            className="w-full input-range"
            type="number"
            value={minNumberRange}
            onChange={inputTypeMin}
          />
        </div>
      </div>
      <div className="flex items-center border bg-white p-2 text-gray-500">
        <div className="">$</div>
        <div className="w-[40px]">
          <input
            className="w-full input-range"
            type="number"
            value={maxNumberRange}
            onChange={inputTypeMax}
          />
        </div>
      </div>
    </div>
  );
};

export default InputRange;
