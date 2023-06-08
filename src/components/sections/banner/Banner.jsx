import React from "react";
import priceTag from '../../../assets/images/price_tag.svg'
import heroPic from '../../../assets/images/heroPic1.svg'
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="bannerSection">
      <div className="container">
        <div className="bannerContent">
          <labe className="heroLabel">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, nobis<img className="priceTag" src={priceTag} alt="priceTag"/></labe>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            nobis?
          </p>
          <div className="heroImageContainer">
            <img src={heroPic} alt="heroSectionImage"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
