import React, { useEffect, useState } from "react";
import { Card, NavTrack, Pagination } from "../components/index";
import Skeleton from "react-loading-skeleton";
import sanityClient from "../client";
import { getAllProducts } from "../utils";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  const [amount, setAmount] = useState(null);
  const [perPage, setPerPage] = useState(null);
  const [productsLoading, setProductsLoading] = useState(true);

  // const { page = 1 } = useParams();

  // console.log(page);

  useEffect(() => {
    sanityClient
      .fetch(getAllProducts())
      .then(({ products, amount, perPage }) => {
        setProducts(products);
        setAmount(amount);
        setPerPage(perPage.pageNum);
        setProductsLoading(false);
      });
  }, []);
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
          {/* <StatsItems amount={amount} start={start} end={end} /> */}
          {/* <DropFilter setValue={setFilterValue} /> */}
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
          <Pagination totalAmount={amount} perPage={perPage} url={"shop/all"} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
