import React from 'react'
import { useStateValue } from '../ContextAPI/StateProvider';
import '../Style/CheckoutProduct.css';
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log(id,title,image,price,rating);
    function removeFromBasket(){
        dispatch({
            type:"REMOVE_TO_BASKET",
            id:id,
        });
    }
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct_image" src={image} alt=""/>
            
            <div className="CheckoutProduct_info">
           <p className="CheckoutProduct_title">{title}</p> 
           <p className="CheckoutProduct_price">
               <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="CheckoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <p>✡</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        
        </div>
    )
}

export default CheckoutProduct
