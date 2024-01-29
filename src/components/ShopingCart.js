import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ButtonGreen from "./ButtonGreen";
import BlackFilter from "./BlackFilter";
import { useCart } from "../utils/context/CartContextCustom";
import { urlFor } from "../utils";

const ShopingCart = ({ setCartToggle, cartToggle }) => {
  const { cart, caculateFinalPrice, removeItem } = useCart();

  const total = caculateFinalPrice();

  return (
    <div className=" bg-red-300">
      <BlackFilter toggle={cartToggle} />
      <div
        className={`fixed z-50 w-1/3 h-full bg-white top-0 right-0  duration-300 border flex flex-col 
       ${cartToggle ? " translate-x-[0] " : "  translate-x-[100%] "}`}
      >
        <div className="flex justify-between p-5 items-center border-b-[1px] flex-1">
          <span>Shopping Cart</span>
          <button onClick={() => setCartToggle((prev) => !prev)}>
            <GrFormClose fontSize={30} />
          </button>
        </div>

        <div className=" h-full w-full flex-2 relative overflow-auto px-3">
          {cart.length === 0 && (
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              No products in chart.
            </p>
          )}

          {cart.map(({ id, title, price, amount, image }, index) => (
            <div
              key={id}
              className={`px-2 py-4 w-full  ${
                index === 0 ? "border-t-0" : "border-t-[1px]"
              }`}
            >
              <div className="flex items-center">
                <div className="me-2">
                  <a href="/">
                    <img
                      src={image && urlFor(image)}
                      alt={image.caption}
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
                      <button onClick={() => removeItem(id)}>
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
          {cart.length === 0 ? (
            <div className="mx-4" onClick={() => setCartToggle(false)}>
              <ButtonGreen text={"Continue Shopping"} url="/shop/products" />
            </div>
          ) : (
            <div className="w-full">
              <div className="border-y-[1px] py-4">
                <p className="flex justify-between items-center px-4">
                  <strong className="font-normal ">Subtotal:</strong>{" "}
                  <span>€{total}</span>
                </p>
              </div>

              <div className="mx-4 mt-4" onClick={() => setCartToggle(false)}>
                <ButtonGreen text={"View Cart"} url="/cart" />
                <ButtonGreen text={"Checkout"} url="/checkout" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
