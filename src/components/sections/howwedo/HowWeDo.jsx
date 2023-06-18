import React from "react";
import "./HowWeDo.scss";
import { PrimaryButton } from "../../buttons/Buttons";

const HowWeDo = ({ howWeDo, contact, scrollToSection }) => {
  return (
    <section className="howWeDo" ref={howWeDo}>
      <div className="container">
        <div className="howWeDoContent">
          <div className="howWeDoMainHeading">
            <div className="heading">
              <h2>How We Do</h2>
              <p>From Onboarding to take off</p>
              <div
                onClick={() => scrollToSection(contact) }
                className="primaryBtn"
              >
                Contact Us
              </div>
            </div>
          </div>
          <div className="howWeDoSteps">
            <div className="howWeDoCard">
              <div className="stepNumberWrapper">
                <span className="numbers">1</span>
              </div>
              <div className="stepContent">
                <div className="cardWrapper">
                  <img src="/handshake.png" alt="how we do" width={32} />
                </div>
                <h3>Client Onboarding</h3>
                <p>Understanding Client Requirements and Crafting a Strategy</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper">
                <span className="numbers">2</span>
              </div>
              <div className="stepContent">
                <div className="cardWrapper">
                  <img src="/design-thinking.png" alt="how we do" width={32} />
                </div>
                <h3>Design Review</h3>
                <p>Designing with Precision and Creativity</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper">
                <span className="numbers">3</span>
              </div>
              <div className="stepContent">
                <div className="cardWrapper">
                  <img src="/shuttle.png" alt="how we do" width={32} />
                </div>
                <h3>Project Live</h3>
                <p>Development, Testing, and Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
