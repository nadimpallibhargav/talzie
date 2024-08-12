import React from "react";
import "./HowWeDo.scss";

const HowWeDo = ({ howWeDo, contact, scrollToSection }) => {
  return (
    <section className="howWeDo" ref={howWeDo}>
      <div className="container">
        <div className="howWeDoContent">
          <div className="howWeDoMainHeading">
            <div className="heading">
              <h2>How We Do</h2>
              <p style={{maxWidth:500}}>From onboarding to takeoff: We'll design, develop, and launch your website with precision and care.</p>
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
                <div className="iconWrapper">
                  <img src="/handshake.svg" alt="how we do" width={46} />
                </div>
                <h3>Client Onboarding</h3>
                <p>Delving deep into client requirements to devise a customized strategy for optimal outcomes.</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper">
                <span className="numbers">2</span>
              </div>
              <div className="stepContent">
                <div className="iconWrapper">
                  <img src="/design-thinking.svg" alt="how we do" width={46} />
                </div>
                <h3>Design Review</h3>
                <p>Infusing designs with a blend of meticulous precision and imaginative innovation, ensuring a perfect balance of form and function.</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper">
                <span className="numbers">3</span>
              </div>
              <div className="stepContent">
                <div className="iconWrapper">
                  <img src="/shuttle.svg" alt="how we do" width={46} />
                </div>
                <h3>Project Live</h3>
                <p>Navigating through Development, Rigorous Testing, to a Smooth Deployment Process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
