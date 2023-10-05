import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieScroll from "../../../../public/lottie/LottieScroll.json";

function BannerV2({ contact, scrollToSection }) {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="bannerContentWrapper">
            <h1 className="title">
              Crafting Exceptional <span> UI / UX </span> <br /> Web Solutions
              <br /> with Expertise and Passion
            </h1>
            <div
              onClick={() => scrollToSection(contact) }
              className="primaryBtn"
            >
              Contact Us
            </div>
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
