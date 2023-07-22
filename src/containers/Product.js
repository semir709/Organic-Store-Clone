import React, { useState } from "react";
import ButtonGreen from "../components/ButtonGreen";

const Product = () => {
  const [section, setSection] = useState(0);
  return (
    <div className="py-[40px] bg-global-color-4">
      <main className="max-w-[1200px] mx-auto">
        <div className="flex gap-10 ">
          <div className="w-full flex-1">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg"
              alt=""
              className="object-cover w-full"
            />
          </div>

          <div className="flex-1">
            <h1>Natural Extracted Edible Oil</h1>
            <div className="flex items-center">
              <p>£25.00</p>
              <span>+ Free Shipping</span>
            </div>
            <p>
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non incidunt lores ta porro
              ame. numquam eius modi tempora incidunt lores ta porro ame.
            </p>
            <form action="" className="flex items-center py-5 border-b-2">
              <input type="number" value={1} />
              <ButtonGreen text={"add to chart"} />
            </form>
            <span>
              Categories: <a href="/">Groceries</a>, <a href="">Juice</a>
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
              <a href="#">Description</a>
            </li>
            <li
              onClick={() => setSection(1)}
              className={`me-3 border-t-[4px] ${
                section === 1 ? "border-global-color-0" : "border-transparent"
              }`}
            >
              <a href="#">Reviews (0) </a>
            </li>
          </ul>

          <div className="my-5">
            {section === 0 && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti molestias tempora aperiam a alias perspiciatis vitae
                  officiis eius laborum cumque.
                </p>
              </div>
            )}

            {section === 1 && <div>asd</div>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
