import React from "react";

import { ButtonGreen, TableOfProducts } from "../components/index";
import { useCart } from "../utils/context/CartContextCustom";

const CartPage = () => {
  const { cart, caculateFinalPrice } = useCart();

  const total = caculateFinalPrice();
  return (
    <div className="bg-global-color-4 py-5 min-h-[400px] ">
      <div className="mx-auto w-[80%]">
        <h1 className="font-bold text-3xl">Cart</h1>

        {cart.length > 0 ? (
          <>
            <div className="my-5 ">
              <TableOfProducts products={cart} />
            </div>
            <div className="border-2 max-w-[550px] ms-auto pb-5 mb-5">
              <h2 className="w-full bg-white px-5 py-3 text-2xl font-semibold">
                Cart totals
              </h2>
              <div className="px-5">
                <table className="w-full text-left my-3">
                  <tbody>
                    <tr className="border-b-2 text-lg">
                      <th className="py-3 font-normal">Subtotal</th>
                      <td>${total}</td>
                    </tr>
                    <tr className="border-b-2 text-lg">
                      <th className="py-3 font-normal">Total</th>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </table>

                <ButtonGreen
                  text={"Proceed to checkout"}
                  url={"/checkout/selectContactInfo"}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full p-5 flex justify-center items-center flex-col">
            <h3>Your cart is currently empty. </h3>
            <ButtonGreen text={"Return to the shop"} url="/shop/products" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
