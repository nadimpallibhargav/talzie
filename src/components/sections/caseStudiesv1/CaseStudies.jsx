import React from 'react'
import "./caseStudiesV1.scss";
import casestudyone from "../../../../public/casestudyone.png";
import casestudytwo from "../../../../public/casestudytwo.png";
import Lottie from "lottie-react";
import LottieScroll from "../../../../public/lottie/LottieScroll.json";


const CaseStudiesV1 = ({contact, caseStudies}) => {
  return (
    <section ref={caseStudies}>
      <div className="container">
      <div className="caseStudiesHeading">
            <div className="heading">
              <h2>Our Works</h2>
              <p style={{maxWidth:750}}>
                 Here's a glimpse of some of our recent and exciting projects. Each of them reflects our focus on user-centered design and our commitment to excellence in user experience.
              </p>
            </div>
          </div>
            <div className='caseStudiesV1Wrapper'>
                <div className='caseStudiesV1Content'>
                    <label>Tour Booking App</label>
                    <h6>2023 - Product design</h6>
                    <p>Designed a user-friendly travel booking app that enables users to effortlessly plan and book their dream vacations. The app offers a seamless experience for browsing destinations, selecting packages, and managing reservations, making travel planning a breeze</p>
                </div>
                <div  className='caseStudiesV1Image'>
                    <img src='/booking-app.png' />
                </div>
            </div>
            <div className='caseStudiesV1Wrapper'>
                <div className='caseStudiesV1Content'>
                    <label>Web3 Gamming</label>
                    <h6>2023 - Product design</h6>
                    <p></p>
                    <p>Transforming a Web3 Play-to-Earn Gaming Platform in India Our journey involved revamping a play-to-earn gaming platform. </p>
                    <p>We harnessed the power of UI/UX design to bring gamers and game developers together, fostering a vibrant community that ignites fresh innovations within the gaming realm.</p>
                </div>
                <div  className='caseStudiesV1Image'>
                    <img src={casestudyone} />
                </div>
            </div>
            <div className='caseStudiesV1Wrapper'>
                <div className='caseStudiesV1Content'>
                    <label>HRMS App</label>
                    <h6 style={{width:220}}>2023 - React Native Development</h6>
                    <p>
                    Revolutionizing Mobile App Development: A Recruitment Management Application 
                    Our endeavor centered around crafting a cutting-edge mobile app, tailored for corporate agencies. 
                    </p>
                    <p>This app streamlines candidate management, offering advanced features for tracking and analyzing job vacancies, empowering businesses with unparalleled recruitment solutions.</p>
                </div>
                <div  className='caseStudiesV1Image'>
                    <img src={casestudytwo} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaseStudiesV1