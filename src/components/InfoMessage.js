import { FcInfo } from "react-icons/fc";

const InfoMessage = ({ text }) => {
  return (
    <div className="bg-blue-200 px-5 py-2 text-gray-800 rounded-md flex items-center">
      <FcInfo size={24} className="me-5" />
      <span>{text}</span>
    </div>
  );
};

export default InfoMessage;
