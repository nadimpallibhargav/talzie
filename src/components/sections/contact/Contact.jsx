import React, { useState } from "react";
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

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, phone, email, projectdetails } = userData;

    if (fullName || phone || email || projectdetails) {
      const res = await fetch(
        "https://talzie-4e5a1-default-rtdb.firebaseio.com//userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            projectdetails,
          }),
        }
      );

      if (res) {
        setUserData({
          fullName: "",
          phone: "",
          email: "",
          projectdetails: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }

    // Send email using a simple email sending service
    const senderEmail = "talzie.contact@gmail.com"; // Replace with the actual sender email
    const recipientEmail = email;
    const subject = "New Contact Form Submission";
    const message = `
    Name: ${fullName}
    Email: ${email}
    Phone Number: ${phone}
    Project Details: ${projectdetails}
    `;

    try {
      // Send email to recipientEmail
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_apyi5hc",
          template_id: "template_f34kfgm",
          user_id: "G3kBEdhcK456nPl9e",
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
          service_id: "service_apyi5hc",
          template_id: "template_f34kfgm", // Replace with the auto-reply template ID
          user_id: "G3kBEdhcK456nPl9e",
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
                      name="projectdetails"
                      className="form-control"
                      placeholder="Enter Project Details"
                      value={userData.projectdetails}
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
