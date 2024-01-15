import React, { useEffect, useState } from "react";
import { Card, DropFilter, NavTrack, Pagination } from "../components/index";
import Skeleton from "react-loading-skeleton";
import sanityClient from "../client";
import { getCategoryProducts } from "../utils";
import { useParams } from "react-router-dom";
import StatsItems from "../components/StatsItems";

const CategoriesPage = () => {
  const [products, setProducts] = useState(null);
  const [amount, setAmount] = useState(null);
  const perPage = 2;
  const [productsLoading, setProductsLoading] = useState(true);
  const [filterValue, setFilterValue] = useState({ time: true, sort: 0 });

  const { page = 1, category } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        getCategoryProducts(
          category,
          page,
          perPage,
          filterValue.time,
          filterValue.sort
        )
      )
      .then(({ products, amount }) => {
        setProducts(products);
        setAmount(amount);
        setProductsLoading(false);
      });
  }, [page, filterValue, category]);
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div className="mb-[30px]">
          <NavTrack />
        </div>

        <header className="mb-[50px]">
          <h1 className="text-5xl font-semibold text-global-color-0">Shop</h1>
        </header>

        <div className="flex justify-between sm:items-center w-full mb-[50px] sm:flex-row flex-col items-start">
          <StatsItems amount={amount} perPage={perPage} page={page} />
          <DropFilter setValue={setFilterValue} />
        </div>

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
          <Pagination
            totalAmount={amount}
            perPage={perPage}
            url={`shop/category/${category}`}
          />
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
