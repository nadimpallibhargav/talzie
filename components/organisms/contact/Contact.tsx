"use client";

import React, { useState } from "react";
import Link from 'next/link';
import toast, { Toaster } from "react-hot-toast";
import styles from "./Contact.module.scss";

type FormData = {
  from_name: string;
  user_email: string;
  message: string;
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { from_name, user_email, message } = formData;

    // Validation
    if (!from_name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!user_email.trim()) {
      toast.error("Please enter your WhatsApp number.");
      return;
    }
    if (!/^\d{10,15}$/.test(user_email.trim())) {
      toast.error("Please enter a valid WhatsApp number (10-15 digits).");
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    // Your WhatsApp number (receiver)
    const phoneNumber = "+916301725336";

    // Compose the WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hey, I'm ${from_name},\nLet’s grab a virtual coffee and chat things out. Reach me back at: ${user_email}.\nHere’s what I’m thinking: ${message}`
    );

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.contact}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            fontSize: 18,
            fontWeight: 600,
          },
        }}
      />
      <div className="container">
        <h5 className="headingv2" style={{ color: "#000" }}>
          Contact Us
        </h5>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactWrap}>
            <h5>Hey, I’m </h5>
            <input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="my name is..."
              type="text"
              required
            />
            <h5>
              Let’s grab a virtual coffee and chat things out. Reach me back at
            </h5>
            <input
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="my WhatsApp no is..."
              type="tel"
              required
            />
            <h5>Here’s what I’m thinking:</h5>
          </div>
          <div className={styles.splitWrap}>
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="spill the ink of your mind right here..."
              type="text"
            />
          </div>
          <div className={styles.buttonwrap}>
            <button type="submit" className={styles.submitButton}>
              Whatsapp
            </button>
            <h5 className="flex items-center gap-[8px] flex-wrap">
              <span className="max-[768px]:w-full">FOLLOW US ON :</span>
              {/* <Link
                href="https://www.linkedin.com/company/talzie/"
                target="_blank"
              >
                LINKEDIN
              </Link> */}
              {/* <span>|</span> */}
              <Link
                href="https://www.instagram.com/talzie.info25/"
                target="_blank"
              >
                INSTAGRAM
              </Link>
              <span>|</span>
              <Link
                href="https://www.facebook.com/people/Talzie-Web-Solutions/61565415118255/"
                target="_blank"
              >
                FACEBOOK
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
