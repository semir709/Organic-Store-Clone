import { useEffect, useState } from "react";
import { ContactCards } from "../components/index";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PopUpConfirmDelete = ({ data, setPopUpDelete, setIsDeleted = false }) => {
  const [selectedId, setSelectedId] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  // const [allData, setAllData] = useState(data);
  // const navigate = useNavigate(null);v

  const handleClose = () => {
    setPopUpDelete(false);
    document.body.style.overflow = "auto";
  };

  const handleSelected = (e) => {
    const id = e.target.closest(".parent-card").getAttribute("data-id");

    if (selectedId.includes(id)) {
      setSelectedId((prev) => prev.filter((el) => el !== id));
    } else {
      setSelectedId((prev) => [...prev, id]);
    }
  };

  const handleDelete = () => {
    const local = JSON.parse(localStorage.getItem("contactInfo"));
    const updatedContact = local.filter(
      (item) => !selectedId.includes(item.id)
    );

    if (updatedContact.length === 0) {
      localStorage.removeItem("contactInfo");
    } else {
      localStorage.setItem("contactInfo", JSON.stringify(updatedContact));
    }

    setIsDeleted(true);

    //reloading solution
    // navigate(0);
  };

  return (
    <>
      <div className="bg-black min-w-full min-h-full fixed top-0 left-0 opacity-50 z-10"></div>
      <div className="flex flex-col bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg w-[80%] max-w-[80%] max-h-[80%] h-[80%] ">
        <div className="px-5 py-2 bg-white flex justify-end border-b-2 ">
          <IoCloseCircle
            size={35}
            color="#cb1307"
            className="hover:cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className=" flex w-full gap-6 flex-wrap  h-full py-5 bg-white overflow-auto justify-center">
          {data.map((data, index) => (
            <div
              onClick={handleSelected}
              className={`border-2  rounded-lg h-fit parent-card ${
                selectedId.includes(data.id) ? "border-red-500" : ""
              }`}
              data-id={data.id}
            >
              <ContactCards data={data} notInteractive={false} />
            </div>
          ))}
        </div>
        <div className="bg-white w-full border-t-2 px-5 py-2 flex items-center justify-end min-h-[60px]">
          {selectedId.length > 0 && (
            <button
              onClick={handleDelete}
              className="ms-3 bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-800"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PopUpConfirmDelete;
