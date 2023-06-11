import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieExplore from "../../../../public/lottie/LottieExplore.json";
import LottieOffer from "../../../../public/lottie/LottieOffer.json";
import LottieTeam from "../../../../public/lottie/LottieTeam.json";

function BannerV2({banner}) {
  return (
    <>
      <section className="banner">
        <div className="priceTag" >
          <p ref={banner} > 
          <span>Limited Time Offer</span>. We are offering an exclusive website for your business at an unbeatable price of <span>####</span>
          </p>
          {/* <Lottie
            animationData={LottieOffer}
            loop={true}
            style={{ height: 50, width: 50 }}
          /> */}
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="bannerWrapper">
              <div className="content">
                <h5 className="title">
                  We provide clients with stunning <span>Talzie</span> web solutions, developed with <span>skills & passion.</span>
                </h5>
                <div className="aboutUs">
                  <h4>
                    About Us
                  </h4>
                  <p>A vibrant, dynamic, creative designers and developers who constantly work to bring your ideas to the table. We can deliver some mind-boggling outcomes.</p>
                  <div className="buttonWrapper">
                  <img src="/linkedin.png" width={24}/>
                </div>
                <div className="buttonWrapper">
                  <img src="/discord.png" width={24}/>
                </div>
                <div className="buttonWrapper">
                  <img src="/instagram.png" width={24}/>
                </div>
                <div className="buttonWrapper">
                  <img src="/gmail.png" width={24}/>
                </div>
                </div>
           
                {/* <Lottie
                  animationData={LottieTeam}
                  loop={true}
                  className="bannerImage"                  
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerV2;
