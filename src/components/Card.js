import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, category, price, img, slug }) => {
  const navigation = useNavigate();

  const whenClick = () => {
    navigation(`/product/${slug}`);
  };
  return (
    <div onClick={whenClick} className="w-full">
      <div className="w-full">
        <img src={img} alt={img} className="w-full object-cover" />
      </div>

      <div className="mt-5 text-center">
        <div className="flex items-center justify-center">
          {category.map(({ slug, name }) => (
            <span key={slug} className="opacity-50 text-sm">
              {name}
            </span>
          ))}
        </div>
        <a href="/">
          <h2 className="text-global-color-2 text-lg font-semibold">{title}</h2>
        </a>
        <span className="font-semibold">
          €<span>{price}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
