import { useState } from "react";

import "./Contact.scss";

function Contact({ contact }) {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectdetails: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <section className="contact" ref={contact}>
        <div className="container">
          <div className="heading" style={{ textAlign: "center" }}>
            <h5>What's Next?</h5>
            <span className="label">Get In Touch</span>
          </div>

          <div className="contactFormWrapper">
            <div className="formContainer">
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div className="user__details">
                  <div className="input__box">
                    <label htmlFor="fullName" className="details">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={userData.fullName}
                      onChange={postUserData}
                      autoComplete="true"
                    />
                  </div>
                  <div className="input__box">
                    <label htmlFor="phone" className="details">
                      Mobile
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone Number "
                      value={userData.phone}
                      onChange={postUserData}
                      autoComplete="true"
                    />
                  </div>
                  <div className="input__box">
                    <label htmlFor="email" className="details">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={userData.email}
                      onChange={postUserData}
                      autoComplete="true"
                    />
                  </div>
                  <div className="input__box">
                    <label htmlFor="projectdetails" className="details">
                      Project Details
                    </label>
                    <textarea
                      id="projectdetails"
                      className="form-control"
                      name="projectdetails"
                      value={userData.projectdetails}
                      onChange={postUserData}
                      placeholder="Enter Project Details"
                      autoComplete="true"
                    ></textarea>
                  </div>
                </div>
                <div className="contactButton">
                  <input
                    type="submit"
                    className="primaryBtn"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
            <div className="socialWrapper">
              <div className="socialInfo">
                <a className="socialLink" href="mailto:hello@talzie.com">
                  <span className="socialButton">
                    <img src="/gmail.png" width={24} alt="gmail" />
                  </span>
                  <span className="socialText">hello@talzie.com</span>
                </a>
              </div>

              <div className="socialInfo">
                <a
                  className="socialLink"
                  target="blank"
                  href="https://www.linkedin.com/company/talzie/"
                >
                  <span className="socialButton">
                    <img src="/linkedin.png" width={24} alt="linkedin" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
