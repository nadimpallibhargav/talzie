'use client';

import React, { useState } from 'react';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

type FormData = {
  from_name: string;
  user_email: string;
  message: string;
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = 'service_b0frvz9'; // Replace with your EmailJS Service ID
    const templateID = 'template_lhwzl98'; // Replace with your EmailJS Template ID
    const userID = 'L4EmhoTI2BsKkdWyX'; // Replace with your EmailJS User ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        setFormData({from_name: '', user_email: '', message: '' }); // Reset form after success
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h5 className="headingv2" style={{ color: '#000' }}>
          Contact Us
        </h5>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactWrap}>
            <h5>Hey, I’m </h5>
            <input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="enter your name"
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
              placeholder="enter your email address"
              type="email"
              required
            />
            <h5>Here’s what I’m thinking:</h5>
          </div>
          <div className={styles.splitWrap}>
      
          <input
             name="message"
             value={formData.message}
             onChange={handleChange}
            placeholder='spill the ink of your mind right here...'
            type='text'
            className='text-black'
          />
          </div>
          <div className={styles.buttonwrap}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <h5>FOLLOW US ON : LINKEDIN | FACEBOOK | INSTAGRAM</h5>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
