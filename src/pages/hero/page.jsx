import React from "react";
import styles from './page.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContainer}>
          <div>
            <h1>Designing Tomorrow’s Websites, Today</h1>
            <div className={styles.heroFooter}>
              <h6 className={styles.info}>
                Design Visually. <br />
                Create Efficiently.
              </h6>
              <p className={styles.description}>
                At Talzie web solutions, we don't just design and build
                websites. <br />— we create digital experiences that captivate,
                convert, and inspire. Whether you're a startup looking to make a
                bold entrance or an established brand aiming to redefine your
                online presence, our team of creative experts is here to turn
                your ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
