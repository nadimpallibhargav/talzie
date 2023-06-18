import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveContactUs, sendMailUs } from "../../../services/contactUsApis";
import { TALZIE_ADMIN } from "../../../utlis/API_URL";
import "./Contact.scss";

function Contact({ contact }) {
  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectdetails: "",
  });
  const [showError, setShowError] = useState(false);

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    setShowError(true);

    if (mobileValidation() || emailValidation()) {
      return;
    }

    const { fullName, phone, email, projectdetails } = userData;

    const res = await saveContactUs({
      fullName,
      phone,
      email,
      projectdetails,
    });

    if (res.status === 200) {
      setUserData({
        fullName: "",
        phone: "",
        email: "",
        projectdetails: "",
      });
      toast.success("Submitted Successfully");
    } else {
      toast.error("Something went Wrong...");
    }

    // Send email using a simple email sending service
    const senderEmail = TALZIE_ADMIN; // Replace with the actual sender email
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
      sendMailUs({
        service_id: "service_apyi5hc",
        template_id: "template_f34kfgm",
        user_id: "G3kBEdhcK456nPl9e",
        template_params: {
          senderEmail,
          recipientEmail,
          subject,
          message,
        },
      });

      // Send auto-reply email to the user
      sendMailUs({
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
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setShowError(false);
  };

  const mobileValidation = () => {
    if (!userData.phone.length || userData.phone.length < 10) {
      return true;
    } else {
      return false;
    }
  };

  const emailValidation = () => {
    const regexTest = userData.email.match(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    );

    if (!regexTest?.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <section className="contact" ref={contact}>
        <div className="container">
          <div className="heading" style={{ textAlign: "center" }}>
            <h5>Whats Next?</h5>
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
                    {showError && mobileValidation() ? (
                      <p className="error">Please enter Valid Number</p>
                    ) : (
                      ""
                    )}
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
                    {showError && emailValidation() ? (
                      <p className="error">Please enter Valid email</p>
                    ) : (
                      ""
                    )}
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
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default Contact;
