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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad natus cupiditate deserunt dignissimos rem in corporis veritatis sed est necessitatibus!</p>
                    </div>
                    {/* <div className="whyusHeadingImage">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637ca0961ec666cd8dadf60a_yellow-brick.svg" alt="why us" />
                    </div> */}
                </div>
                <div className="whyusWrapper">
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>Clean Code</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic?</p>
                    </div>
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>Clean Code</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic?</p>
                    </div>
                    <div className="whyusCard">
                        <img src="https://uploads-ssl.webflow.com/61a9d163662d2084d7cbc38f/637caadc81a3d2099a52ad72_MVP%20development.svg" alt="why us" />
                        <h3>Clean Code</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, hic?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whyus