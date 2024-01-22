import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ButtonGreen } from "../components";

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
          <form action="">
            <table className=" w-full">
              <thead className="bg-white text-left border-2">
                <th className="py-3 px-2"></th>
                <th className="py-3 px-2"></th>
                <th className="py-3 px-2">Product</th>
                <th className="py-3 px-2">Price</th>
                <th className="py-3 px-2">Quantity</th>
                <th className="py-3 px-2">Quantity</th>
              </thead>
              <tbody>
                <tr className="border-2 border-t-0">
                  <td className="py-3 px-2 text-center">
                    <span>
                      <IoCloseCircleOutline
                        size={24}
                        className="text-gray-400 hover:cursor-pointer hover:text-black inline-block"
                      />
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <img
                      className="w-full h-full object-cover max-w-[70px]"
                      src={local[0].img}
                      alt="image"
                    />
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-global-color-0">
                      <Link to={"/"}>{local[0].title}</Link>
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span>${local[0].price}</span>
                  </td>
                  <td className="py-3 px-2">
                    <div>
                      <input
                        type="number"
                        min={1}
                        value={1}
                        className="max-w-[75px] px-3 py-2"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span>${local[0].price}</span>
                  </td>
                </tr>
                <tr className="border-2 border-t-0">
                  <td colSpan={6} className="py-3 px-2 ">
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="border-2 px-2 py-1 me-2"
                      />
                      <ButtonGreen text={"Apply coupon"} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <div className="border-2 max-w-[350px] ms-auto">
          <h2 className="w-full bg-white px-5 py-3">Cart totals</h2>
          <table className="w-full text-left my-3 mx-5">
            <tbody className="">
              <tr className="">
                <th>Subtotal</th>
                <td>${local[0].price}</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td>${local[0].price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
