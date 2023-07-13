import React from "react";
import ButtonGreen from "../components/ButtonGreen";
import { BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import CardSide from "../components/CardSide";
import Card from "../components/Card";

const Shop = () => {
  return (
    <div className="bg-global-color-4 py-[60px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex mx-5 md:flex-row flex-col">
          <div className="md:border-e-[1px] border-gray-400 md:pe-[50px] md:order-none  order-2 md:m-0 mt-[70px]">
            <div className="w-full ">
              <form action="" className="mb-[30px] flex w-full">
                <input
                  type="text"
                  className=" me-2 border px-2 py-2 flex-1 w-full"
                  placeholder="Search products..."
                />
                <button className="py-3 px-1 bg-global-color-1 hover:bg-global-color-0 text-white rounded-sm">
                  <IoIosArrowForward />
                </button>
              </form>

              <div className="mb-[30px]">
                <h3 className="text-lg font-semibold">Filter by price</h3>
                <div>Filter</div>
              </div>

              <div className="mb-[30px]">
                <ul>
                  <li>
                    <a
                      href="/"
                      className="text-global-color-0 hover:text-global-color-1"
                    >
                      Groceries(10)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-global-color-0 hover:text-global-color-1"
                    >
                      Juice(9)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-1 min-[400px]:grid-cols-2 sm:gap-y-0 gap-6">
                <CardSide />
                <CardSide />
                <CardSide />
              </div>
            </div>
          </div>
          <div className="md:ms-[80px] w-full md:order-none  order-1">
            <main>
              <div>
                <nav className="opacity-70 mb-[30px]">
                  <a href="/">Home</a> / Shop
                </nav>

                <header className="mb-[50px]">
                  <h1 className="text-5xl font-semibold text-global-color-0">
                    Shop
                  </h1>
                </header>

                <div className="flex justify-between sm:items-center w-full mb-[50px] sm:flex-row flex-col items-start">
                  <p className="sm:m-0 mb-[20px]">
                    {"Showing 1–9 of 12 results"}
                  </p>
                  <form action="">
                    <select name="orderby" id="orderby">
                      <option value="menu_order" selecteds="selected">
                        Default order
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>

                <div className="grid lg:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-6">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
