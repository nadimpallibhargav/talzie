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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, suscipit.</p>
                <PrimaryButton btnName='Contact Us' />
            </div>
          </div>
          <div className="howWeDoSteps">
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">1</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, at.</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">1</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, at.</p>
              </div>
            </div>
            <div className="howWeDoCard">
              <div className="stepNumberWrapper"><span className="numbers">1</span></div>
              <div className="stepContent">
                <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/636b5475cbddd71f7b9318f2_kickoff.svg" alt="how we do" />
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, at.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
