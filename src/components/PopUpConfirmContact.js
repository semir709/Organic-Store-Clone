import React from "react";
import ContactCards from "./ContactCards";

const PopUpConfirmContact = ({ data, setPopUpConfirm }) => {
  const handleClose = () => {
    setPopUpConfirm(false);
    document.body.style.overflow = "auto";
  };
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
          <ContactCards data={data} notInteractive={false} />
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
