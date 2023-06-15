import React, { useState } from "react";
import "./Contact.scss";

function Contact({ contact }) {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    usermessage: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, phone, email, usermessage } = userData;

    if (fullName || phone || email || usermessage) {
      const res = await fetch(
        "https://talzieform-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            usermessage,
          }),
        }
      );

      if (res) {
        setUserData({
          fullName: "",
          phone: "",
          email: "",
          usermessage: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }

    // Send email using a simple email sending service
    const senderEmail = "bhargavraju98@gmail.com"; // Replace with the actual sender email
    const recipientEmail = email;
    const subject = "New Contact Form Submission";
    const message = `
    Name: ${fullName}
    Email: ${email}
    Phone Number: ${phone}
    `;

    try {
      // Send email to recipientEmail
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_m495mln",
          template_id: "template_lhwzl98",
          user_id: "L4EmhoTI2BsKkdWyX",
          template_params: {
            senderEmail,
            recipientEmail,
            subject,
            message,
          },
        }),
      });

      // Send auto-reply email to the user
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_m495mln",
          template_id: "template_lhwzl98", // Replace with the auto-reply template ID
          user_id: "L4EmhoTI2BsKkdWyX",
          template_params: {
            senderEmail,
            recipientEmail: email, // Set the sender's email as the recipient for the auto-reply
            subject: "Thank you for contacting us",
            message:
              "This is an auto-reply message. We have received your contact form submission. We will get back to you soon.",
          },
        }),
      });

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <section className="contact" ref={contact}>
        <div className="container">
          <div className="heading" style={{ textAlign: "center" }}>
            <h5>What's Next?</h5>
            <label>Get In Touch</label>
          </div>
          <div className="contactFormWrapper">
            <div className="formContainer">
              <form method="POST">
                <div className="user__details">
                  <div className="input__box">
                    <span className="details">Full Name</span>
                    <input
                      type="text"
                      name="fullName"
                      id=""
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={userData.fullName}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Mobile</span>
                    <input
                      type="text"
                      name="phone"
                      id=""
                      className="form-control"
                      placeholder="Enter Phone Number "
                      value={userData.phone}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      name="email"
                      id=""
                      className="form-control"
                      placeholder="Enter Email"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Project Details</span>
                    <input
                      type="text"
                      name="usermessage"
                      id=""
                      className="form-control"
                      placeholder="Enter Project Details"
                      value={userData.usermessage}
                      onChange={postUserData}
                    />
                  </div>
                </div>
                <div className="contactButton">
                  <input
                    type="submit"
                    className="primaryBtn"
                    value="Submit"
                    onClick={submitData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
