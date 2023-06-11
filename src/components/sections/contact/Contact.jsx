import React from "react";
import "./Contact.scss";

function Contact({contact}) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, phoneNumber } = event.target;

    // Send email using a simple email sending service
    const senderEmail = "bhargavraju98@gmail.com"; // Replace with the actual sender email
    const recipientEmail = email.value;
    const subject = "New Contact Form Submission";
    const message = `
    Name: ${firstName.value} ${lastName.value}
    Email: ${email.value}
    Phone Number: ${phoneNumber.value}
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
            recipientEmail: email.value, // Set the sender's email as the recipient for the auto-reply
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

    // ...
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
              <form onSubmit={handleSubmit}>
                <div className="user__details">
                  <div className="input__box">
                    <span className="details">First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="E.g: John"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="E.g: Smith"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="johnsmith@hotmail.com"
                      required
                    />
                  </div>
                  <div className="input__box">
                    <span className="details">Phone Number</span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="012-345-6789"
                      required
                    />
                  </div>
                </div>
                <div className="contactButton">
                  <input type="submit" className="primaryBtn" value="Submit" />
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
