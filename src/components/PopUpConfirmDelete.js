import { ContactCards } from "../components/index";
import { IoCloseCircle } from "react-icons/io5";

const PopUpConfirmDelete = ({ data, setPopUpDelete }) => {
  const handleClose = () => {
    setPopUpDelete(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="bg-black min-w-full min-h-full fixed top-0 left-0 opacity-50 z-10"></div>
      <div className="bg-white py-5 ps-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg w-[80%] max-w-[80%] h-[80%] max-h-[80%] overflow-hidden">
        <div className="px-5 py-2">
          <IoCloseCircle
            size={35}
            color="#cb1307"
            className="hover:cursor-pointer"
            onClick={handleClose}
          />
        </div>
        {/* <div className="w-full flex flex-col items-center mb-5">
          <h2 className="text-2xl font-bold">Please confirm</h2>
          <div>
            <span>Items will be send to these address</span>
          </div>
        </div> */}
        <div className="mb-5 flex w-fit gap-6 items-center flex-wrap  overflow-y-auto h-full ">
          {[1, 2, 3, 4, 5, 6, 4, 5, 6].map((data, index) => (
            // <ContactCards data={data} notInteractive={false} />
            <div className="bg-red-300 w-[250px] h-[250px]">asd</div>
          ))}
        </div>
        <div className="bg-white w-full p-5 absolute bottom-0 right-0 border-t-2 flex justify-end ">
          asd
        </div>
        {/* <div className="w-full flex justify-around items-center">
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
        </div> */}
      </div>
    </>
  );
};

export default PopUpConfirmDelete;
