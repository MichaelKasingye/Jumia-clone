import React from 'react'
import "../Style/Home.css"; 
import Product from './Product';
import Intro from './Intro';
import JumiaBusinesses from './JumiaBusinesses';
import Heading from './Heading';
import {images} from '../Library/images';
import {data} from '../Library/stock';
import CurrencyFormat from 'react-currency-format';

function Home() {
    return (
        <div className="home">
            <Intro />
            <JumiaBusinesses />

            <Heading heading="Supermarket" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="Supermarket" ).map(item => (
            <Product
            id={item.id}
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>


       {/* TEST */}
      
            
        <Heading heading="Phones and Tablets" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="Phones and Tablets" ).map(item => (
            <Product
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>





        <Heading heading="Phones and Tablets" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="Phones and Tablets" ).map(item => (
            <Product
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>

        <Heading heading="Electronics" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="Electronics" ).map(item => (
            <Product
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>
        
        <Heading heading="Sports" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="Sports" ).map(item => (
            <Product
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>

        <Heading heading="Computing" className="heading"/>
        <div className="home_row">
       {
           data.filter(pdt => pdt.category ==="computing" ).map(item => (
            <Product
            key={item.id}
            title={item.desc}
            price={item.price}
            rating={item.star}
            image={item.image}
            />
           ))
       }
        </div>
        {/* <Footer /> */}

        </div>
    )
}

export default Home
