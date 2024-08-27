import React from "react";
import styles from './page.module.scss';

function Work({ data }) {
  return (
    <section className={styles.works}>
      <div className='container'>
        <h2 className='headingv2'>{data.label}</h2>
        <div className={styles.cardContainer}>
          {data?.item?.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.imageWrapper}>
                    <img src='/banner-vr.png' alt='' />
                  </div>
                  <a href=''>{data.view}</a>
                </div>
                <h5 className={styles.info}>Design | Development | Branding</h5>
              </div>
              <h6 className={styles.subHeading}>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
