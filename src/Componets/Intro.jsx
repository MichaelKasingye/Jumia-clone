import React from 'react'
import '../Style/Intro.css'
import {images} from '../Library/images'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

function Intro() {
    return (
        <div className="intro">
            <div className="categories">
                <div className="category_items">
                <StorefrontOutlinedIcon/><span>Supermarket</span>
                </div>
                <div className="category_items">
                <PhoneIphoneOutlinedIcon/><span>Phone & Tablets</span>
                </div>
                <div className="category_items">
                <TvOutlinedIcon/><span>Electronics</span>
                </div>
                <div className="category_items">
                <FitnessCenterOutlinedIcon/><span>Sporting Goods</span>
                </div>
                <div className="category_items">
                <ComputerOutlinedIcon/><span>Computing</span>
                </div>
            </div>

            <div className="showcase">
           <img className="home_image" src={images.homeImage} alt="showcase"/> 
            </div>

            <div className="right_section">
                <div className="right_section_content">
                    <div className="right_section_content_items">
                    <img src={images.helpCenter} alt="Help center"/><span>HELP CENTER</span>
                    </div>
                    <div className="right_section_content_items">
                    <img src={images.easyReturn} alt="Easy Return"/><span>EASY RETURN</span>
                    </div>
                    <div className="right_section_content_items">
                    <img src={images.sell} alt="Sell"/><span>SELL</span>
                    </div>
                </div>
                <div className="right_section_ads">
                    <img src={images.homeImage} alt="Ad"/>
                </div>
            </div>

        </div>
    )
}

export default Intro
