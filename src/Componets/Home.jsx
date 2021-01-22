import React from "react";
import "../Style/Home.css";
import Product from "./Product";
import Intro from "./Intro";
import JumiaBusinesses from "./JumiaBusinesses";
import Heading from "./Heading";
import { data } from "../Library/stock";

function Home() {
  return (
    <div className="home">
      <Intro />
      <JumiaBusinesses />

      <Heading heading="Supermarket" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "Supermarket")
          .slice(0, 5)
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

      <Heading heading="Phones and Tablets" className="heading" />
      <div className="home_row">
        {data
          .filter(
            (filrterdData) => filrterdData.category === "Phones and Tablets"
          )
          .slice(0, 5)
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

      <Heading heading="Electronics" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "Electronics")
          .slice(0, 5)
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

      <Heading heading="Sports" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "Sports")
          .slice(0, 5)
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

      <Heading heading="Computing" className="heading" />
      <div className="home_row">
        {data
          .filter((filrterdData) => filrterdData.category === "computing")
          .slice(0, 5)
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
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
