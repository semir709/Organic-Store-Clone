import React from "react";
import ContactCards from "./ContactCards";

const PopUpConfirmContact = ({ data, setPopUpConfirm }) => {
  const handleClose = () => {
    setPopUpConfirm(false);
    document.body.style.overflow = "auto";
  };

  console.log(data);
  return (
    <>
      <div className="bg-black min-w-full min-h-full fixed top-0 left-0 opacity-50 z-10"></div>
      <div className="bg-white p-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg">
        <div className="w-full flex flex-col items-center mb-5">
          <h2 className="text-2xl font-bold">Please confirm</h2>
          <div>
            <span>Items will be send to these address</span>
          </div>
        </div>
        <div className="mb-5">
          {/* <ContactCards data={data} notInteractive={false} /> */}
          <div className="border p-5">
            <div className="mb-5">
              <div className="flex items-center w-full gap-14 mb-3">
                <div className="grow flex">
                  <span className="block font-bold ">First name:</span>
                  <p className="ms-3">
                    <span>{data.firstName}</span>
                  </p>
                </div>
                <div className="grow flex">
                  <span htmlFor="lastName" className="block font-bold ">
                    Last name:
                  </span>
                  <p className="ms-3">
                    <span>{data.lastName}</span>
                  </p>
                </div>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="company" className="block font-bold ">
                  Company name:
                </span>
                <p className="ms-3">
                  <span>{data.company}</span>
                </p>
              </div>

              <div className="mb-3 flex">
                <span htmlFor="country" className="block font-bold ">
                  Country / Region:
                </span>
                <p className="ms-3">
                  <span>{data.country}</span>
                </p>
              </div>

              <div className="mb-3 flex">
                <span htmlFor="street" className="font-bold">
                  Street address:
                </span>
                <p className="ms-3">
                  <span>{data.street}</span>
                </p>
                <p className="ms-3">
                  <span>{data.apartment}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="postCode" className="block font-bold ">
                  Postcode / ZIP:
                </span>
                <p className="ms-3">
                  <span>{data.postCode}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="townCity" className="block font-bold ">
                  Town / City:
                </span>
                <p className="ms-3">
                  <span>{data.townCity}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="canton" className="block font-bold ">
                  Canton:
                </span>
                <p className="ms-3">
                  <span>{data.canton}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="phone" className="block font-bold ">
                  Phone:
                </span>
                <p className="ms-3">
                  <span>{data.phone}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span htmlFor="email" className="block font-bold ">
                  Email address:
                </span>
                <p className="ms-3">
                  <span>{data.email}</span>
                </p>
              </div>
              <div className="mb-3 flex">
                <span className="block font-bold">Additional notes:</span>
                <p className="ms-3">
                  <span>
                    {data.additional.substring(0, 10)}{" "}
                    {data.additional.length > 11 && "..."}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <div>
            <button onClick={handleClose} className="hover:text-red-600">
              Cancel
            </button>
          </div>
          <div>
            <button className="bg-global-color-1 py-2 px-4 rounded-md text-white hover:bg-global-color-0">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpConfirmContact;
