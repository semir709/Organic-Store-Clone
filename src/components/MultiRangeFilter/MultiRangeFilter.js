import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./MultiRangeSlider.css";
import { IoIosClose } from "react-icons/io";

const MultiRangeSlider = ({ min, max, currency }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const [priceDisplay, setPriceDisplay] = useState(false);
  const [priceRange, setPriceRange] = useState(0);
  const [price, setPrice] = useState({ priceStart: min, priceEnd: max });
  const [timeoutIdMax, setTimeoutIdMax] = useState(null);
  const [timeoutIdMin, setTimeoutIdMin] = useState(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (price.priceStart !== min || price.priceEnd !== max) {
      if (price.priceStart > 0 && price.priceEnd === max) {
        setPriceRange(0);
      } else if (price.priceStart === 0 && price.priceEnd < max) {
        setPriceRange(1);
      } else if (price.priceStart > 0 && price.priceEnd < max) {
        setPriceRange(2);
      }
      setPriceDisplay(true);
    } else if (price.priceStart === min && price.priceEnd === max) {
      setPriceDisplay(false);
    }
  }, [price, max, min]);

  const inputMin = (e) => {
    const element = e.target;
    let value = Math.min(Number(element.value), maxVal - 1);
    if (isNaN(value)) value = min;
    minValRef.current = value;
    setMinVal(value > -1 ? value : 0);

    if (timeoutIdMin) clearTimeout(timeoutIdMin);

    let timeID = setTimeout(() => {
      setPrice((prev) => ({ ...prev, priceStart: value }));
    }, 1000);

    setTimeoutIdMin(timeID);
  };

  const inputMax = (e) => {
    const element = e.target;
    let value = Math.max(Number(element.value), minVal + 1);
    if (isNaN(value)) value = max;
    maxValRef.current = value;
    setMaxVal(value < max ? value : max);

    if (timeoutIdMax) clearTimeout(timeoutIdMax);

    let timeID = setTimeout(() => {
      setPrice({ ...price, priceEnd: value });
    }, 1000);

    setTimeoutIdMax(timeID);
  };

  const closeAndRest = () => {
    setPriceDisplay(false);
    setPrice({ priceStart: min, priceEnd: max });
    maxValRef.current = max;
    minValRef.current = min;
    setMaxVal(max);
    setMinVal(min);
  };

  const rangeMinVal = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    if (timeoutIdMin) clearTimeout(timeoutIdMin);
    let timeID = setTimeout(() => {
      setPrice((prev) => ({ ...prev, priceStart: value }));
    }, 1000);
    setTimeoutIdMin(timeID);
  };

  const rangeMaxVal = (event) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;

    if (timeoutIdMax) clearTimeout(timeoutIdMax);

    let timeID = setTimeout(() => {
      setPrice({ ...price, priceEnd: value });
    }, 1000);

    setTimeoutIdMax(timeID);
  };

  return (
    <>
      <p className="heading">Filter by price</p>

      {priceDisplay && (
        <div className="priceDisplay">
          <p className="priceText">Price:</p>
          <div className="flex items-center">
            <div onClick={closeAndRest} className="close-container">
              <IoIosClose fontSize={20} />
            </div>

            <span className="text-sm">
              {priceRange === 0 && <span>From €{price.priceStart} </span>}
              {priceRange === 2 && (
                <span>
                  Between €{price.priceStart} and €{price.priceEnd}
                </span>
              )}
              {priceRange === 1 && <span>Up to €{price.priceEnd} </span>}
            </span>
          </div>
        </div>
      )}

      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={rangeMinVal}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={rangeMaxVal}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__value-container">
            <div className="value-container ">
              <div className="slider__left-value curreny">{currency}</div>
              <input
                className="slider__left-value"
                value={minVal}
                onChange={inputMin}
              />
            </div>
            <div className="value-container ">
              <div className="slider__right-value curreny">{currency}</div>
              <input
                className="slider__right-value"
                value={maxVal}
                onChange={inputMax}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default MultiRangeSlider;
