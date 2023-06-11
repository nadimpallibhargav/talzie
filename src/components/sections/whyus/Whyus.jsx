import React from 'react'

import './Whyus.scss'

const Whyus = () => {
  return (
    <section className="whyus">
        <div className="container">
            <div className="whyusContent">
                <div className="whyusHeading">
                    <div className="heading">
                        <h2>Why Us</h2>
                        <p>Choose us for expert devlopment and design that combines stunning visuals, seamless functionality, and personalized attention.</p>
                    </div>
                    {/* <div className="whyusHeadingImage">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637ca0961ec666cd8dadf60a_yellow-brick.svg" alt="why us" />
                    </div> */}
                </div>
                <div className="whyusWrapper">
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>Clean Code</h3>
                        <p>Experience clean and efficient code that powers high-performance websites.</p>
                    </div>
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>UI design</h3>
                        <p>Delight your audience with visually stunning designs that harmonize user experience.</p>
                    </div>
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>Quality assurance</h3>
                        <p>Delivering flawless website quality, performance and satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whyus