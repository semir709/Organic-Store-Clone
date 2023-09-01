import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./MultiRangeSlider.css";
import { IoIosClose } from "react-icons/io";

const MultiRangeSlider = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const [priceDisplay, setPriceDisplay] = useState(false);
  const [priceRange, setPriceRange] = useState(0);
  const [price, setPrice] = useState({ priceStart: min, priceEnd: max });

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
    const value = Math.min(Number(element.value), maxVal - 1);
    minValRef.current = value;
    setMinVal(value > -1 ? value : 0);
  };

  const inputMax = (e) => {
    const element = e.target;
    const value = Math.max(Number(element.value), minVal + 1);
    maxValRef.current = value;
    setMaxVal(value < max ? value : max);
  };

  const closeAndRest = () => {
    setPriceDisplay(false);
    setPrice({ priceStart: min, priceEnd: max });
    maxValRef.current = max;
    minValRef.current = min;
    setMaxVal(max);
    setMinVal(min);
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
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;

            setPrice((prev) => ({ ...prev, priceStart: value }));
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;

            setPrice({ ...price, priceEnd: value });
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__value-container">
            <input
              className="slider__left-value"
              value={minVal}
              onChange={inputMin}
            />
            <input
              className="slider__right-value"
              value={maxVal}
              onChange={inputMax}
            />
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
