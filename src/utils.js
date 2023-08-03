import { FaTruckMoving, FaMoneyBillAlt, FaRecycle } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import loremLogo from "./img/loremLogo.svg";

import sanityClient from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getHomePage = `*[_type == 'home'] {
  mainSection,
  categorySection {
    category[] {
      'title': titleCategory,
    'text': textCategory,
    'image': imageCategory
    }
  } ,
  trendingProducts {
    products[]->{
    category[] -> {'name':category, 'slug':slug.current},
    image,
    'slug':slug.current,
    price,
    title
  },
  },
  bestSellingProducts {
  products[]->{
    category[] -> {'name':category, 'slug':slug.current},
    image,
    'slug':slug.current,
    price,
    title
  }
  } ,
  custumerReviews{
    imageReviewsSection,
    reviewsList[]->{
      name,
      text,
      image
    }
  }
}`;
export const getRelatedProducts = (categories) => {
  const data = `{
    'relatedProducts': *[_type == 'product' && references(*[_type=="category" && slug.current in ['${categories
      .map(({ slug }) => slug)
      .join("','")}']]._id)] {
      title,
      image,
      price,
      'slug': slug.current,
      category[]->{
        name,
        'slug': slug.current
      }
    }[0..3] ,
    'description': *[_type == 'category' && slug.current in ['${categories
      .map(({ slug }) => slug)
      .join("','")}']] {description}
  }`;

  return data;
};

export const getCategoryDesc = (categories) => {
  const data = `*[_type == 'category' && slug.current in ['${categories
    .map(({ slug }) => slug)
    .join("','")}']] {
    description
  }`;

  return data;
};

export const getProduct = ({ slug }) => {
  const data = `*[_type == 'product' && slug.current == '${slug}'] {
    title,
    image,
    price,
    'slug': slug.current,
    category[]->{
      name,
      'slug': slug.current
    },
    description,
    shipping,
    previusPrice
  }`;

  return data;
};

export const getContact = `*[_type == 'contact'] {
  'questions': questions.questionBlock[] {answer, question},
  'contact': contactInfo
}`;

export const navData = {
  mainNav: [
    { text: "Everything", url: "/shop" },
    { text: "Groceries", url: "/shop/groceries" },
    { text: "Juice", url: "/shop/juice" },
  ],
  infoNav: [
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ],
  allNav: [
    { text: "Everything", url: "/shop" },
    { text: "Groceries", url: "/shop/groceries" },
    { text: "Juice", url: "/shop/juice" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
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
    url: "/about",
  },
  {
    text: "Cart",
    url: "/cart",
  },
  {
    text: "Checkout",
    url: "/checkout",
  },
  {
    text: "Contact",
    url: "/contact",
  },
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Shop",
    url: "/shop",
  },
];

export const quickLinks2 = [
  {
    text: "Know More About Us",
    url: "/",
  },
  {
    text: "Visit Store",
    url: "/store",
  },
  {
    text: "Let’s Connect",
    url: "/contact",
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

export const dataProducts = [
  {
    title: "Assorted Coffee",
    price: "35.00",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
    category: "Groceries",
    slug: "assorted-coffee",
  },
  {
    title: "Assorted Coffee",
    price: "35.00",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
    category: "Groceries",
    slug: "assorted-coffee",
  },
  {
    title: "Assorted Coffee",
    price: "35.00",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
    category: "Groceries",
    slug: "assorted-coffee",
  },
  {
    title: "Assorted Coffee",
    price: "35.00",
    img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
    category: "Groceries",
    slug: "assorted-coffee",
  },
];
