import { FcInfo } from "react-icons/fc";
import { CgDanger } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";

const InfoMessage = ({ text = "", mode = "info" }) => {
  let style = "";
  let icon = "";
  if (mode === "info") {
    style = "bg-blue-200 text-gray-800";
    icon = <FcInfo size={24} />;
  } else if (mode === "danger") {
    style = "bg-red-200 text-gray-800";
    icon = <CgDanger size={24} />;
  } else if (mode === "accept") {
    style = "bg-green-200 text-gray-800";
    icon = <GiConfirmed size={24} />;
  }
  return (
    <div className={`py-2 px-5 rounded-md flex items-center ${style} `}>
      <span className="me-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default InfoMessage;
