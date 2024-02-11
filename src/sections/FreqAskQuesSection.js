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
          <div className="grid gap-x-20 md:grid-cols-2">
            {!data
              ? [1, 2, 3, 4, 5, 6].map(() => <Skeleton className="py-5 my-2" />)
              : data?.map(({ question, answer }, index) => (
                  <QuestionDrop
                    key={index}
                    question={question}
                    answer={answer}
                  />
                ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FreqAskQuesSection;
