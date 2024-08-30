'use client'
import styles from './Contact.module.scss';

function Contact() {
  return (
    <section className={styles.contact}>
      <div className='container'>
        <h5 className='headingv2' style={{ color: '#000' }}>
          Contact Us
        </h5>
        <div className={styles.contactWrap}>
          <h5>Hey, I’m </h5>
          <input placeholder='enter your name' type='text' />{' '}
          <h5>
            Let’s grab a virtual coffe and chat things out. Reach me back at
          </h5>{' '}
          <input placeholder='enter your email address' type='text' />{' '}
          <h5>Here’s what I’m thinking:</h5>
        </div>
        <div className={styles.splitWrap}>
          <input
            placeholder='spill the ink of your mind right here...'
            type='text'
          />
        </div>
        <div className={styles.buttonwrap}>
          <button className={styles.submitButton}>Submit</button>
          <h5>FOLLOW US ON : LINKEDIN | FACEBOOK | INSTAGRAM</h5>
        </div>
      </div>
    </section>
  );
}

export default Contact;
