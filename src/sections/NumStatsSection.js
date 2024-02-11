import { useEffect, useRef, useState } from "react";
import { NumberStat } from "../components";

const NumStatsSection = ({ data }) => {
  const sectionRef = useRef();
  const [isNumVisiable, setIsNumVisiable] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entr) => {
      const entry = entr[0];

      if (entry.isIntersecting) setIsNumVisiable(true);
    });

    if (data) observer.observe(sectionRef.current);
  }, [data]);

  return (
    <section
      ref={sectionRef}
      className="py-[40px] bg-global-color-6 text-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center min-[700px]:justify-between px-5 flex-wrap-reverse min-[700px]:flex-nowrap w-full sm:flex-row flex-col">
          <div className="w-fit min-[700px]:order-none order-1  mb-5 min-[700px]:mb-0">
            <h4 className="text-2xl font-semibold text-center">
              Numbers Speak For <br /> Themselves!
            </h4>
          </div>
          <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-2 my-5">
            <NumberStat
              number={parseInt(data?.productsCategory)}
              title={"Products Category"}
              reduce={50}
              isNumVisiable={isNumVisiable}
            />
          </div>
          <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-3 my-5">
            <NumberStat
              number={parseInt(data?.createdProducts)}
              title={"Created Products"}
              reduce={50}
              isNumVisiable={isNumVisiable}
            />
          </div>
          <div className="mx-auto min-[700px]:m-0 min-[700px]:mx-5 sm:order-none order-4 my-5">
            <NumberStat
              number={parseInt(data?.happyCustomers)}
              title={"Happy Customers"}
              reduce={50}
              isNumVisiable={isNumVisiable}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumStatsSection;
