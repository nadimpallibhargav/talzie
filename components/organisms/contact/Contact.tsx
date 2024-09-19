"use client";

import React, { useState } from "react";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "emailjs-com";
import styles from './Contact.module.scss';

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

    const serviceID = 'service_b0frvz9'; 
    const templateID = 'template_lhwzl98'; 
    const userID = 'L4EmhoTI2BsKkdWyX'; 

    const myPromise = emailjs.send(serviceID, templateID, formData, userID);

    toast.promise(
      myPromise,
      {
        loading: 'Sending your message...',
        success: 'Email sent successfully!',
        error: 'Failed to send email. Please try again later.',
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 2000,
        },
      }
    );

    myPromise.then(() => {
      setFormData({ from_name: '', user_email: '', message: '' }); 
    });
  };

  return (
    <section className={styles.contact}>
      <Toaster
        position='top-right'
        toastOptions={{
          className: '',
          style: {
            fontSize: 18,
            fontWeight: 600,
          },
        }}
      />
      <div className='container'>
        <h5 className='headingv2' style={{ color: '#000' }}>
          Contact Us
        </h5>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactWrap}>
            <h5>Hey, I’m </h5>
            <input
              name='from_name'
              value={formData.from_name}
              onChange={handleChange}
              placeholder='enter your name'
              type='text'
              required
            />
            <h5>
              Let’s grab a virtual coffee and chat things out. Reach me back at
            </h5>
            <input
              name='user_email'
              value={formData.user_email}
              onChange={handleChange}
              placeholder='enter your email address'
              type='email'
              required
            />
            <h5>Here’s what I’m thinking:</h5>
          </div>
          <div className={styles.splitWrap}>
            <input
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='spill the ink of your mind right here...'
              type='text'
            />
          </div>
          <div className={styles.buttonwrap}>
            <button type='submit' className={styles.submitButton}>
              Submit
            </button>
            <h5 className='flex items-center gap-[8px] flex-wrap'>
              <span className='max-[768px]:w-full'>FOLLOW US ON :</span>
              <Link
                href='https://www.linkedin.com/company/talzie/'
                target='_blank'
              >
                LINKEDIN
              </Link>
              <span>|</span>
              <Link
                href='https://www.facebook.com/people/Talzie-Web-Solutions/61565415118255/'
                target='_blank'
              >
                FACEBOOK
              </Link>
              <span>|</span>
              <Link
                href='https://www.instagram.com/talzie.info25/'
                target='_blank'
              >
                INSTAGRAM
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
