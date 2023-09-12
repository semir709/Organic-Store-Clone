import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

import { IoIosCloseCircleOutline } from "react-icons/io";
import ButtonGreen from "./ButtonGreen";
import BlackFilter from "./BlackFilter";

const local = [
  {
    title: "Pizza Extra Spicy",
    price: "12.00",
    amount: 1,
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ShopingCart = ({ setCartToggle, cartToggle }) => {
  const [store, setStore] = useState(local); // replace with real data stored inside local storage
  const total = "12.00";
  return (
    <div className="">
      <BlackFilter toggle={cartToggle} />
      <div
        className={`fixed w-1/3 h-full bg-white top-0 right-0  duration-300 border flex flex-col 
       ${cartToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        <div className="flex justify-between p-5 items-center border-b-[1px] flex-1">
          <span>Shopping Cart</span>
          <button onClick={() => setCartToggle((prev) => !prev)}>
            <GrFormClose fontSize={30} />
          </button>
        </div>

        <div className=" h-full w-full flex-2 relative overflow-auto px-3">
          {store.length === 0 && (
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              No products in chart.
            </p>
          )}

          {store.map(({ title, price, amount, img }, index) => (
            <div
              key={index}
              className={`px-2 py-4 w-full  ${
                index === 0 ? "border-t-0" : "border-t-[1px]"
              }`}
            >
              <div className="flex items-center">
                <div className="me-2">
                  <a href="/">
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-[64px] h-[64px]"
                    />
                  </a>
                </div>

                <div className="ms-2 w-full">
                  <div className="flex justify-between w-full items-center">
                    <a
                      href="/"
                      className="font-medium text-global-color-2 w-full"
                    >
                      {title}
                    </a>
                    <div className="">
                      <button>
                        <IoIosCloseCircleOutline
                          fontSize={25}
                          color="#B2B2B2"
                        />
                      </button>
                    </div>
                  </div>

                  <span className="block font-normal text-global-color-3">
                    {amount} x <span>€{price}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 ">
          {store.length === 0 ? (
            <div className="mx-4">
              <ButtonGreen text={"Continue Shopping"} />
            </div>
          ) : (
            <div className="w-full">
              <div className="border-y-[1px] py-4">
                <p className="flex justify-between items-center px-4">
                  <strong className="font-normal ">Subtotal:</strong>{" "}
                  <span>€{total}</span>
                </p>
              </div>

              <div className="mx-4 mt-4">
                <ButtonGreen text={"View Cart"} />
                <ButtonGreen text={"Checkout"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
