import React from "react";
import SectionMessage from "../components/SectionMessage";
import { BiPhone } from "react-icons/bi";
import leafImg from "../img/imageLeaf.png";
import CardContact from "../components/CardContact";

const ContactUs = () => {
  return (
    <div>
      <SectionMessage />

      <div className="bg-global-color-4 py-[70px]"></div>

      <section className="pb-[100px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="bg-global-color-5 md:p-[80px] py-[80px] px-5 relative translate-y-[-50px] shadow-lg mx-5 rounded-md">
            <div className="flex justify-between gap-6 bg-white md:flex-row flex-col  ">
              <div className="absolute top-[-33px] left-1/2 -translate-x-1/2 lg:w-[15%] md:w-[20%] sm:w-[25%]  min-[450px]:w-[30%] w-[50%]">
                <div className="w-full ">
                  <img src={leafImg} alt="" className="object-cover w-full" />
                </div>
              </div>
              <CardContact />
              <CardContact />
              <CardContact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
