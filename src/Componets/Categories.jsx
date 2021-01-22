import React from "react";
import "../Style/categories.css";
import Heading from "./Heading";
import Product from "./Product";
import Intro from "./Intro";
import { data } from "../Library/stock";
function Categories(props) {
  return (
    <div className="home">
      <Intro />
      <Heading heading={props.section} className="heading" />
      <div className="home_row">
        {data
          .filter((filteredData) => filteredData.category === props.section)
          .map((item) => (
            <Product
              id={item.id}
              key={item.id}
              title={item.desc}
              price={item.price}
              rating={item.star}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Categories;
