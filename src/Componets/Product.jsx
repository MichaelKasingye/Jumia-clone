import React from 'react'
// import { useStateValue } from '../ContextAPI/StateProvider';
import star from '../images/jumia_images/star_yellow.png';
import '../Style/Product.css';
import { useStateValue } from '../ContextAPI/StateProvider';


function Product({id,title,image,price,rating}) {
    const[{basket}, dispatch] = useStateValue();
    const addToBasket = ()=>{
        //add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };
    return (
        <div className="product" onClick={addToBasket}>
            <img src={image} alt=""/>
            <div className="product_info">
           <p className="title">{title}</p> 
           <p className="product_price">
               <span>UGX </span>
            <span>{price}</span>
            </p>
            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <img key={Math.floor(Math.random() * 1000000)} src={star} alt=""/>
                ))}
            </div>
            </div>
            <div className="button">
                <p className="click_button" >ADD TO CART</p> 
            </div>
        </div>
    )
}

export default Product
