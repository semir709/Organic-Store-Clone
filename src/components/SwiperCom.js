import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { urlFor } from "../utils";

const SwiperCom = ({ array }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        className="mySwiper bg-global-color-4 "
      >
        {array.map(({ asset, captionSlideImage }) => (
          <SwiperSlide>
            <div className="w-full h-full ">
              <img
                className="w-full object-cover rounded-lg"
                src={urlFor(asset).url()}
                alt={captionSlideImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCom;
