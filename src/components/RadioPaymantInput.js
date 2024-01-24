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
          className="me-5"
          onClick={() => setSwitchInput(0)}
          checked={switchInput === 0 ? true : false}
        />
        <label htmlFor="checkPaymant">Check paymants</label>
        <RadioMessage
          text={checkPaymantText}
          show={switchInput === 0 ? true : false}
        />
      </div>
      <div className="mb-3">
        <input
          type="radio"
          id="cashDelivery"
          className="me-5"
          onClick={() => setSwitchInput(1)}
          checked={switchInput === 0 ? false : true}
        />
        <label htmlFor="cashDelivery">Cash on delivery</label>
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
        class={`w-0 h-0 
            border-l-[15px] border-l-transparent
            border-b-[18px] border-b-gray-500
            border-r-[15px] border-r-transparent
            ms-[40px] mb-[1px] ${show ? "block" : "hidden"}`}
      ></div>

      <div className="bg-gray-300  w-full">
        <p className={`text-gray-500  ${show ? "block p-3" : "hidden"}`}>
          {text}
        </p>
      </div>
    </div>
  );
};
