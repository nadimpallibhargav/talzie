import React from "react";
import styles from "./page.module.css";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>Designing Tomorrow’s Websites, Today</h1>
      <div className={styles.heroFooter}>
        <div>
          <h6 className={styles.info}>Design Visually.</h6>
          <h6 className={styles.info}>Create Efficiently.</h6>
        </div>
        <p className={styles.description}>
          At Talzie web solutions, we don't just design and build websites.{" "}
          <br />— we create digital experiences that captivate, convert, and
          inspire. Whether you're a startup looking to make a bold entrance or
          an established brand aiming to redefine your online presence, our team
          of creative experts is here to turn your ideas into reality.
        </p>
      </div>
    </section>
  );
}

export default Hero;
