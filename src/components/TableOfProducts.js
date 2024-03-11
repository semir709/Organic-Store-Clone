import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ButtonGreen, CouponInput, InfoMessage } from "../components/index";
import { urlFor } from "../utils";
import { useCart } from "../utils/context/CartContextCustom";

const TableOfProducts = ({ products, read = false }) => {
  const { updateQuantity, removeItem } = useCart();
  const [message, setMessage] = useState({ flag: false, message: "" });

  return (
    <>
      <div className="my-3">
        {message.flag && <InfoMessage text={message.message} mode="danger" />}
      </div>
      <form>
        <div className="md:block hidden">
          <TabelDesktop
            products={products}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            setMessage={setMessage}
            read={read}
          />
        </div>
        <div className="md:hidden block">
          <TabelMobile
            products={products}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            setMessage={setMessage}
            read={read}
          />
        </div>
      </form>
    </>
  );
};

export default TableOfProducts;

const TabelDesktop = ({
  products,
  removeItem,
  updateQuantity,
  setMessage,
  read,
}) => {
  return (
    <table className=" w-full">
      <thead className="bg-white text-left border-2">
        <th className="py-3 px-2"></th>
        <th className="py-3 px-2"></th>
        <th className="py-3 px-2">Product</th>
        <th className="py-3 px-2">Price</th>
        <th className="py-3 px-2">Quantity</th>
        <th className="py-3 px-2">Subtotal</th>
      </thead>
      <tbody>
        {products.map(({ id, title, price, image, amount, slug }) => (
          <tr className="border-2 border-t-0" key={id}>
            <td className="py-3 px-2 text-center">
              {!read ? (
                <span>
                  <IoCloseCircleOutline
                    size={24}
                    className="text-gray-400 hover:cursor-pointer hover:text-black inline-block"
                    onClick={() => removeItem(id)}
                  />
                </span>
              ) : (
                <span className="text-global-color-1  uppercase">Sent</span>
              )}
            </td>
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
              <InputTableQuantity
                id={id}
                amount={amount}
                updateQuantity={updateQuantity}
              />
            </td>
            <td className="py-3 px-2">
              <span>${price * amount}</span>
            </td>
          </tr>
        ))}

        <tr className="border-2 border-t-0">
          <td colSpan={6} className="py-3 px-2 ">
            <CouponInput text={"apply coupon"} setMessage={setMessage} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const InputTableQuantity = ({ id, amount, updateQuantity }) => {
  const [qunantity, setQuantity] = useState(amount);

  const change = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      console.log("Save");
      updateQuantity(id, qunantity);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [qunantity]);
  return (
    <div>
      <input
        type="number"
        min={1}
        value={qunantity}
        onChange={change}
        className="max-w-[75px] px-3 py-2"
      />
    </div>
  );
};

const TabelMobile = ({
  products,
  removeItem,
  updateQuantity,
  setMessage,
  read,
}) => {
  return (
    <table className="w-full  my-3">
      <tbody>
        {products.map(({ id, title, price, image, amount, slug }) => (
          <>
            <tr className="border-2 text-lg ">
              <th className="py-3 font-normal text-left "></th>
              <td className="text-right pe-2">
                {!read ? (
                  <span>
                    <IoCloseCircleOutline
                      size={24}
                      className="text-gray-400 hover:cursor-pointer hover:text-black inline-block"
                      onClick={() => removeItem(id)}
                    />
                  </span>
                ) : (
                  <span className="text-global-color-1 uppercase">Sent</span>
                )}
              </td>
            </tr>
            <tr className="border-2 text-lg ">
              <th className="py-3 font-normal text-left ps-2"></th>
              <td className="text-right pe-2 py-2">
                <img
                  className="w-full h-full object-cover max-w-[70px] inline-block"
                  src={image && urlFor(image)}
                  alt={image.caption}
                />
              </td>
            </tr>
            <tr className="border-2 text-lg">
              <th className="py-3 font-normal text-left ps-2 ">Product</th>
              <td className="text-right pe-2">
                <span className="text-global-color-0">
                  <Link to={`/product/${slug}`}>{title}</Link>
                </span>
              </td>
            </tr>
            <tr className="border-2 text-lg">
              <th className="py-3 font-normal text-left ps-2">Price</th>
              <td className="text-right pe-2">
                <span>${price}</span>
              </td>
            </tr>
            <tr className="border-2 text-lg">
              <th className="py-3 font-normal text-left ps-2">Quantity</th>
              <td className="text-right pe-2">
                <InputTableQuantity
                  id={id}
                  amount={amount}
                  updateQuantity={updateQuantity}
                />
              </td>
            </tr>
            <tr className="border-2 text-lg">
              <th className="py-3 font-normal text-left ps-2">Subtotal</th>
              <td className="text-right pe-2">
                <span>${price * amount}</span>
              </td>
            </tr>
          </>
        ))}

        <tr className="border-2 border-t-0">
          <td colSpan={6} className="py-3 px-2 ">
            <CouponInput text={"apply coupon"} setMessage={setMessage} />
            {/* <div className="flex items-center">
              <input
                type="text"
                placeholder="Coupon code"
                className="border-2 px-2 py-1 me-2 w-full"
              />
              <ButtonGreen text={"Apply coupon"} />
            </div> */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
