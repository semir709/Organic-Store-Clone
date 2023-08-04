import React, { useEffect, useState } from "react";
import SectionMessage from "../components/SectionMessage";
import leafImg from "../img/imageLeaf.png";
import CardContact from "../components/CardContact";
import Head from "../components/Head";
import QuestionDrop from "../components/QuestionDrop";
import BgLeaf from "../components/BgLeaf";
import { BsFillTelephoneFill } from "react-icons/bs";
import { getContact } from "../utils";
import sanityClient from "../client";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContactUs = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(null);
    sanityClient.fetch(getContact).then((data) => setData(data[0]));
  }, []);

  return (
    <div>
      <SectionMessage title={"Get In Touch"} />

      <div className="bg-global-color-4 py-[70px]"></div>

      <section className="pb-[30px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="bg-global-color-5 md:p-[80px] py-[80px] px-5 relative translate-y-[-50px] shadow-lg mx-5 rounded-md">
            <div className="flex justify-between gap-6 bg-white md:flex-row flex-col  ">
              <div className="absolute top-[-33px] left-1/2 -translate-x-1/2 lg:w-[15%] md:w-[20%] sm:w-[25%]  min-[450px]:w-[30%] w-[50%]">
                <div className="w-full ">
                  <img src={leafImg} alt="" className="object-cover w-full" />
                </div>
              </div>
              <CardContact
                icon={<BsFillTelephoneFill size={20} />}
                arrayText={data?.contact?.phone}
              />

              <CardContact
                icon={<MdEmail size={27} />}
                arrayText={data?.contact?.email}
              />

              <CardContact
                icon={<MdLocationPin size={30} />}
                arrayText={data?.contact?.location}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[30px] relative">
        <BgLeaf />
        <div className="mx-auto max-w-[1200px] relative">
          <Head title={"Frequently Asked Question!"} />

          <section className="mt-5 mx-5 ">
            <div className="grid gap-x-20 md:grid-cols-2">
              {!data
                ? [1, 2, 3, 4, 5, 6].map(() => (
                    <Skeleton className="py-5 my-2" />
                  ))
                : data?.questions.map(({ question, answer }, index) => (
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
    </div>
  );
};

export default ContactUs;
