import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  category,
  price,
  img,
  slug,
  currency,
  setPrevious,
  previusPrice,
  sale,
  onSide = false,
}) => {
  const navigation = useNavigate();

  const whenClick = () => {
    navigation(`/product/${slug}`);
  };
  return (
    <div onClick={whenClick} className="w-full relative">
      {sale && (
        <div className="absolute top-[-10px] right-[-10px] bg-global-color-0 px-2 py-3 rounded-full">
          <span>Sale!</span>
        </div>
      )}
      <div className="w-full">
        <img src={img} alt={img} className="w-full object-cover" />
      </div>

      <div className="mt-5 text-center">
        {!onSide && (
          <div className="flex items-center justify-center">
            {category.map(({ slug, name }) => (
              <span key={slug} className="opacity-50 text-sm me-2 ">
                {name}
              </span>
            ))}
          </div>
        )}
        <a href="/">
          <h2
            className={` ${
              onSide
                ? "text-left text-base text-global-color-0 hover:text-global-color-1 "
                : "text-center text-lg font-semibold text-global-color-2 "
            }`}
          >
            {title}
          </h2>
        </a>
        <div
          className={`${
            onSide
              ? "text-left text-base "
              : "text-center text-lg font-semibold"
          }`}
        >
          {setPrevious && isNaN(previusPrice) === false && (
            <span className="me-2 line-through text-gray-400 ">
              {currency}
              <span>{previusPrice}</span>
            </span>
          )}
          <span className="">
            {currency}
            <span>{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
