import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const DisplayFilter = ({
  min,
  max,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) => {
  const [displayFilterMesage, setDisplayFilterMesage] = useState(false);
  const [filterRangeMesage, setFilterRangeMesage] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  const showFilter = (minVal, maxVal, min, max) => {
    let message = "";
    if (minVal === min && maxVal < max) {
      message = `Up to $${maxVal}`;
    } else if (minVal > min && maxVal === max) {
      message = `From $${minVal}`;
    } else if (minVal > min && maxVal < max) {
      message = `Between $${minVal} and $${maxVal}`;
    }

    return message;
  };

  useEffect(() => {
    let time = null;

    if (minValue === min && maxValue === max) {
      setDisplayFilterMesage(false);
    } else {
      time = setTimeout(() => {
        setDisplayFilterMesage(true);
        const msg = showFilter(minValue, maxValue, min, max);
        setFilterRangeMesage(msg);
      }, 1000);
    }

    return () => {
      clearTimeout(time);
    };
  }, [minValue, maxValue]);

  useEffect(() => {
    if (!location.pathname.startsWith("/shop/range")) {
      setDisplayFilterMesage(false);
      setMaxValue(max);
      setMinValue(min);
    }
  }, [location]);

  const resetFilter = () => {
    setDisplayFilterMesage(false);
    setMaxValue(max);
    setMinValue(min);
    navigate("/shop/products");
  };
  return (
    <>
      {displayFilterMesage && (
        <div className="flex flex-col items-left my-5">
          <h3 className="font-semibold text-2xl mb-2">Active Filter</h3>
          <div className="text-sm mb-2">
            <span className="font-semibold uppercase ">Price:</span>
            <div className="flex items-center mt-1">
              <span
                className="me-1 hover:cursor-pointer group"
                onClick={resetFilter}
              >
                <div className="p-[2px] bg-gray-300 rounded-full group-hover:bg-gray-500">
                  <IoCloseSharp className="group-hover:text-white" />
                </div>
              </span>
              <span>{filterRangeMesage}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayFilter;
