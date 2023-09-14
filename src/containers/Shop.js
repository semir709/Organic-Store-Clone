import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import Card from "../components/Card";
import sanityClient from "../client";
import {
  getBiggestPrice,
  getCategoryNumber,
  getProducts,
  getSideProducts,
  urlFor,
} from "../utils";
import Skeleton from "react-loading-skeleton";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import CategoryList from "../components/CategoryList";
import NavTrack from "../components/NavTrack";
import StatsItems from "../components/StatsItems";
import DropFilter from "../components/DropFilter";
import MultiRangeSlider from "../components/MultiRangeFilter/MultiRangeFilter";

const Shop = () => {
  const [data, setData] = useState(null);
  const { category = "all", current = 1 } = useParams();

  console.log(category, current);
  // const current = 1;
  const perPage = 2;
  const [start, setStart] = useState((current - 1) * perPage);
  const [end, setEnd] = useState(start + perPage - 1);

  const [isLoading, setIsLoading] = useState(true);

  const url = useLocation() || "all";

  useEffect(() => {
    setIsLoading(true);

    const newStart = (current - 1) * perPage;
    const newEnd = newStart + perPage - 1;

    setStart(newStart);
    setEnd(newEnd);

    Promise.all([
      sanityClient.fetch(
        getProducts(newStart, newEnd, url.pathname.split("/")[2])
      ),
      sanityClient.fetch(getSideProducts),
      sanityClient.fetch(getCategoryNumber),
      sanityClient.fetch(getBiggestPrice),
    ]).then(([product, side, categoryNum, biggestPrice]) => {
      setData((prev) => {
        return {
          productData: product,
          side: side[0],
          categoryNum: categoryNum,
          biggestPrice: biggestPrice,
        };
      });
      setIsLoading(false);
    });
  }, [current, url]);

  let { productData, side, categoryNum, biggestPrice } = data || {};
  const { products: sideProducts } = side || {};
  const { amount, product } = productData || {};
  const { currency } = (sideProducts && sideProducts[0]) || {};
  const { price } = (biggestPrice && biggestPrice) || { price: undefined };

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
                {!price ? (
                  <Skeleton />
                ) : (
                  <MultiRangeSlider
                    min={0}
                    max={Math.ceil(Number(price))}
                    currency={currency}
                    setData={setData}
                    startIndex={start}
                    endIndex={end}
                    category={url.pathname.split("/")[2]}
                  />
                )}
              </div>

              <div className="mb-[30px]">
                <CategoryList data={categoryNum} />
              </div>

              <div className="grid md:grid-cols-1 min-[400px]:grid-cols-2 sm:gap-y-0 gap-6">
                {isLoading
                  ? [1, 2, 3].map((el, index) => (
                      <Skeleton key={index} className="w-full py-[80px] my-3" />
                    ))
                  : sideProducts.map(
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
                        <div className="mb-4" key={slug}>
                          <Card
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
                <div className="mb-[30px]">{/* <NavTrack /> */}</div>

                <header className="mb-[50px]">
                  <h1 className="text-5xl font-semibold text-global-color-0">
                    Shop
                  </h1>
                </header>

                <div className="flex justify-between sm:items-center w-full mb-[50px] sm:flex-row flex-col items-start">
                  <StatsItems amount={amount} start={start} end={end} />
                  <DropFilter />
                </div>

                <div className="grid lg:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-6">
                  {isLoading
                    ? [1, 2, 3, 4, 5, 6].map((el, index) => (
                        <Skeleton key={index} className="w-full py-[100px]" />
                      ))
                    : product.map(
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
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <Pagination
                    totalAmount={amount}
                    perPage={perPage}
                    url={url.pathname.split("/")[2]}
                  />
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
