import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, DropFilter, NavTrack } from "../components/index";
import { getRangeProducts } from "../utils";
import sanityClient from "../client";
import StatsItems from "../components/StatsItems";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "../components/index";

import { InfoMessage } from "../components/index";

const RangePage = () => {
  const [products, setProducts] = useState(null);
  const [amount, setAmount] = useState(null);
  const perPage = 6;
  const [productsLoading, setProductsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState({ time: true, sort: 0 });
  const [isEmpty, setIsEmpty] = useState(false);

  const { rangeMin, rangeMax, page = 1 } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        getRangeProducts(
          rangeMin,
          rangeMax,
          page,
          perPage,
          filterValue.time,
          filterValue.sort
        )
      )
      .then(({ products, amount }) => {
        setProducts(products);
        setAmount(amount);
        setIsEmpty(amount === 0 ? true : false);
        setProductsLoading(false);
      });
  }, [rangeMin, rangeMax, page, filterValue]);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div className="mb-[30px]">
          <NavTrack />
        </div>

        <header className="mb-[50px]">
          <h1 className="text-5xl font-semibold text-global-color-0">Range</h1>
        </header>

        {isEmpty ? (
          <InfoMessage
            text={"No products were found matching your selection."}
          />
        ) : (
          <div className="flex justify-between sm:items-center w-full mb-[50px] sm:flex-row flex-col items-start">
            <StatsItems amount={amount} perPage={perPage} page={page} />
            <DropFilter setValue={setFilterValue} />
          </div>
        )}

        <div className="grid lg:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-6">
          {productsLoading
            ? [1, 2, 3, 4, 5, 6].map((el, index) => (
                <Skeleton key={index} className="w-full py-[100px]" />
              ))
            : products.map((data) => <Card data={data} />)}
        </div>
      </div>
      <div>
        {productsLoading ? (
          <Skeleton />
        ) : (
          <div>
            <Pagination
              totalAmount={amount}
              perPage={perPage}
              url={`shop/range/${rangeMin}/${rangeMax}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RangePage;
