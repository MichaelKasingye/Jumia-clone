import React from "react";
import "../Style/Intro.css";
import { images } from "../Library/images";
import { Link } from "react-router-dom";
import Video from "../video/ad.mp4";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
import FitnessCenterOutlinedIcon from "@material-ui/icons/FitnessCenterOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";

function Intro() {
  return (
    <div className="intro">
      <div className="categories">
        <Link to="/supermarket">
          <div className="category_items">
            <StorefrontOutlinedIcon />
            <span>Supermarket</span>
          </div>
        </Link>
        <Link to="/phoneTablets">
          <div className="category_items">
            <PhoneIphoneOutlinedIcon />
            <span>Phone & Tablets</span>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="category_items">
            <TvOutlinedIcon />
            <span>Electronics</span>
          </div>
        </Link>
        <Link to="/sporting">
          <div className="category_items">
            <FitnessCenterOutlinedIcon />
            <span>Sporting Goods</span>
          </div>
        </Link>
        <Link to="/computing">
          <div className="category_items">
            <ComputerOutlinedIcon />
            <span>Computing</span>
          </div>
        </Link>
      </div>

      <div className="showcase">
        <span className="home_image" />
      </div>

      <div className="right_section off">
        <div className="right_section_content ">
          <div className="right_section_content_items">
            <img src={images.helpCenter} alt="Help center" />
            <span className="title">
              HELP CENTER
              <br />
              <span className="desc">Guide to customer Care</span>
            </span>
          </div>
          <div className="right_section_content_items">
            <img src={images.easyReturn} alt="Easy Return" />
            <span className="title">
              EASY RETURN <br />
              <span className="desc">Quick Refund</span>
            </span>
          </div>
          <div className="right_section_content_items">
            <img src={images.sell} alt="Sell" />
            <span className="title">
              SELL
              <br />
              <span className="desc">Millions of Customers</span>
            </span>
          </div>
        </div>
        <div className="right_section_ads">
          <video autostart="true" autoPlay muted loop src={Video} alt="Ad" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
