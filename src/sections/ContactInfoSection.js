import { BsFillTelephoneFill } from "react-icons/bs";
import { CardContact } from "../components";
import { MdEmail, MdLocationPin } from "react-icons/md";
import leafImg from "../img/imageLeaf.png";

const ContactInfoSection = ({ data }) => {
  return (
    <>
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
                arrayText={data?.phone}
              />

              <CardContact
                icon={<MdEmail size={27} />}
                arrayText={data?.email}
              />

              <CardContact
                icon={<MdLocationPin size={30} />}
                arrayText={data?.location}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfoSection;
