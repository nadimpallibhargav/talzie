import React from "react";

import "./Whyus.scss";

const Whyus = ({ whyUs }) => {
  return (
    <section className="whyus" ref={whyUs}>
      <div className="container">
        <div className="whyusContent">
          <div className="whyusHeading">
            <div className="heading">
              <h2>Why Us</h2>
              <p>
                Choose us for expert development and design that combine
                stunning visuals, seamless functionality, and personalized
                attention.
              </p>
            </div>
          </div>
          <div className="whyusWrapper">
            <div className="whyusCard">
              <div className="iconWrapper">
                <img src="/terminal.svg" alt="why us" width={32} />
              </div>
              <h3>Clean Code</h3>
              <p>
                Experience clean and efficient code that powers high-performance
                websites.
              </p>
            </div>
            <div className="whyusCard">
              <div className="iconWrapper">
                <img src="/graphic-design.svg" alt="why us" width={32} />
              </div>
              <h3>UI design</h3>
              <p>
                Delight your audience with visually stunning designs that
                harmonize the user experience.
              </p>
            </div>
            <div className="whyusCard">
              <div className="iconWrapper">
                <img src="/quality.svg" alt="why us" width={32} />
              </div>
              <h3>Quality assurance</h3>
              <p>
                Delivering flawless website quality, performance, and
                satisfaction.
              </p>
            </div>
            <div className="whyusCard">
              <div className="iconWrapper">
                <img src="/rating.svg" alt="why us" width={32} />
              </div>
              <h3>Technical Expertise</h3>
              <p>
                Each team member has years of experience in their industry and a
                proven track record of customer satisfaction.
              </p>
            </div>
            <div className="whyusCard">
              <div className="iconWrapper">
                <img src="/time.svg" alt="why us" width={32} />
              </div>
              <h3>Long-Term Relationships</h3>
              <p>
                We make connections, not transactions. We invest fully in every
                client to form a partnership for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
