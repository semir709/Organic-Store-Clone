import React, { useState } from "react";
import { TableOfProducts } from "../components/index";
import { IoCloseCircleOutline } from "react-icons/io5";
import { urlFor } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../utils/context/CartContextCustom";

const PurchasedItemsInfo = () => {
  const products = localStorage.getItem("cart");
  const [items, setItems] = useState(JSON.parse(products));
  const navigate = useNavigate();
  const { removeAllItems } = useCart();

  useState(() => {
    localStorage.removeItem("cart");
    removeAllItems();
  }, []);

  return (
    <div className="bg-global-color-4 h-screen">
      <h1 className="text-3xl  mx-auto block w-fit mb-4 text-global-color-3 text-center">
        Items that are sent to your location
      </h1>
      <div className="sm:w-[80%] sm:mx-auto mx-1 pt-5">
        <table className=" w-full">
          <thead className="bg-white text-left border-2">
            <th className="py-3 px-1"></th>
            <th className="">Product</th>
            <th className="py-3 px-1">Price</th>
            <th className="py-3 px-1">Quantity</th>
            <th className="py-3 px-1">Subtotal</th>
          </thead>
          <tbody>
            {items.map(({ id, title, price, image, amount, slug }) => (
              <tr className="border-2 border-t-0" key={id}>
                <td className="py-3 px-2">
                  <img
                    className="w-full h-full object-cover max-w-[70px]"
                    src={image && urlFor(image)}
                    alt={image.caption}
                  />
                </td>
                <td className="py-3 px-2">
                  <span className="text-global-color-0">
                    <Link to={`/product/${slug}`}>{title}</Link>
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span>${price}</span>
                </td>
                <td className="py-3 px-2">
                  <span>{amount}</span>
                </td>
                <td className="py-3 px-2">
                  <span>${price * amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5 mx-auto w-fit">
          <button
            onClick={() => navigate("/shop/products", { replace: true })}
            className="bg-global-color-1 hover:bg-global-color-0 text-white px-5 py-3 rounded-lg uppercase"
          >
            Return to the store
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasedItemsInfo;
