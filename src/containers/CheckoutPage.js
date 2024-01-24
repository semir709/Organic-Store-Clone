import React from "react";
import { ButtonGreen, RadioPaymantInput } from "../components/index";

const CheckoutPage = () => {
  return (
    <div className="bg-global-color-4 py-5">
      <form className="flex items-start max-w-[1200px] mx-auto gap-10 md:flex-row flex-col">
        <div className="md:w-[60%] w-full px-2">
          <h3 className="font-bold text-lg mb-4">Billing details</h3>
          <div className="w-full bg-gray-300 h-[1px] mb-5"></div>
          <div className="mb-5">
            <div className="flex items-center w-full gap-14 mb-3">
              <div className="grow">
                <label htmlFor="firstName" className="block font-bold ">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="border-2 p-2 w-full"
                />
              </div>
              <div className="grow">
                <label htmlFor="lastName" className="block font-bold ">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="border-2 p-2 w-full"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="companyName" className="block font-bold ">
                Company name (optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="countryRegion" className="block font-bold ">
                Country / Region *
              </label>
              <select
                name="countryRegion"
                id="countryRegion"
                className="bg-white border-2 px-2  py-3 w-full font-normal"
              >
                <option value="bosna">Bosnia and Herzegovina</option>
                <option value="austria">Austria</option>
                <option value="england">England</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="houseNumber" className="font-bold">
                Street address
              </label>
              <input
                id="houseNumber"
                type="text"
                className="border-2 p-2 w-full mb-2 "
                placeholder="House number and street name"
              />
              <input
                id="companyName"
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
                type="text"
                className="border-2 p-2 w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="canton" className="block font-bold ">
                Canton (optional)
              </label>
              <input id="canton" type="text" className="border-2 p-2 w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="block font-bold ">
                Phone *
              </label>
              <input id="phone" type="text" className="border-2 p-2 w-full" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block font-bold ">
                Email address *
              </label>
              <input id="email" type="text" className="border-2 p-2 w-full" />
            </div>
          </div>
          <div className="w-full">
            <label className="block" htmlFor="additional">
              Additional notes (optional)
            </label>
            <textarea
              name="additional"
              id="additional"
              cols="50"
              rows="5"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="p-3 w-full"
            ></textarea>
          </div>
        </div>
        <div className="px-5 md:w-[40%] w-full">
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
                <tr className="border-b-2 ">
                  <td className="py-3">Cashew Butter × 2</td>
                  <td className="py-3">$50</td>
                </tr>
              </tbody>
              <tfoot className="text-left ">
                <tr className="border-b-2 ">
                  <th className="font-normal py-3">Subtotal</th>
                  <th className="font-normal py-3">$50</th>
                </tr>
                <tr className="border-b-2 ">
                  <th className="font-normal py-3">Total</th>
                  <th className="font-normal py-3">$50</th>
                </tr>
              </tfoot>
            </table>
            <div className="">
              <RadioPaymantInput />
              <ButtonGreen text={"Palce holder"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
