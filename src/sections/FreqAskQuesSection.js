import React from "react";
import BgLeaf from "../components/BgLeaf";
import Head from "../components/Head";
import { QuestionDrop } from "../components";
import Skeleton from "react-loading-skeleton";

const FreqAskQuesSection = ({ data }) => {
  return (
    <section className="py-[30px] relative">
      <BgLeaf />
      <div className="mx-auto max-w-[1200px] relative">
        <Head title={"Frequently Asked Question!"} />

        <section className="mt-5 mx-5 ">
          <div className="flex items-start justify-between gap-7">
            <div className="w-1/2">
              {!data
                ? [1, 2, 3].map((el, index) => (
                    <Skeleton key={index} className="py-5 my-2" />
                  ))
                : data
                    ?.slice(0, Math.ceil(data.length / 2))
                    .map(({ question, answer }, index) => (
                      <QuestionDrop
                        key={index}
                        question={question}
                        answer={answer}
                      />
                    ))}
            </div>
            <div className="w-1/2">
              {!data
                ? [1, 2, 3].map((el, index) => (
                    <Skeleton key={index} className="py-5 my-2" />
                  ))
                : data
                    ?.slice(Math.ceil(data.length / 2))
                    .map(({ question, answer }, index) => (
                      <QuestionDrop
                        key={index}
                        question={question}
                        answer={answer}
                      />
                    ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FreqAskQuesSection;
