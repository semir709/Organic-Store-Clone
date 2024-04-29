import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [canClear, setCanClear] = useState(false);
  const getData = () => {
    const target = targetRef.current;

    if (target.value.length === 0) {
      navigate("/shop/products");
    } else {
      navigate(`/shop/search/${target.value}`);
    }
  };

  useEffect(() => {
    if (!location.pathname.startsWith("/shop/search")) {
      targetRef.current.value = "";
    }
  }, [location]);

  const inputHover = () => {
    const target = targetRef.current;

    if (target.value.length > 0) {
      setCanClear(true);
    }
  };

  const checkIsEmpty = () => {
    const target = targetRef.current;
    if (target.value.length === 0) {
      setCanClear(false);
      navigate("/shop/products");
    }
  };

  const removeText = () => {
    const target = targetRef.current;
    target.value = "";
    setCanClear(false);
    navigate("/shop/products");
  };
  return (
    <data
      action=""
      className="mb-[30px] flex w-full"
      onMouseLeave={() => setCanClear(false)}
    >
      <div className="flex bg-white me-2">
        <input
          type="text"
          className="px-2 py-2 flex-1 w-full "
          placeholder="Search products..."
          ref={targetRef}
          onMouseOver={inputHover}
          onInput={checkIsEmpty}
        />
        {canClear && (
          <div className="flex  items-center me-2 hover:cursor-pointer">
            <IoIosCloseCircleOutline
              size={20}
              className="hover:text-black text-gray-500"
              onClick={removeText}
            />
          </div>
        )}
      </div>
      <button
        onClick={getData}
        className="py-3 px-1 bg-global-color-1 hover:bg-global-color-0 text-white rounded-sm"
      >
        <IoIosArrowForward />
      </button>
    </data>
  );
};

export default SearchInput;
