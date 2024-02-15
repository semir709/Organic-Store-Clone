import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { ButtonGreen } from "./index";

const InfoReview = ({ description }) => {
  const [section, setSection] = useState(0);
  return (
    <div className="py-[40px] ">
      <ul className="border-t-[1px] flex items-center">
        <li
          onClick={() => setSection(0)}
          className={`me-3 border-t-[4px] ${
            section === 0 ? "border-global-color-0" : "border-transparent"
          }`}
        >
          <Link className="font-semibold text-global-color-3 hover:text-global-color-0">
            Description
          </Link>
        </li>
        <li
          onClick={() => setSection(1)}
          className={`me-3 border-t-[4px] ${
            section === 1 ? "border-global-color-0" : "border-transparent"
          }`}
        >
          <Link className="font-semibold text-global-color-3 hover:text-global-color-0">
            Reviews (0){" "}
          </Link>
        </li>
      </ul>

      <div className="my-5">
        {section === 0 && (
          <div>
            {!description ? (
              <Skeleton className="py-[50px]" />
            ) : (
              <p className="my-2 ">{description}</p>
            )}
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
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <div className="flex items-center mb-5">
                  <label htmlFor="" className="text-2xl">
                    Your rating *
                  </label>
                  <div className="ms-4">Stars</div>
                </div>

                <div>
                  <label htmlFor="textArea" className="block text-2xl mb-1">
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
                  <input id="checkSave" type="checkbox" className="me-3" />
                  <label htmlFor="checkSave" className="">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <ButtonGreen text={"Submit"} />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoReview;
