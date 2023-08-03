import React, { useEffect, useState } from "react";
import ButtonGreen from "../components/ButtonGreen";
import Card from "../components/Card";
import sanityClient from "../client";
import { getProduct, getRelatedProducts, urlFor } from "../utils";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [section, setSection] = useState(0);
  const slug = useParams();
  const [dataReletedProducts, setDataReletedProducts] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
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

  if (!product) return <p>Loading...</p>;

  return (
    <div className="py-[40px] bg-global-color-4">
      <div className="max-w-[1200px] mx-auto">
        <main className="mx-4">
          <div className="flex lg:flex-row flex-col gap-10 ">
            <div className="lg:w-1/2">
              <img
                src={urlFor(product.image)}
                alt={product.image.caption}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-semibold mb-5">{product.title}</h1>
              <div className="flex items-center mb-1">
                <p className="font-semibold text-2xl">£{product.price}</p>
                <span className="text-md">
                  +{" "}
                  {product.shipping === 0 ? "Free shipping" : product.shipping}
                </span>
              </div>
              <p className="text-global-color-2">{product.description}</p>
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
              <span>
                Categories:{" "}
                {product.category.map(({ slug, name }) => (
                  <Link
                    key={slug}
                    to={`/shop/${slug}`}
                    className="text-global-color-0 hover:text-global-color-1 me-2"
                  >
                    {name}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <div className="py-[40px]">
            <ul className="border-t-[1px] flex items-center">
              <li
                onClick={() => setSection(0)}
                className={`me-3 border-t-[4px] ${
                  section === 0 ? "border-global-color-0" : "border-transparent"
                }`}
              >
                <Link className="font-semibold text-global-color-3">
                  Description
                </Link>
              </li>
              <li
                onClick={() => setSection(1)}
                className={`me-3 border-t-[4px] ${
                  section === 1 ? "border-global-color-0" : "border-transparent"
                }`}
              >
                <Link className="font-semibold text-global-color-3">
                  Reviews (0){" "}
                </Link>
              </li>
            </ul>

            <div className="my-5">
              {section === 0 && (
                <div>
                  {dataReletedProducts.description.map(({ description }) => (
                    <p className="my-2">{description}</p>
                  ))}
                </div>
              )}

              {section === 1 && (
                <div className="">
                  <p className="mb-5">There are no reviews yet.</p>

                  <div className="border-[2px] p-5">
                    <span className="text-3xl font-medium">
                      Be the first to review “Cashew Butter”{" "}
                    </span>
                    <form action="">
                      <p className="text-base mb-5">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>

                      <div className="flex items-center mb-5">
                        <label htmlFor="" className="text-2xl">
                          Your rating *
                        </label>
                        <div className="ms-4">Stars</div>
                      </div>

                      <div>
                        <label
                          htmlFor="textArea"
                          className="block text-2xl mb-1"
                        >
                          Your review *
                        </label>
                        <textarea
                          id="textArea"
                          name=""
                          cols="30"
                          rows="3"
                          className="w-full mb-5"
                        ></textarea>
                      </div>

                      <div className="flex sm:flex-row flex-col sm:items-center mb-4 gap-6">
                        <div className="flex-1">
                          <label htmlFor="name" className="block mb-2">
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="py-3 me-4 w-full px-5  "
                          />
                        </div>

                        <div className="flex-1">
                          <label htmlFor="email" className="block mb-2">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="text"
                            className="py-3 me-4 w-full px-5"
                          />
                        </div>
                      </div>

                      <div className="flex items-center mb-5">
                        <input
                          id="checkSave"
                          type="checkbox"
                          className="me-3"
                        />
                        <label htmlFor="checkSave" className="">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <ButtonGreen text={"Submit"} />
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <section className="mt-5 mx-4">
          <h2 className="text-4xl font-semibold mb-5">Related Products</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            {/* Load after main load skeleton load */}

            {!dataReletedProducts ? (
              <p className="bg-red-300 w-[20px] h-[20px]">Loading...</p>
            ) : (
              dataReletedProducts.relatedProducts.map(
                ({ title, price, image, slug, category }) => (
                  <Card
                    title={title}
                    price={price}
                    category={category}
                    img={urlFor(image)}
                    slug={slug}
                  />
                )
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
