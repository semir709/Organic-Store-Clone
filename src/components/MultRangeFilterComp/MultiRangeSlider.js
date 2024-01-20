import React, { useEffect, useState } from "react";
import InputRange from "./InputRange";
import DisplayFilter from "./DisplayFilter";
import RangeSlideInputs from "./RangeSlideInputs";
import { useNavigate } from "react-router-dom";
const MultiRangeSlider = () => {
  const min = 50;
  const max = 100;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      if (minValue > min || maxValue < max)
        navigate(`/shop/range/${minValue}&${maxValue}`);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [minValue, maxValue]);

  return (
    <>
      <DisplayFilter
        min={min}
        max={max}
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
      />
      <RangeSlideInputs
        min={min}
        max={max}
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
      />
      <InputRange
        min={min}
        max={max}
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
      />
    </>
  );
};

export default MultiRangeSlider;
