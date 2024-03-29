import { useNavigate } from "react-router-dom";
import { urlFor } from "../utils";
import { PreviusPrice } from "./index";

const Card = ({ data, onSide = false }) => {
  const navigation = useNavigate();

  const whenClick = () => {
    navigation(`/product/${data?.slug}`);
  };

  return (
    <div
      onClick={whenClick}
      className="w-full  relative hover:cursor-pointer "
      key={data.slug}
    >
      {data.sale && (
        <div className="absolute top-[-10px] right-[-10px] bg-global-color-0 px-2 py-3 rounded-full">
          <span>Sale!</span>
        </div>
      )}
      <div className="w-full h-[270px]">
        <img
          src={urlFor(data.image).url()}
          alt={data.image.caption}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-5 text-center">
        {!onSide && (
          <div className="flex items-center justify-center">
            {data?.category?.map(({ slug, name }) => (
              <span
                key={`categoryCard-${slug}`}
                className="opacity-50 text-sm me-2 "
              >
                {data.name}
              </span>
            ))}
          </div>
        )}
        <span>
          <h2
            className={` ${
              onSide
                ? "text-left text-base text-global-color-0 hover:text-global-color-1 "
                : "text-center text-lg font-semibold text-global-color-2 "
            }`}
          >
            {data.title}
          </h2>
        </span>
        <div
          className={`${
            onSide
              ? "text-left text-base "
              : "text-center text-lg font-semibold"
          }`}
        >
          {/* {data.setPrevious && isNaN(data.previusPrice) === false && (
            <span className="me-2 line-through text-gray-400 ">
             $<span>{data.previusPrice}</span>
            </span>
          )} */}
          <PreviusPrice price={data.previusPrice} />
          <span className="">
            {/* {data.currency} */}$<span>{data.price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
