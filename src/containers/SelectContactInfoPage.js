import React, { useEffect, useState } from "react";
import {
  ContactCards,
  PopUpConfirmContact,
  PopUpConfirmDelete,
} from "../components/index";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SelectContactInfoPage = () => {
  const [selectCard, setSelectCard] = useState(0);
  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("contactInfo"))
  );
  const [selectedData, setSelectedData] = useState(
    JSON.parse(localStorage.getItem("contactInfo"))[0] // these should be new created or last selected
  );
  const [popUpConfirm, setPopUpConfirm] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const navigate = useNavigate();

  const handlePopUpShow = () => {
    setPopUpConfirm(true);
    document.body.style.overflow = "hidden";
  };

  const handlePopUpDelete = () => {
    setPopUpDelete(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="p-[100px] bg-global-color-4">
      <div className="w-full flex justify-center mb-[70px]">
        <h1 className="text-3xl">Select Contact Info</h1>
      </div>
      <div className="mx-[50px] flex flex-wrap gap-7 justify-center mb-[70px]">
        {contact.map((data, index) => (
          <ContactCards
            select={selectCard === index}
            handleClick={() => setSelectCard(index)}
            data={data}
            selectedData={setSelectedData}
          />
        ))}
      </div>

      <div className="w-full flex flex-col items-center">
        <button
          onClick={handlePopUpShow}
          className="border py-5 px-5 rounded-lg w-1/2 text-center bg-global-color-1 text-white uppercase text-lg font-medium hover:bg-global-color-0 hover:cursor-pointer mb-5"
        >
          <span>Finish shopping</span>
        </button>
        <button
          onClick={() => navigate("/checkout/createContactInfo")}
          className="flex items-center"
        >
          <span className="uppercase font-medium  hover:text-global-color-0">
            Add contact
          </span>
        </button>
      </div>

      <div className="w-full flex justify-end">
        <button
          onClick={handlePopUpDelete}
          className="text-gray-500 hover:text-red-500"
        >
          Delete
        </button>
      </div>
      {popUpDelete && (
        <PopUpConfirmDelete data={contact} setPopUpDelete={setPopUpDelete} />
      )}
      {popUpConfirm && (
        <PopUpConfirmContact
          data={selectedData}
          setPopUpConfirm={setPopUpConfirm}
        />
      )}
    </div>
  );
};

export default SelectContactInfoPage;
