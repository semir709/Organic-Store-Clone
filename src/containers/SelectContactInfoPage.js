import React, { useEffect, useState } from "react";
import {
  ContactCards,
  PopUpConfirmContact,
  PopUpConfirmDelete,
} from "../components/index";
import { useNavigate } from "react-router-dom";

const SelectContactInfoPage = () => {
  const localStorageContact = localStorage.getItem("contactInfo");
  const localStorageContactSelected = localStorage.getItem("selectedContact");
  const [selectCardIndex, setSelectCardIndex] = useState(0);
  const [contact, setContact] = useState(JSON.parse(localStorageContact));
  const [selectedData, setSelectedData] = useState(
    localStorageContactSelected ? JSON.parse(localStorageContactSelected) : null // these should be new created or last selected
  );
  const [popUpConfirm, setPopUpConfirm] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const handlePopUpShow = () => {
    setPopUpConfirm(true);
    document.body.style.overflow = "hidden";
  };

  const handlePopUpDelete = () => {
    setPopUpDelete(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    setPopUpDelete(false);
    document.body.style.overflow = "auto";

    if (isDeleted) {
      const contact = localStorage.getItem("contactInfo");

      contact
        ? setContact(JSON.parse(contact))
        : navigate("/checkout/createContactInfo");

      setIsDeleted(false);
    }
  }, [isDeleted]);

  const handleSelectedData = (data) => {
    setSelectedData(data);
    localStorage.setItem("selectedContact", JSON.stringify(data));
  };

  return (
    <div className="py-[100px] px-2 bg-global-color-4">
      <div className="w-full flex justify-center mb-[70px]">
        <h1 className="text-3xl text-center">Select Contact Info</h1>
      </div>
      <div className="sm:mx-[50px] mx-2 flex flex-wrap gap-7 justify-center mb-[70px]">
        {contact.map((data, index) => (
          <ContactCards
            select={selectedData.id === data.id}
            handleClick={() => handleSelectedData(data)}
            data={data}
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
        <PopUpConfirmDelete
          data={contact}
          setPopUpDelete={setPopUpDelete}
          setIsDeleted={setIsDeleted}
        />
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
