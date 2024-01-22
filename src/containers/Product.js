import React, { useEffect, useState } from "react";
import ButtonGreen from "../components/ButtonGreen";
import Card from "../components/Card";
import sanityClient from "../client";
import { getProduct, getRelatedProducts, urlFor } from "../utils";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { InfoReview } from "../components/index";

const Product = () => {
  // const [section, setSection] = useState(0);
  const slug = useParams();
  const [dataReletedProducts, setDataReletedProducts] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setDataReletedProducts(null);
    setProduct(null);

    const fetchProductData = async () => {
      try {
        const mainProduct = await sanityClient.fetch(getProduct(slug));

        if (!mainProduct) return null;

        const reletedProduct = await sanityClient.fetch(
          getRelatedProducts(mainProduct[0].category)
        );

        setProduct(mainProduct[0]);
        setDataReletedProducts(reletedProduct);
      } catch (err) {}
    };

    fetchProductData();
  }, [slug]);

  return (
    <div className="py-[40px] bg-global-color-4">
      <div className="max-w-[1200px] mx-auto">
        <main className="mx-4">
          <div className="flex lg:flex-row flex-col gap-10 ">
            {/* Image */}
            <div className="lg:w-1/2">
              {!product?.image ? (
                <Skeleton className="h-full w-full" />
              ) : (
                <img
                  src={urlFor(product?.image)}
                  alt={product?.image.caption}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Info product */}
            <div className="flex-1">
              <h1 className="text-3xl font-semibold mb-5">
                {product?.title || <Skeleton />}
              </h1>
              <div className="mb-3">
                {!product ? (
                  <Skeleton className="py-2" />
                ) : (
                  <div className="flex items-center mb-1">
                    <p className="font-semibold text-2xl">{product?.price}</p>
                    <span className="text-md">
                      +{" "}
                      {product?.shipping === 0
                        ? "Free shipping"
                        : product?.shipping}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-global-color-2">
                {product?.description || <Skeleton className="py-[40px]" />}
              </p>
              {!product ? (
                <Skeleton className="py-3 my-2" />
              ) : (
                <div>
                  <form
                    action=""
                    className="flex items-center py-5 border-b-gray-300 border-b-[1px] mb-3"
                  >
                    <input
                      type="number"
                      value={1}
                      min={1}
                      size={4}
                      inputMode="numeric"
                      className="p-2 me-4 text-center"
                    />
                    <button className="uppercase px-[80px] py-2 bg-global-color-1 hover:bg-global-color-0 text-white font-semibold rounded-md">
                      Add to chart
                    </button>
                  </form>
                </div>
              )}
              <div>
                {!product ? (
                  <Skeleton className="py-1" />
                ) : (
                  <span>
                    Categories:{" "}
                    {product.category.map(({ slug, name }) => (
                      <Link
                        key={slug}
                        to={`/shop/category/${slug}`}
                        className="text-global-color-0 hover:text-global-color-1 me-2"
                      >
                        {name}
                      </Link>
                    ))}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Info product component  */}
          <InfoReview />
        </main>

        {/* Releted products commpoent */}
        {/* <section className="mt-5 mx-4">
          <h2 className="text-4xl font-semibold mb-5">Related Products</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            {!dataReletedProducts
              ? [1, 2, 3, 4].map(() => <Skeleton className="py-[100px]" />)
              : dataReletedProducts?.relatedProducts.map((data) => (
                  <Card data={data} />
                ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Product;
