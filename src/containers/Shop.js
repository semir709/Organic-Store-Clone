import React, { Suspense, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import CategoryList from "../components/CategoryList";
import NavTrack from "../components/NavTrack";
import StatsItems from "../components/StatsItems";
import DropFilter from "../components/DropFilter";

const Shop = () => {
  const [data, setData] = useState(null);
  const { current } = useParams();
  const [page, setPage] = useState(current);
  const [perPage, setPerPage] = useState(2);
  const [paginationLength, setPaginationLength] = useState(0);

  const [start, setStart] = useState((page - 1) * perPage);
  const [end, setEnd] = useState(start + perPage - 1);

  useEffect(() => {
    setPage(current);
  }, [current]);

  useEffect(() => {
    setStart((page - 1) * perPage);
    setEnd(start + perPage - 1);
  }, [perPage, page, start]);

  useEffect(() => {
    setData(null);
    Promise.all([
      sanityClient.fetch(getProducts(start, end)),
      sanityClient.fetch(getSideProducts),
      sanityClient.fetch(getCategoryNumber),
    ]).then(([product, side, categoryNum]) =>
      setData({ productData: product, side: side[0], categoryNum: categoryNum })
    );
  }, [start, end]);

  useEffect(() => {
    if (data) {
      setPerPage(data.productData.itemsConfig[0].itemsPerPage);
      setPaginationLength(data?.productData.amount / perPage);
    }
  }, [data, perPage]);

  const { productData, side, categoryNum } = data || {};
  const { products: sideProducts } = side || {};
  const { amount, product } = productData || {};

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
                <Filter />
              </div>

              <div className="mb-[30px]">
                <CategoryList data={categoryNum} />
              </div>

              <div className="grid md:grid-cols-1 min-[400px]:grid-cols-2 sm:gap-y-0 gap-6">
                {!sideProducts
                  ? [1, 2, 3].map(() => (
                      <Skeleton className="w-full py-[80px] my-3" />
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
                <div className="mb-[30px]">
                  <NavTrack />
                </div>

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
                  {!product
                    ? [1, 2, 3, 4, 5, 6].map(() => (
                        <Skeleton className="w-full py-[100px]" />
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
                <Pagination totalPages={paginationLength} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
