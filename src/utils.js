import { HiShoppingCart } from "react-icons/hi";
import { FaTruckMoving, FaMoneyBillAlt, FaRecycle } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

export const navData = {
  mainNav: [
    { text: "Everything", url: "/" },
    { text: "Groceries", url: "/" },
    { text: "Juice", url: "/" },
  ],
  infoNav: [
    { text: "About", url: "/" },
    { text: "Contact", url: "/" },
  ],
  allNav: [
    { text: "Everything", url: "/" },
    { text: "Groceries", url: "/" },
    { text: "Juice", url: "/" },
    { text: "About", url: "/" },
    { text: "Contact", url: "/" },
  ],
};

export const serviceCardList = [
  {
    title: "Free Shipping",
    text: "Above $5 Only",
    icon: <FaTruckMoving fontSize={30} />,
  },
  {
    title: "Free Shipping",
    text: "Above $5 Only",
    icon: <BiSolidContact fontSize={30} />,
  },
  {
    title: "Free Shipping",
    text: "Above $5 Only",
    icon: <FaMoneyBillAlt fontSize={30} />,
  },
  {
    title: "Free Shipping",
    text: "Above $5 Only",
    icon: <FaRecycle fontSize={30} />,
  },
];
