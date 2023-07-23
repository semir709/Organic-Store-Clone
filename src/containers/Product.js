import React, { useState } from "react";
import ButtonGreen from "../components/ButtonGreen";
import Card from "../components/Card";

const Product = () => {
  const [section, setSection] = useState(0);
  return (
    <div className="py-[40px] bg-global-color-4">
      <div className="max-w-[1200px] mx-auto">
        <main className="mx-4">
          <div className="flex lg:flex-row flex-col gap-10 ">
            <div className="lg:w-1/2">
              <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-semibold mb-5">
                Natural Extracted Edible Oil
              </h1>
              <div className="flex items-center mb-1">
                <p className="font-semibold text-2xl">£25.00</p>
                <span className="text-md">+ Free Shipping</span>
              </div>
              <p className="text-global-color-2">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non incidunt lores ta porro
                ame. numquam eius modi tempora incidunt lores ta porro ame.
              </p>
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
                <a
                  href="/"
                  className="text-global-color-0 hover:text-global-color-1"
                >
                  Groceries
                </a>
                ,{" "}
                <a
                  href="/"
                  className="text-global-color-0 hover:text-global-color-1"
                >
                  Juice
                </a>
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
                <a className="font-semibold text-global-color-3">Description</a>
              </li>
              <li
                onClick={() => setSection(1)}
                className={`me-3 border-t-[4px] ${
                  section === 1 ? "border-global-color-0" : "border-transparent"
                }`}
              >
                <a className="font-semibold text-global-color-3">
                  Reviews (0){" "}
                </a>
              </li>
            </ul>

            <div className="my-5">
              {section === 0 && (
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti molestias tempora aperiam a alias perspiciatis
                    vitae officiis eius laborum cumque.
                  </p>
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
            {[1, 2, 3, 4].map(() => (
              <Card />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
