import React from "react";

const CardSide = () => {
  return (
    <div className="mt-[50px]">
      <div className="w-full">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div>
        <div>
          <span>
            <a className="text-global-color-1 text-lg" href="/">
              Hand Sanitizer
            </a>
          </span>
        </div>
        <div>
          <span>
            €<span className="text-sm">15.00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSide;
