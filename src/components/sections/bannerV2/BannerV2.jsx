import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieScroll from "../../../../public/lottie/LottieScroll.json";

function BannerV2({ banner }) {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="bannerContentWrapper">
            <h1 className="title">
              Crafting Exceptional <span> UI / UX </span> <br /> Web Solutions
              <br /> with Expertise and Passion
            </h1>
            <Lottie
              animationData={LottieScroll}
              loop={true}
              style={{ width: 50, marginInline: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerV2;
