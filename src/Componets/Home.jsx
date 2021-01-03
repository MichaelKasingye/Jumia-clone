import React from 'react'
import "../Style/Home.css"; 
import Product from './Product';
import Intro from './Intro'
import {images} from '../Library/images'
function Home() {
    return (
        <div className="home">
            <Intro />

        <div className="home_row">
        <Product
        id="123443499"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image={images.iphone}
        />
        <Product
        id="12348887"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        <Product
        id="12344890"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        </div>
        </div>
    )
}

export default Home
