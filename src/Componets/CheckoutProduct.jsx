import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import star from "../images/jumia_images/star_yellow.png";
import "../Style/CheckoutProduct.css";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({  id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  function removeFromBasket() {
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: id,
    });
  }
  return (
    <div className="CheckoutProduct">
      <CurrencyFormat
        renderText={(price) => (
          <>
            <div >
              <img className="CheckoutProduct_image" src={image} alt="" />

              <div className="CheckoutProduct_info">
                <p className="CheckoutProduct_title">{title}</p>
                <p className="CheckoutProduct_price">
                  <small> </small>
                  <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct_rating">
                  {Array(rating)
                    .fill()
                    .map((_) => (
                      <img key={Math.floor(Math.random() * 1000000)} src={star} alt="" />
                    ))}
                </div>
                <p className="Checkout_button" onClick={removeFromBasket}>
                  REMOVE
                </p>
              </div>
            </div>
          </>
        )}
        decimalScale={2}
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"UGX: "}
      />
    </div>
  );
}

export default CheckoutProduct;
