import React from "react";
import { ServiceCard } from "../components/index";

const ServiceCardSection = ({ data }) => {
  return (
    <section className="bg-global-color-2 w-full py-[30px]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {data.map(({ text, title, icon }, index) => (
          <ServiceCard key={index} title={title} text={text} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCardSection;
