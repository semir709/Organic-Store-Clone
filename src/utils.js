import { FaTruckMoving, FaMoneyBillAlt, FaRecycle } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import loremLogo from "./img/loremLogo.svg";

import sanityClient from "./client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useRef } from "react";

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

export const getAbout = `*[_type == 'about'] {
  sectionInfo,
  sectionNumber,
  sectionMoreinfo {
    rewiew -> {
      name, 
      text,
      image
    },
    slideImages,
    list
  }
}`;

export const getSideProducts = `*[_type == 'sideProducts'][0]{
  products [] -> {
    image,
    title,
    price,
    category[] -> {
      name,
      'slug':slug.current
    },
    sale,
    'slug': slug.current,
    currency,
    setPrevious,
    previusPrice
  }
}`;

export const getCategoryNumber = `*[_type == "category"] {
  name,
  'slug':slug.current,
  "count": count(*[_type == "product" && references(^._id)])
} | order(count desc)`;

export const getBiggestPrice = `*[_type == 'product'] | order(price desc) {price}[0]`;

export const getAllProducts = () => {
  const query = `{
    'products': *[_type == 'product']{
        image,
        title,
        price,
        category[] -> {
          name,
          'slug':slug.current
        },
        sale,
        'slug': slug.current,
        currency,
        setPrevious,
        previusPrice
      }[0..1],
    'amount': count(*[_type == 'product']),
    'perPage': *[_type == 'ItemsConfig'][0] {
      'pageNum': itemsPerPage
    }
  }`;
  return query;
};

// export const getProducts = (
//   startIndex,
//   endIndex,
//   category = "all",
//   startPrice = 0,
//   endPrice = 1000,
//   time = true,
//   sort = 0,
//   searchInput = ""
// ) => {
//   const data = `{
//     'product': *[_type == 'product' && price > ${startPrice} && price < ${endPrice} ${
//     category !== "all"
//       ? `&& references(*[_type == "category" && slug.current == '${category}']._id)`
//       : ""
//   } && title match '${searchInput}*'] | order(${
//     time ? "_createdAt" : "price"
//   } ${sort === 0 ? "desc" : "asc"}) [${startIndex}..${endIndex}] {
//       image,
//       title,
//       price,
//       category[] -> {
//         name,
//         'slug':slug.current
//       },
//       sale,
//       'slug': slug.current,
//       currency,
//       setPrevious,
//       previusPrice
//     },
//     'amount': count(*[_type == 'product' && price > ${startPrice} && price < ${endPrice}${
//     category !== "all"
//       ? `&& references(*[_type == "category" && slug.current == '${category}']._id)`
//       : ""
//   }]),
//     'itemsConfig': *[_type == "ItemsConfig"] {
//       itemsPerPage
//     }
//   }`;

//   return data;
// };

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const navData = {
  mainNav: [
    { text: "Everything", url: "/shop/all" },
    { text: "Groceries", url: "/shop/grocies" },
    { text: "Juice", url: "/shop/juice" },
  ],
  infoNav: [
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ],
  allNav: [
    { text: "Everything", url: "/shop/all" },
    { text: "Groceries", url: "/shop/grocies" },
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

export const convertFilterToRequest = (filterValue) => {
  const obj = {
    time: true,
    sort: 0,
  };

  if (filterValue === "latest") {
    obj.time = true;
    obj.sort = 0;
  } else if (filterValue === "oldest") {
    obj.time = true;
    obj.sort = 1;
  } else if (filterValue === "lowToHigh") {
    obj.time = false;
    obj.sort = 1;
  } else if (filterValue === "highToLow") {
    obj.time = false;
    obj.sort = 0;
  } else {
    obj.time = true;
    obj.sort = 0;
  }

  return obj;
};
