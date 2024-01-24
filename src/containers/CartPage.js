import React from "react";

import { ButtonGreen, TableOfProducts } from "../components/index";

const local = [
  {
    title: "Pizza Extra Spicy",
    price: "12.00",
    amount: 1,
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const CartPage = () => {
  return (
    <div className="bg-global-color-4 py-5">
      <div className="mx-auto w-[80%]">
        <h1 className="font-bold text-3xl">Cart</h1>

        <div className="my-5 ">
          <TableOfProducts />
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
                  <td>${local[0].price}</td>
                </tr>
                <tr className="border-b-2 text-lg">
                  <th className="py-3 font-normal">Subtotal</th>
                  <td>${local[0].price}</td>
                </tr>
              </tbody>
            </table>

            <ButtonGreen text={"Proceed to checkout"} url={"/checkout"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
