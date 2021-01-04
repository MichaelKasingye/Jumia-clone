import React from 'react'
import "../Style/Home.css"; 
import Product from './Product';
import Intro from './Intro';
import JumiaBusinesses from './JumiaBusinesses';
import {images} from '../Library/images'
function Home() {
    return (
        <div className="home">
            <Intro />
            <JumiaBusinesses />
        <div className="home_row">
        <Product
        id="123443499"
        title="I phone 11 pro 2017 8gb ram 168 HD memory"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        <Product
        id="12348887"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        <Product
        id="12344890"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
         <Product
        id="123443499"
        title="I phone 11 pro 2017 8gb ram 168 HD memory"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        <Product
        id="12348887"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        <Product
        id="12344890"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        </div>
        </div>
    )
}

export default Home
