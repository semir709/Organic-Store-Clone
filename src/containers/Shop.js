import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import Card from "../components/Card";
import sanityClient from "../client";
import {
  convertFilterToRequest,
  getBiggestPrice,
  getCategoryNumber,
  getProducts,
  getSideProducts,
  urlFor,
} from "../utils";
import Skeleton from "react-loading-skeleton";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import NavTrack from "../components/NavTrack";
import StatsItems from "../components/StatsItems";
import DropFilter from "../components/DropFilter";
// import MultiRangeSlider from "../components/MultiRangeFilter/MultiRangeFilter";

import SearchInput from "../components/SearchInput";
import Products from "./ProductsPage";
import Search from "./SearchPage";
import Categories from "./CategoriesPage";

import { MultiRangeSlider } from "../components/index";

import { RangePage, ProductsPage, CategoriesPage, SearchPage } from "./index";

const Shop = () => {
  // const [data, setData] = useState(null);
  // const { category = "all", current = 1 } = useParams();

  // const perPage = 2;
  // const [start, setStart] = useState((current - 1) * perPage);
  // const [end, setEnd] = useState(start + perPage - 1);
  // const [isLoading, setIsLoading] = useState(true);
  // const url = useLocation() || "all";

  // const [range, setRange] = useState({ start: 0, end: 0 });

  // const [filterValue, setFilterValue] = useState("");
  // const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);

  //   const newStart = (current - 1) * perPage;
  //   const newEnd = newStart + perPage - 1;

  //   setStart(newStart);
  //   setEnd(newEnd);

  //   const { time, sort } = convertFilterToRequest(filterValue);

  //   Promise.all([
  //     sanityClient.fetch(
  //       getProducts(
  //         newStart,
  //         newEnd,
  //         url.pathname.split("/")[2],
  //         range.start,
  //         range.end,
  //         time,
  //         sort,
  //         searchInput
  //       )
  //     ),
  //     sanityClient.fetch(getSideProducts),
  //     sanityClient.fetch(getCategoryNumber),
  //     sanityClient.fetch(getBiggestPrice),
  //   ]).then(([product, side, categoryNum, biggestPrice]) => {
  //     setData((prev) => {
  //       return {
  //         productData: product,
  //         side: side[0],
  //         categoryNum: categoryNum,
  //         biggestPrice: biggestPrice,
  //       };
  //     });
  //     setIsLoading(false);
  //   });
  // }, [current, url, range, filterValue, searchInput]);

  // let { productData, side, categoryNum, biggestPrice } = data || {};
  // const { products: sideProducts } = side || {};
  // const { amount, product } = productData || {};
  // const { currency } = (sideProducts && sideProducts[0]) || {};
  // const { price } = (biggestPrice && biggestPrice) || { price: undefined };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const [sideData, setSideData] = useState(null);
  const [catgeoryCount, setCatgeoryCount] = useState(null);
  const [sideLoading, setSideLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(getCategoryNumber),
      sanityClient.fetch(getSideProducts),
    ]).then(([catgeoryCount, sideData]) => {
      setSideData(sideData.products);
      setCatgeoryCount(catgeoryCount);
      setSideLoading(false);
    });
  }, []);

  return (
    <div className="bg-global-color-4 py-[60px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex mx-5 md:flex-row flex-col">
          <div className="md:border-e-[1px] border-gray-400 md:pe-[50px] md:order-none  order-2 md:m-0 mt-[70px]">
            <div className="w-full ">
              <SearchInput />
              <div className="mb-[30px]">
                <MultiRangeSlider />
              </div>
              <div className="mb-[30px]">
                <CategoryList data={catgeoryCount} />
              </div>
              <div className="grid md:grid-cols-1 min-[400px]:grid-cols-2 sm:gap-y-0 gap-6">
                {sideLoading
                  ? [1, 2, 3].map((el, index) => (
                      <Skeleton key={index} className="w-full py-[80px] my-3" />
                    ))
                  : sideData.map((data) => (
                      <div className="mb-4" key={data.slug}>
                        <Card data={data} onSide={true} />
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="md:ms-[80px] w-full md:order-none  order-1">
            <main className="h-full flex flex-col justify-between">
              <Routes>
                <Route path="/products/:page?" element={<ProductsPage />} />
                <Route path="/search/:searchTerm" element={<SearchPage />} />

                <Route
                  path="/category/:category?/:page?"
                  element={<CategoriesPage />}
                />
                <Route path="/range/:rangeTearm" element={<RangePage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
