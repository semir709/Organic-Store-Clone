import React, { useEffect, useState } from "react";
import { Card, NavTrack } from "../components";
import Skeleton from "react-loading-skeleton";
import { getSearchProducts } from "../utils";
import { useParams } from "react-router-dom";
import sanityClient from "../client";

const SearchPage = () => {
  const [products, setProducts] = useState(null);
  const [productsLoading, setProductsLoading] = useState(true);

  const { searchTerm } = useParams();

  useEffect(() => {
    sanityClient.fetch(getSearchProducts(searchTerm)).then((data) => {
      setProducts(data);
      setProductsLoading(false);
    });
  }, [searchTerm]);
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div className="mb-[30px]">
          <NavTrack />
        </div>

        <header className="mb-[50px]">
          <h1 className="text-5xl font-semibold text-global-color-0">Search</h1>
        </header>

        <div className="grid lg:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-6">
          {productsLoading
            ? [1, 2, 3, 4, 5, 6].map((el, index) => (
                <Skeleton key={index} className="w-full py-[100px]" />
              ))
            : products.map((data) => <Card data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
