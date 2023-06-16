import React from "react";
import "./HowWeDo.scss";
import { PrimaryButton } from "../../buttons/Buttons";

const HowWeDo = () => {

  return (
    <section className="howWeDo">
      <div className="container">
        <div className="howWeDoContent">
          <div className="howWeDoMainHeading">
            <div className="heading">
                <h2>How We Do</h2>
                <p>From  Onboarding to take off</p>
                <PrimaryButton btnName='Contact Us' />
            </div>
          </div>
          <div className="howWeDoSteps">
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">1</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
                <h3>Client Onboarding</h3>
                <p>Understanding Client Requirements and Crafting a Strategy</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">2</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
                <h3>Design Review</h3>
                <p>Designing with Precision and Creativity</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">3</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
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
