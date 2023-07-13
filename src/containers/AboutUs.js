import React from "react";
import SectionMessage from "../components/SectionMessage";
import LeafCenter from "../components/LeafCenter";
import fruit from "../img/fruit.jpg";
import NumberStat from "../components/NumberStat";

const AboutUs = () => {
  return (
    <div>
      <SectionMessage />
      <section className="bg-global-color-4">
        <LeafCenter />
      </section>

      <section className="pt-[60px] pb-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center mx-5 lg:flex-row flex-col">
            <div className="flex-1 lg:py-[50px] lg:pe-[150px] mx-5 mb-[50px]">
              <h2 className="font-semibold sm:text-4xl text-2xl mb-5">
                We Are Your Favourite Store.
              </h2>
              <p className="sm:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                dolores ut, laborum, sit modi vitae excepturi labore, error
                corporis hic doloribus dignissimos aliquam aut voluptas
                reprehenderit molestias debitis. Doloremque omnis, autem labore
                consequuntur eius ipsa excepturi mollitia. Iste, non corrupti id
                aspernatur at assumenda provident cupiditate quod explicabo sit
                ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Illum dolores ut, laborum, sit modi vitae excepturi labore,
                <br />
                error corporis hic doloribus dignissimos aliquam aut voluptas
                reprehenderit molestias debitis. Doloremque omnis, autem labore
                consequuntur eius ipsa excepturi mollitia. Iste, non corrupti id
                aspernatur at assumenda provident cupiditate quod explicabo sit
                ea.
              </p>
            </div>

            <div className="flex-1 w-full lg:p-0 px-5">
              <img src={fruit} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[40px] bg-global-color-6 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between w-full px-5 ">
            <div className="w-fit">
              <h4 className="text-2xl font-semibold">
                Numbers Speak For <br /> Themselves!
              </h4>
            </div>
            <div className="flex items-center justify-between w-full ">
              <NumberStat />
              <NumberStat />
              <NumberStat />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px]"></section>
    </div>
  );
};

export default AboutUs;
