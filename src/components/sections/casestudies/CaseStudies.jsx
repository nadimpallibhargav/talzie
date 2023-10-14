import React from "react";
import casestudyone from "../../../../public/casestudyone.png";
import casestudytwo from "../../../../public/casestudytwo.png";
import "./CaseStudies.scss";

const CaseStudies = ({ caseStudies }) => {
  return (
    <section className="caseStudies" ref={caseStudies}>
      <div className="container">
        <div className="caseStudiesContent">
          <div className="caseStudiesHeading">
            <div className="heading">
              <h2>Case Studies</h2>
              <p>
                Our Recent Works
              </p>
            </div>
          </div>

          <div className="caseStudiesWrapper">
            <div className="caseStudy">
                <img src={casestudyone} alt="case study" />
                <div className="case-details">
                    <h3>Web3 Gamming</h3>
                    <p>Transforming a Web3 Play-to-Earn Gaming Platform in India</p>
                    <p>Our journey involved revamping a play-to-earn gaming platform. </p>
                    <p>We harnessed the power of UI/UX design to bring gamers and game developers together, fostering a vibrant community that ignites fresh innovations within the gaming realm.</p>
                    <div class="tags">
                      <span class="tag">UI/UX Design</span>
                    </div>

                </div>
            </div>

            <div className="caseStudy">
                <img src={casestudytwo} alt="case study" />
                <div className="case-details">
                    <h3>HRMS App</h3>
                    <p> 
                    Revolutionizing Mobile App Development: A Recruitment Management Application 
                    </p>
                    <p>
                    Our endeavor centered around crafting a cutting-edge mobile app, tailored for corporate agencies. 
                    </p>
                    <p>This app streamlines candidate management, offering advanced features for tracking and analyzing job vacancies, empowering businesses with unparalleled recruitment solutions.</p>
                    <div class="tags">
                      <span class="tag">UI/UX Design</span>
                      <span class="tag">React Native Development</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
