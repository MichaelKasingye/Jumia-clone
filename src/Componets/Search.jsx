import React from "react";
import "../Style/search.css";
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import { data } from "../Library/stock";
import { useStateValue } from "../ContextAPI/StateProvider";
import Heading from "./Heading";
import Product from "./Product";
import Error from "./Error";

function Search() {
  const [{ term }] = useStateValue();

  const filteredContent = data.filter((item) => {
    return (
      item.product.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="search">
      <Header />
      <div className="search_section">
        <Heading heading={term} className="heading" />

        <div className="home_row">
          {filteredContent.length === 0 ? (
            <Error product={term} className="heading" />
          ) : (
            filteredContent.map((item) => (
              <Product
                id={item.id}
                key={item.id}
                title={item.desc}
                price={item.price}
                rating={item.star}
                image={item.image}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
