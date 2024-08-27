import React, { useState } from "react";
import styles from './index.module.scss';

function HeaderV2() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className='container'>
          <div className={styles.navWrapper}>
            <div className={styles.wrap}>
              <img
                src='/images/talzie-logo-black.png'
                alt='logo'
                onClick={toggleDrawer}
                className={styles.logo}
              />
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className={styles.drawer}>
            <div className={styles.header}>
              <div className={styles.logoContainer} onClick={toggleDrawer}>
                <div className={styles.talzieBanner}>
                  <img src='/images/talzie-logo-black.png' />
                </div>
                <h5>Talzie</h5>
              </div>
              <img
                src='/images/icons/close.svg'
                onClick={toggleDrawer}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className={styles.body}>
              <h5>Our Work</h5>
              <h5>About Us</h5>
              <h5>Our Process</h5>
              <h5>Blog</h5>
            </div>
            <div className={styles.footer}>
              <div className={styles.buttonwrap}>
                <p>
                  At Talzie web solutions, we don't just design and build
                  websites. <br /> — we create digital experiences that
                  captivate, convert, and inspire. Whether you're a startup
                  looking to make a bold entrance or an established brand aiming
                  to redefine your online presence, our team of creative experts
                  is here to turn your ideas into reality.
                </p>
                <h5>FOLLOW US ON : LINKEDIN | FACEBOOK | INSTAGRAM</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderV2;
