import React from "react";
import SectionMessage from "../components/SectionMessage";
import leafImg from "../img/imageLeaf.png";
import CardContact from "../components/CardContact";
import Head from "../components/Head";
import QuestionDrop from "../components/QuestionDrop";
import BgLeaf from "../components/BgLeaf";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const someText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
repellendus fugit iusto, culpa velit libero quos vitae maxime
error nisi.`;

const ContactUs = () => {
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
                text1={"+123 456 789"}
                text2={"+123 456 789"}
              />
              <CardContact
                icon={<HiOutlineMail size={30} />}
                text1={"info@example.com"}
                text2={"support@example.com"}
              />
              <CardContact
                icon={<HiLocationMarker size={30} />}
                text1={"1569 Ave, New York,"}
                text2={"NY 10028, USA"}
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
            <div className="flex gap-x-20 sm:flex-row flex-col">
              <div className="flex-1">
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
              </div>
              <div className="flex-1">
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
                <QuestionDrop
                  question={"Pulvinar nostrud class cum facilis?"}
                  answer={someText}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
