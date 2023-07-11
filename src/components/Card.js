import React from "react";

const Card = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>

      <div className="mt-5 text-center">
        <span className="opacity-50 text-sm">Groceries</span>
        <a href="/">
          <h2 className="text-global-color-2 text-lg font-semibold">
            Assorted Coffe
          </h2>
        </a>
        <div className="">star</div>
        <span className="font-semibold">
          €<span>35.00</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
