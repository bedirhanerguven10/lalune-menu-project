import React from "react";
import "./Categories.css";
import HorizontalScroll from "react-horizontal-scrolling";

const Categories = ({ categ, filterItems,id}) => {
  console.log(id);
  console.log(categ);
  return (
    <HorizontalScroll>
      {categ.map((categoryItem, index) => {
        
        return( 
        categoryItem !== "Tüm Ürünler" ? (  <button className="category-button" type="button" key={index} onClick={() => filterItems(categoryItem)}>
          
          <img className="category" src={categoryItem} key={id} />
        </button> ) : (<button className="category-button" type="button" key={index} onClick={() => filterItems(categoryItem)}>
          
          <img className="category" src="./images/Tüm Ürünler.png" />
        </button>)
      
        
        
        )
      })}
    </HorizontalScroll>
  );
};

export default Categories;
