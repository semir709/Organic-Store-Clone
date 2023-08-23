import React from "react";

const DropFilter = () => {
  return (
    <form action="">
      <select name="orderby" id="orderby">
        <option value="menu_order" selecteds="selected">
          Default order
        </option>
        <option value="popularity">Sort by popularity</option>
        <option value="rating">Sort by average rating</option>
        <option value="date">Sort by latest</option>
        <option value="price">Sort by price: low to high</option>
        <option value="price-desc">Sort by price: high to low</option>
      </select>
    </form>
  );
};

export default DropFilter;
