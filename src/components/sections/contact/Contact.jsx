import React from 'react'
import { PrimaryButton } from '../../buttons/Buttons';
import "./Contact.scss";
function Contact() {
  return (
    <>
    <section className="contact">
          <div className="container">
        <div className="heading" style={{textAlign:"center"}}>
          <h5>What’s  Next ?</h5>
          <label>Get In Touch</label>
        </div>
        <div className='contactFormWrapper'>
        <div class="formContainer">
          <form action="#">
            <div class="user__details">
              <div class="input__box">
                <span class="details">First Name</span>
                <input type="text" placeholder="E.g: John" required />
              </div>
              <div class="input__box">
                <span class="details">Last Name</span>
                <input type="text" placeholder="E.g: Smith" required />
              </div>
              <div class="input__box">
                <span class="details">Email</span>
                <input type="email" placeholder="johnsmith@hotmail.com" required />
              </div>
              <div class="input__box">
                <span class="details">Phone Number</span>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required />
              </div>
            </div>
            <div class="contactButton">
                <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        </div>
    
        </div>
       
    </section>
        {/* <div class="media">
        <img src='/instagram.png'/>
        <img src='/instagram.png'/>
        <img src='/instagram.png'/>
        <img src='/instagram.png'/>
        <img src='/instagram.png'/>
      </div> */}
      </>
  )
}   

export default Contact