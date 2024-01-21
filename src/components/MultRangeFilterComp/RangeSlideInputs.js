import { useCallback, useEffect, useRef } from "react";

const RangeSlideInputs = ({
  min,
  max,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const range = useRef(null);

  //events
  const minRangeChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const maxRangeChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  // changing possitions of green range
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const min = getPercent(minValue);
    const max = getPercent(maxValue);

    range.current.style.left = `${min}%`;
    range.current.style.width = `${max - min}%`;
  }, [minValue]);

  useEffect(() => {
    const min = getPercent(minValue);
    const max = getPercent(maxValue);

    range.current.style.width = `${max - min}%`;
  }, [maxValue]);
  return (
    <div className="w-full relative flex items-center mb-4">
      <input
        type="range"
        max={max}
        min={min}
        className="thumb"
        onChange={minRangeChange}
        value={minValue}
      />
      <input
        type="range"
        max={max}
        min={min}
        className="thumb"
        onChange={maxRangeChange}
        value={maxValue}
      />
      <div className="slider__track" />
      <div ref={range} className="slider__range" />
    </div>
  );
};

export default RangeSlideInputs;
