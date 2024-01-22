import React from "react";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";

const ReletedProductComponents = () => {
  return (
    <section className="mt-5 mx-4">
      <h2 className="text-4xl font-semibold mb-5">Related Products</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {/* {!dataReletedProducts
          ? [1, 2, 3, 4].map(() => <Skeleton className="py-[100px]" />)
          : dataReletedProducts?.relatedProducts.map((data) => (
              <Card data={data} />
            ))} */}
      </div>
    </section>
  );
};

export default ReletedProductComponents;
