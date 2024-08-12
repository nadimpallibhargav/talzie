import React from "react";
import "./BannerV2.scss";
import Lottie from "lottie-react";
import LottieScroll from "../../../../public/lottie/LottieScroll.json";

function BannerV2({ contact, scrollToSection }) {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="bannerContentWrapper-v1">
            {/* <h1 className="title">
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
            /> */}
            <p className="slogan"> Design - Develop - Agency</p>
            <h1 className="titlel-v1">
            Code to Excellence : Web & App
            </h1>
            <h6>At Talzie, we blend imagination with innovation to create digital solutions that leave a lasting impression. Our expertise in web and app development ensures your online presence not only meets but exceeds expectations. Join us in redefining excellence in the digital landscape.</h6>
            <div
              onClick={() => scrollToSection(contact) }
              className="bw-button"
            >
              Let's collaborate
              <Lottie
              animationData={LottieScroll}
              loop={true}
              style={{ width: 20, }}
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerV2;
