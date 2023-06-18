import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieExplore from "../../../../public/lottie/LottieExplore.json";
import LottieOffer from "../../../../public/lottie/LottieOffer.json";
import LottieScroll from "../../../../public/lottie/LottieScroll.json";

function BannerV2({ banner }) {
  return (
    <>
      <section className="banner">
        <div className="priceTag">
          <p ref={banner}>
            <span>Limited Time Offer</span>. We are offering an exclusive
            website for your business at an unbeatable price of{" "}
            <span>9,999</span>
          </p>
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="bannerWrapper">
              <div className="content">
                <h5 className="title">
                  We provide clients with stunning <span>Talzie</span> web
                  solutions, developed with <span>skills & passion.</span>
                </h5>
                <div className="aboutUs">
                  <h4>About Us</h4>
                  <p>
                    A vibrant, dynamic, creative designers and developers who
                    constantly work to bring your ideas to the table. We can
                    deliver some mind-boggling outcomes.
                  </p>
                </div>
                <Lottie
                      animationData={LottieScroll}
                      loop={true}
                      style={{width: 50 , margin:"auto"}}
                    />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerV2;
