import React, { useEffect, useState } from "react";
import { getHomePage, serviceCardList } from "../utils";
import ProductSection from "../components/ProductSection";
import LeafCenter from "../components/LeafCenter";
import sanityClient from "../client";

import {
  CategorySection,
  DiscountSection,
  FeaturedBrandsSection,
  MainSection,
  ReviewsSection,
  ServiceCardSection,
} from "../sections/index";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    sanityClient.fetch(getHomePage).then((data) => setData(data[0]));
  }, []);

  const {
    bestSellingProducts,
    trendingProducts,
    mainSection,
    categorySection,
    custumerReviews,
  } = data || {};

  return (
    <main>
      <div>
        <MainSection data={mainSection} />
        <ServiceCardSection data={serviceCardList} />
        <ProductSection
          title={"Best Selling Products"}
          products={bestSellingProducts?.products}
        />
        <LeafCenter />
        <CategorySection data={categorySection} />
        <DiscountSection />
        <ProductSection
          title={"Trending Products"}
          products={trendingProducts?.products}
        />
        <ReviewsSection data={custumerReviews} />
        <FeaturedBrandsSection />
      </div>
    </main>
  );
};

export default Home;
