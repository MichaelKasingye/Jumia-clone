import React from 'react'
import "../Style/Home.css"; 
import Product from '../Componets/Product';
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            
        <div className="home_row">
        <Product
        id="123444"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />

<Product
        id="123443"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        </div>

        <div className="home_row">
        <Product
        id="14434"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        <Product
        id="1234"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        <Product
        id="4434"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
        />
        </div>

        <div className="home_row">
        <Product
        id="123443499"
        title="movie: Van Man"
        price={112.36}
        rating={5}
        image="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"
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
        <div className="home_row">
        <Product
        id="34"
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
