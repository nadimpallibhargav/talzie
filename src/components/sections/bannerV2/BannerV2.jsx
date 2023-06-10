import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieExplore from "../../../../public/lottie/LottieExplore.json";
import LottieOffer from "../../../../public/lottie/LottieOffer.json";
import LottieTeam from "../../../../public/lottie/LottieTeam.json";

function BannerV2() {
  return (
    <>
      <section className="banner">
        <div className="priceTag">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            nobis
          </p>
          <Lottie
            animationData={LottieOffer}
            loop={true}
            style={{ height: 50, width: 50 }}
          />
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="bannerWrapper">
              <div className="content">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h5>
                <div className="buttonWrapper">
                  <p>
                    <Lottie
                      animationData={LottieExplore}
                      loop={true}
                      style={{ height: 50, width: 50 }}
                    />
                    / hello@talzie.com
                  </p>
                </div>
                <Lottie
                  animationData={LottieTeam}
                  loop={true}
                  className="bannerImage"                  
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
