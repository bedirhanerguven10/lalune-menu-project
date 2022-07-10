import React from "react";
import "./Categories.css";

const Categories = ({ categ, filterItems }) => {
  return (
    <div className="btn-container">
      {categ.map((categoryItem, index) => {
        return(
        <button className="category-button" type="button" key={index} onClick={() => filterItems(categoryItem)}>
          {categoryItem}
        </button>
        );
      })}
    </div>
  );
};

export default Categories;
