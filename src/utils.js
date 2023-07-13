import { HiShoppingCart } from "react-icons/hi";
import { FaTruckMoving, FaMoneyBillAlt, FaRecycle } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

import loremLogo from "./img/loremLogo.svg";

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

export const sponsorList = [
  {
    svg: loremLogo,
  },
  {
    svg: loremLogo,
  },
  {
    svg: loremLogo,
  },
  {
    svg: loremLogo,
  },
];

export const siteLinksfooter = [
  {
    text: "Privacy Policy",
    url: "/",
  },
  {
    text: "Shipping Details",
    url: "/",
  },
  {
    text: "Offers Coupons",
    url: "/",
  },
  {
    text: "Terms & Conditions",
    url: "/",
  },
];

export const quickLinks = [
  {
    text: "About",
    url: "/",
  },
  {
    text: "Cart",
    url: "/",
  },
  {
    text: "Checkout",
    url: "/",
  },
  {
    text: "Contact",
    url: "/",
  },
  {
    text: "Home",
    url: "/",
  },
  {
    text: "My account",
    url: "/",
  },
  {
    text: "Shop",
    url: "/",
  },
];

export const quickLinks2 = [
  {
    text: "Know More About Us",
    url: "/",
  },
  {
    text: "Visit Store",
    url: "/",
  },
  {
    text: "Let’s Connect",
    url: "/",
  },
  {
    text: "Locate Stores",
    url: "/",
  },
];

export const checkListData = [
  { text: "Fresh fruits" },
  { text: "Dry fruits" },
  { text: "Fresh vegetables" },
  { text: "Dried vegetables" },
  { text: "Dried vegetables" },
];

export const checkListData2 = [
  { text: "Beauty products" },
  { text: "Milk products" },
  { text: "Organic honey" },
  { text: "Organic tea" },
];
