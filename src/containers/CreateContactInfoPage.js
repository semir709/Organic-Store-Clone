import React, { useState } from "react";
import { useCart } from "../utils/context/CartContextCustom";
import { InfoMessage, RadioPaymantInput } from "../components/index";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonePattern =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const defaultForm = {
  additional: "",
  apartment: "",
  canton: "",
  company: "",
  country: "bosnia",
  email: "",
  firstName: "",
  houseNum: "",
  lastName: "",
  phone: "",
  postCode: "",
  townCity: "",
};

const CreateContactInfoPage = () => {
  const { caculateFinalPrice } = useCart();
  const { cart } = useCart();
  const [message, setMessage] = useState(null);
  //   const [contactInfoLocal, setContactInfoLocal] = useState(null);
  const [form, setForm] = useState(defaultForm);

  const total = caculateFinalPrice();

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let save = true;
    for (const key in form) {
      if (
        form[key].length === 0 &&
        key !== "company" &&
        key !== "apartment" &&
        key !== "canton" &&
        key !== "additional"
      ) {
        document.getElementById(key).style.border = "1px red solid";
        setMessage({
          title: "Some fields are empty, please fill all required fileds",
          mode: "danger",
        });

        save = false;
      } else {
        document.getElementById(key).style.border = "1px green solid";
        if (key === "phone" && !form[key].match(phonePattern)) {
          document.getElementById(key).style.border = "1px red solid";
          setMessage({
            title: "phone field is wrong format type",
            mode: "danger",
          });

          save = false;
        } else if (key === "email" && !form[key].match(emailPattern)) {
          document.getElementById(key).style.border = "1px red solid";
          setMessage({
            title: "email field is wrong format type",
            mode: "danger",
          });

          save = false;
        }
      }
    }

    if (save) localStorage.setItem("contactInfo", JSON.stringify(form));
  };

  return (
    <div className="bg-global-color-4 pb-[100px] pt-[50px]">
      <form className="flex items-start max-w-[1200px] mx-auto gap-10 md:flex-row flex-col">
        <div className="md:w-[60%] w-full px-2">
          <div className="mb-3">
            {message && (
              <InfoMessage text={message.title} mode={message.mode} />
            )}
          </div>
          <h3 className="font-bold text-lg mb-4">Billing details</h3>
          <div className="w-full bg-gray-300 h-[1px] mb-5"></div>
          <div className="mb-5">
            <div className="flex items-center w-full gap-14 mb-3">
              <div className="grow">
                <label htmlFor="firstName" className="block font-bold ">
                  First name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName || ""}
                  onChange={handleChanges}
                  type="text"
                  className="border-2 p-2 w-full"
                />
              </div>
              <div className="grow">
                <label htmlFor="lastName" className="block font-bold ">
                  Last name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName || ""}
                  onChange={handleChanges}
                  type="text"
                  className="border-2 p-2 w-full"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="block font-bold ">
                Company name (optional)
              </label>
              <input
                id="company"
                name="company"
                value={form.company || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="block font-bold ">
                Country / Region *
              </label>
              <select
                name="country"
                id="country"
                onChange={handleChanges}
                className="bg-white border-2 px-2  py-3 w-full font-normal"
              >
                <option value="bosnia">Bosnia and Herzegovina</option>
                <option value="austria">Austria</option>
                <option value="england">England</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="houseNum" className="font-bold">
                Street address *
              </label>
              <input
                id="houseNum"
                value={form.houseNum || ""}
                onChange={handleChanges}
                name="houseNum"
                type="text"
                className="border-2 p-2 w-full mb-2 "
                placeholder="House number and street name"
              />
              <input
                id="apartment"
                name="apartment"
                value={form.apartment || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postCode" className="block font-bold ">
                Postcode / ZIP *
              </label>
              <input
                id="postCode"
                name="postCode"
                value={form.postCode || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="townCity" className="block font-bold ">
                Town / City *
              </label>
              <input
                id="townCity"
                name="townCity"
                value={form.townCity || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="canton" className="block font-bold ">
                Canton (optional)
              </label>
              <input
                id="canton"
                name="canton"
                value={form.canton || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="block font-bold ">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block font-bold ">
                Email address *
              </label>
              <input
                id="email"
                name="email"
                value={form.email || ""}
                onChange={handleChanges}
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block font-bold " htmlFor="additional">
              Additional notes (optional)
            </label>
            <textarea
              name="additional"
              value={form.additional || ""}
              onChange={handleChanges}
              id="additional"
              cols="50"
              rows="5"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="p-3 w-full "
            ></textarea>
          </div>
        </div>
        <div className="px-5 md:w-[40%] w-full mt-5">
          <div className=" border-2 p-5 ">
            <h3 className="font-semibold text-2xl mb-4">Your order</h3>
            <table className="mb-5 w-full">
              <thead className="text-left">
                <tr className="border-b-2 mb-2">
                  <th className="py-3">Product</th>
                  <th className="py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-left">
                {cart.map(({ id, title, amount, price }) => (
                  <tr className="border-b-2 ">
                    <td className="py-3">
                      {title} × {amount}
                    </td>
                    <td className="py-3">${price * amount}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="text-left ">
                <tr className="border-b-2 ">
                  <th className="font-normal py-3">Subtotal</th>
                  <th className="font-normal py-3">${total}</th>
                </tr>
                <tr className="border-b-2 ">
                  <th className="font-normal py-3">Total</th>
                  <th className="font-normal py-3">${total}</th>
                </tr>
              </tfoot>
            </table>
            <div className="">
              <RadioPaymantInput />

              <button
                className="bg-global-color-1 hover:bg-global-color-0 text-white px-5 py-2 rounded-md"
                onClick={handleSubmit}
              >
                Place holder
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateContactInfoPage;
