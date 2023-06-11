import React from 'react'

import './Whyus.scss'

const Whyus = ({whyUs}) => {
  return (
    <section className="whyus" ref={whyUs}>
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
                    <div className='cardWrapper'>
                        <img src="/terminal.png" alt="why us" width={32}/>
                    </div>
                        <h3>Clean Code</h3>
                        <p>Experience clean and efficient code that powers high-performance websites.</p>
                    </div>
                    <div className="whyusCard">
                        <div className='cardWrapper'>
                        <img src="/graphic-design.png" alt="why us" width={32}/>
                        </div>
                        <h3>UI design</h3>
                        <p>Delight your audience with visually stunning designs that harmonize user experience.</p>
                    </div>
                    <div className="whyusCard">
                    <div className='cardWrapper'>
                        <img src="/quality.png" alt="why us" width={32}/>
                        </div>
                        <h3>Quality assurance</h3>
                        <p>Delivering flawless website quality, performance and satisfaction.</p>
                    </div>
                    
                </div>
                <div className="whyusWrapper">
                    <div className="whyusCard">
                    <div className='cardWrapper'>
                        <img src="/rating.png" alt="why us" width={32}/>
                    </div>
                        <h3>Technical Expertise</h3>
                        <p>Team member has years of experience in their industry with a proven satisfaction.</p>
                    </div>
                    <div className="whyusCard">
                        <div className='cardWrapper'>
                        <img src="/time.png" alt="why us" width={32}/>
                        </div>
                        <h3>Long-Term Relationships</h3>
                        <p>We make connections, not transactions. We invest fully in every client to form a partnership for years to come.</p>
                    </div>
                    <div className="whyusCard" style={{visibility:"hidden "}} id="whyusCard">
                    <div className='cardWrapper'>
                        <img src="/quality.png" alt="why us" width={32}/>
                        </div>
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