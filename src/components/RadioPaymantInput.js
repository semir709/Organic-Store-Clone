import React, { useState } from "react";

const checkPaymantText = `Please send a check to Store Name, Store Street, Store Town, Store
State / County, Store Postcode.`;
const deliveryPaymantText = `Pay with cash upon delivery.`;

const RadioPaymantInput = () => {
  const [switchInput, setSwitchInput] = useState(0);
  return (
    <>
      <div className="mb-3">
        <input
          type="radio"
          id="checkPaymant"
          className="me-5 cursor-pointer"
          onChange={() => setSwitchInput(0)}
          checked={switchInput === 0 ? true : false}
        />
        <label htmlFor="checkPaymant" className="cursor-pointer">
          Check paymants
        </label>
        <RadioMessage
          text={checkPaymantText}
          show={switchInput === 0 ? true : false}
        />
      </div>
      <div className="mb-3">
        <input
          type="radio"
          id="cashDelivery"
          className="me-5 cursor-pointer"
          onChange={() => setSwitchInput(1)}
          checked={switchInput === 0 ? false : true}
        />
        <label htmlFor="cashDelivery" className="cursor-pointer">
          Cash on delivery
        </label>
        <RadioMessage
          text={deliveryPaymantText}
          show={switchInput === 0 ? false : true}
        />
      </div>
    </>
  );
};

export default RadioPaymantInput;

const RadioMessage = ({ show = false, text }) => {
  return (
    <div className="">
      <div
        className={`w-0 h-0 
            border-l-[15px] border-l-transparent
            border-b-[18px] border-b-gray-300
            border-r-[15px] border-r-transparent
            ms-[40px] ${show ? "block" : "hidden"}`}
      ></div>

      <div
        className={`w-full grid  transition-[grid-template-rows] ${
          show ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="bg-gray-300  w-full overflow-hidden">
          <p className="text-global-color-3 p-3">{text}</p>
        </div>
      </div>
    </div>
  );
};
