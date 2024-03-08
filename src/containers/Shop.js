import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import sanityClient from "../client";
import { getCategoryNumber, getSideProducts } from "../utils";
import Skeleton from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import SearchInput from "../components/SearchInput";
import { MultiRangeSlider } from "../components/index";
import { RangePage, ProductsPage, CategoriesPage, SearchPage } from "./index";

const Shop = () => {
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
                <Route
                  path="/range/:rangeMin/:rangeMax/:page"
                  element={<RangePage />}
                />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
