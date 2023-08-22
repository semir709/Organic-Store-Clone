import React, { useEffect, useState } from "react";
import ButtonGreen from "../components/ButtonGreen";
import { BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import Card from "../components/Card";
import sanityClient from "../client";
import {
  getCategoryNumber,
  getProducts,
  getSideProducts,
  urlFor,
} from "../utils";
import Skeleton from "react-loading-skeleton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const Shop = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [gap, setGap] = useState(2);

  let start = (page - 1) * gap;
  let end = start + gap - 1;

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(getProducts(start, end)),
      sanityClient.fetch(getSideProducts),
      sanityClient.fetch(getCategoryNumber),
    ]).then(([product, side, categoryNum]) =>
      setData({ productData: product, side: side[0], categoryNum: categoryNum })
    );
  }, [start, end]);

  // useEffect(() => {
  //   setPaginationLength(() => {
  //     let res;
  //     let array;

  //     if (data?.productData.amount) {
  //       res = data?.productData.amount / gap;
  //       array = new Array(res).fill(null);
  //       return array;
  //     }

  //     return;
  //   });
  // }, [data, gap]);

  console.log(data);

  return (
    <div className="bg-global-color-4 py-[60px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex mx-5 md:flex-row flex-col">
          <div className="md:border-e-[1px] border-gray-400 md:pe-[50px] md:order-none  order-2 md:m-0 mt-[70px]">
            <div className="w-full ">
              <form action="" className="mb-[30px] flex w-full">
                <input
                  type="text"
                  className=" me-2 border px-2 py-2 flex-1 w-full"
                  placeholder="Search products..."
                />
                <button className="py-3 px-1 bg-global-color-1 hover:bg-global-color-0 text-white rounded-sm">
                  <IoIosArrowForward />
                </button>
              </form>

              <div className="mb-[30px]">
                <h3 className="text-lg font-semibold">Filter by price</h3>
                <div>Filter</div>
              </div>

              <div className="mb-[30px]">
                <ul>
                  {!data
                    ? [1, 2].map(() => <Skeleton />)
                    : data.categoryNum.map(({ name, count }) => (
                        <li>
                          <a
                            href="/"
                            className="text-global-color-0 hover:text-global-color-1"
                          >
                            {name}({count})
                          </a>
                        </li>
                      ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-1 min-[400px]:grid-cols-2 sm:gap-y-0 gap-6">
                {!data
                  ? [1, 2, 3].map(() => (
                      <Skeleton className="w-full py-[80px] my-3" />
                    ))
                  : data.side.products.map(
                      ({
                        title,
                        category,
                        price,
                        image,
                        slug,
                        currency,
                        setPrevious,
                        previusPrice,
                        sale,
                      }) => (
                        <div className="mb-4">
                          <Card
                            key={slug}
                            title={title}
                            category={category}
                            price={price}
                            img={urlFor(image).url()}
                            slug={slug}
                            currency={currency}
                            setPrevious={setPrevious}
                            previusPrice={previusPrice}
                            sale={sale}
                            onSide={true}
                          />
                        </div>
                      )
                    )}
              </div>
            </div>
          </div>
          <div className="md:ms-[80px] w-full md:order-none  order-1">
            <main className="h-full flex flex-col justify-between">
              <div>
                <nav className="opacity-70 mb-[30px]">
                  <a href="/">Home</a> / Shop
                </nav>

                <header className="mb-[50px]">
                  <h1 className="text-5xl font-semibold text-global-color-0">
                    Shop
                  </h1>
                </header>

                <div className="flex justify-between sm:items-center w-full mb-[50px] sm:flex-row flex-col items-start">
                  {!data ? (
                    <Skeleton className="py-2 px-[100px]" />
                  ) : (
                    <p className="sm:m-0 mb-[20px]">
                      Showing {start + 1} - {end + 1} of{" "}
                      {data.productData.amount} results
                    </p>
                  )}
                  <form action="">
                    <select name="orderby" id="orderby">
                      <option value="menu_order" selecteds="selected">
                        Default order
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>

                <div className="grid lg:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-6">
                  {!data
                    ? [1, 2, 3, 4, 5, 6].map(() => (
                        <Skeleton className="w-full py-[100px]" />
                      ))
                    : data.productData.product.map(
                        ({
                          title,
                          category,
                          price,
                          image,
                          slug,
                          currency,
                          setPrevious,
                          previusPrice,
                          sale,
                        }) => (
                          <Card
                            key={slug}
                            title={title}
                            category={category}
                            price={price}
                            img={urlFor(image).url()}
                            slug={slug}
                            currency={currency}
                            setPrevious={setPrevious}
                            previusPrice={previusPrice}
                            sale={sale}
                          />
                        )
                      )}
                </div>
              </div>
              <div>
                <Pagination totalPages={gap} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

{
  /* <div className="mx-2 h-full">
                  <button className="border border-global-color-0 px-4 h-full  text-global-color-0 hover:bg-global-color-0 hover:text-white">
                    <BsArrowRight />
                  </button>
                </div> */
}
