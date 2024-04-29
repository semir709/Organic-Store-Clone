import React, { useEffect, useState } from "react";
import InputRange from "./InputRange";
import DisplayFilter from "./DisplayFilter";
import RangeSlideInputs from "./RangeSlideInputs";
import { useLocation, useNavigate } from "react-router-dom";
import "./rangeStyle.css";
import sanityClient from "../../client";
import Skeleton from "react-loading-skeleton";
import { getMinAndMax } from "../../utils";
const MultiRangeSlider = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/shop/search")) {
      setMinValue(min);
      setMaxValue(max);
    }
  }, [location]);

  useEffect(() => {
    const time = setTimeout(() => {
      if (minValue > min || maxValue < max)
        navigate(`/shop/range/${minValue}/${maxValue}/1`);
      else if (
        minValue === min &&
        maxValue === max &&
        location.pathname.startsWith("/shop/range")
      ) {
        navigate(`/shop/products`);
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [minValue, maxValue]);

  useEffect(() => {
    sanityClient.fetch(getMinAndMax).then(({ min, max }) => {
      setMin(min.price);
      setMax(max.price);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};

export default MultiRangeSlider;
